import React from 'react';
import 'survey-core/modern.min.css';
import { Model, StylesManager, } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { GASClient } from 'gas-client';
import { Loader, PleaJSON } from '../exports';
const { serverFunctions } = new GASClient();

StylesManager.applyTheme("modern");


class PleaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      court_case_numbers: '',
      da_numbers: '',
      data: '',
    };
    this.autoFillForm = this.autoFillForm.bind(this);
    serverFunctions.get_rows(window.db.plea, ['Denied Requests'], {}).then((response) => { this.setState({ data: response }) });
    serverFunctions.autocomplete(window.db.plea, ['Denied Requests'], 'court_case_number', {}).then((response) => { this.setState({ court_case_numbers: response }) });
    serverFunctions.autocomplete(window.db.plea, ['Denied Requests'], 'da_number', {}).then((response) => { this.setState({ da_numbers: response }) });
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
        console.log(value);
        if (question.propertyHash.name == 'cases_not_resolved') {
          value[question.propertyHash.name] = JSON.parse(value[question.propertyHash.name])
        }
          sender.setValue(question.propertyHash.name, value[question.propertyHash.name]); 
      })
    }
    autoFillFields.map((field) => { sender.setVariable(field, '') });
  };

  render() {

    PleaJSON.pages[0].elements[0].choices = this.state.court_case_numbers;
    PleaJSON.pages[0].elements[1].choices = this.state.da_numbers;
    var autoFillFields = ['court_case_number', 'da_number'];
    var survey = new Model(PleaJSON);

    survey.onComplete.add(function (result) {
      var sanitizer = { ...result.data };
      sanitizer['cases_not_resolved'] = JSON.stringify(sanitizer['cases_not_resolved']);
      serverFunctions.insert_row(window.db.plea, 'Initial Requests', sanitizer);
    })
    
    return (
      this.state.data == '' ? (<Loader/>) : (
        <>
          <Survey onValueChanged={this.autoFillForm} model={survey} />
        </>
      )
    )
  }
}

export default PleaForm;