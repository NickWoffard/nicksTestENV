import React from 'react';
import 'survey-core/modern.min.css';
import { Model, StylesManager, } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { GASClient } from 'gas-client';
import { EvaluationJSON, Loader } from '../exports';
const { serverFunctions } = new GASClient();

StylesManager.applyTheme("modern");

const loadEvaluation = (sender, options) => {
    if (options.oldCurrentPage == 'Evaluation') {
        var employee_sheet = sender.getValue('employee_name').split(';')[0];
        var evaluation_series = sender.getValue('employee_name').split(';')[1];
        serverFunctions.get_evaluation_template(employee_sheet, evaluation_series).then((response) => {
            var page = sender.addNewPage('Job Responsibilities');
            var i = 1;
            Array.from(response.job_specific_template).map((row) => {
                console.log(row);
                var description = page.addNewQuestion('comment', `job_specific_${i}_description`);
                description.title = row[`job_specific_${i}_criteria`];
                description.value = row[`job_specific_${i}_description`];
                var comments = page.addNewQuestion('text', `job_specific_${i}_comments`);
                comments.title = 'Comments';
                comments.requiredIf = `{job_specific_${i}_points} notempty`;
                var points = page.addNewQuestion('rating', `job_specific_${i}_points`);
                points.title = 'Points';
                points.startWithNewLine = false;
                i++;
            });
            var page = sender.addNewPage('Job Capabilities');
            i = 1;
            Array.from(response.non_job_specific_template).map((row) => {
                var description = page.addNewQuestion('comment', `non_job_specific_${i}_description`);
                description.title = row[`non_job_specific_${i}_criteria`];
                description.value = row[`non_job_specific_${i}_description`];
                var comments = page.addNewQuestion('text', `non_job_specific_${i}_comments`);
                comments.title = "Comments";
                comments.requiredIf = `{non_job_specific_${i}_points} notempty`;
                var points = page.addNewQuestion('rating', `non_job_specific_${i}_points`);
                points.title = "Points";
                points.startWithNewLine = false;
                i++;
            });
            var action = page.addNewQuestion('boolean', 'action');
            action.title = "Send or Save Evaluation";
            action.labelTrue = "Send";
            action.labelFalse = "Save";
            action.valueTrue = "Send";
            action.valueFalse = "Save";
        });
    }
};

class EvaluationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee_list: '',
        };
        if (props.type == 'load_saved') {
            serverFunctions.get_user(window.db.staff).then((response) => {
                serverFunctions.get_rows(response.evaluation_sheet_id, ['Saved Queue'], {}).then((saved_item) => {
                    var new_list = []; Array.from(saved_item).map((row) => {
                        new_list.push({ text: row.employee_name, value: `${row.evaluation_sheet_id};${row.evaluation_series}` })
                    });
                    this.setState({ employee_list: new_list })
                });
            })
        }
        else {
            serverFunctions.get_rows(window.db.staff, ['Employee'], 'email', {}).then((response) => {
                var new_list = []; Array.from(response).map((row) => {
                    new_list.push({ text: row.email, value: `${row.evaluation_sheet_id};${row.evaluation_series}` })
                });
                this.setState({ employee_list: new_list })
            });
        }
    }

    render() {

        EvaluationJSON.pages[0].elements[0].choices = this.state.employee_list;
        var survey = new Model(EvaluationJSON);

        survey.onComplete.add(function (result) {
            console.log(result.data);
            if (result.data.action == 'Save') {
                serverFunctions.get_user(window.db.staff).then((response) => {
                    serverFunctions.insert_row(response.evaluation_sheet_id, 'Saved Queue', result.data);
                })
            }
            else {
                var employee_sheet = result.data.employee_name.split(';')[0];
                serverFunctions.insert_row(employee_sheet, 'Evaluations', result.data);
            }
        });

        return (
            this.state.employee_list == '' ? (<Loader />) : (
                <>
                    <Survey onCurrentPageChanged={loadEvaluation} model={survey} />
                </>
            )
        )
    }
}

export default EvaluationForm;