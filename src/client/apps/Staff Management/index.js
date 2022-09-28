import React from 'react';
import 'survey-core/modern.min.css';
import { Model, StylesManager, } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { GASClient } from 'gas-client';
import { Loader, StaffManagementJSON } from '../exports';
const { serverFunctions } = new GASClient();

StylesManager.applyTheme("modern");


const loadStaff = (sender, options) => {
  if (options.oldCurrentPage == 'email_search') {
    var employee_email = sender.getValue('email');
    serverFunctions.get_row(window.db.staff, 'Employee', [], {email:employee_email}).then((response) => {
      var questions = sender.getAllQuestions();
      questions.map((question) => {try {question.value = response[question.name]} catch (e) {}})
    }
    )
  }
}
class StaffForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: '',
      departments: '',
      evaluation_series_types: '',
      supervisors: '',
      emails: '',
      data: '',
    };
    serverFunctions.autocomplete(window.db.staff, ['Dropdowns'], 'titles', {}).then((response) => { this.setState({ titles: response }) });
    serverFunctions.autocomplete(window.db.staff, ['Dropdowns'], 'departments', {}).then((response) => { this.setState({ departments: response }) });
    serverFunctions.autocomplete(window.db.staff, ['Dropdowns'], 'evaluation_series_types', {}).then((response) => { this.setState({ evaluation_series_types: response }) });
    serverFunctions.get_rows(window.db.staff, ['Employee', 'Contractor', 'Intern'], {is_supervisor: 'TRUE'}).then((response) => { console.log(response); this.setState({ supervisors: response }) });
    serverFunctions.autocomplete(window.db.staff, ['Employee'], 'email', {}).then((response) => { this.setState({ emails: response }) });
  }

  autoFillForm (sender, options) {
    var autoFillFields = ['court_case_number', 'da_number'];
    var questions = sender.getAllQuestions();
    if (autoFillFields.includes(options.name) && sender.getVariable(options.name) != 'bypass') {
      autoFillFields.map((field) => { sender.setVariable(field, 'bypass') });
      questions.map((question) => {
        console.log(this.state.data);
        var value;
        for (var i in this.state.data) {
          var row = this.state.data[i];
          if (row[options.name] == options.value) {
            value = row;
          }
        }
        if (question.propertyHash.name == 'cases_not_resolved') {
          value[question.propertyHash.name] = JSON.parse(value[question.propertyHash.name])
        }
          sender.setValue(question.propertyHash.name, value[question.propertyHash.name]); 
      })
    }
    autoFillFields.map((field) => { sender.setVariable(field, '') });
  };

  render() {
    StaffManagementJSON.pages[0].elements[0].choices = this.state.emails;
    StaffManagementJSON.pages[1].elements[5].choices = this.state.titles;
    StaffManagementJSON.pages[1].elements[6].choices = this.state.departments;
    StaffManagementJSON.pages[1].elements[7].choices = Array.from(this.state.supervisors).map((row) => {
      return {
        text: row.email,
        value: row.staff_guid,
      }
    });
    StaffManagementJSON.pages[1].elements[8].choices = Array.from(this.state.supervisors).map((row) => {
      return {
        text: row.email,
        value: row.staff_guid,
      }
    });
    StaffManagementJSON.pages[1].elements[9].choices = this.state.evaluation_series_types;

    var survey = new Model(StaffManagementJSON);

    switch(this.props.type) {
      case 'onboard':
        survey.removePage(survey.getPageByName('email_search'));
        break;
      default:
        break;
    }
    
    survey.onComplete.add(function (result) {
      var sanitizer = { ...result.data };
      sanitizer['cases_not_resolved'] = JSON.stringify(sanitizer['cases_not_resolved']);
      serverFunctions.insert_row(window.db.plea, 'Initial Requests', sanitizer);
    })
    return (
    this.state.supervisors == '' ? (<Loader />) : (   
        <>
          <Survey onCurrentPageChanged={loadStaff} model={survey} />
        </>
      )
    )
  }
}

export default StaffForm;