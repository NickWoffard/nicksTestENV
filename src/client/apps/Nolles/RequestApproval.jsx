import React from 'react';
import 'survey-core/modern.min.css';
import { Loader, NolleJSON } from '../exports';
import { Model, StylesManager, } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

StylesManager.applyTheme("modern");


class NolleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      court_case_numbers: '',
      da_numbers: '',
      data: '',
    };
    this.autoFillForm = this.autoFillForm.bind(this);
    serverFunctions.get_rows(window.db.nolle, ['Denied Requests'], {}).then((response) => { this.setState({ data: response }) });
    serverFunctions.autocomplete(window.db.nolle, ['Denied Requests'], 'court_case_number', {}).then((response) => { this.setState({ court_case_numbers: response }) });
    serverFunctions.autocomplete(window.db.nolle, ['Denied Requests'], 'da_number', {}).then((response) => { this.setState({ da_numbers: response }) });
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
    var autoFillFields = ['court_case_number', 'da_number'];
    NolleJSON.pages[0].elements[0].choices = this.state.court_case_numbers;
    NolleJSON.pages[0].elements[1].choices = this.state.da_numbers;
    var survey = new Model(NolleJSON);

    survey.onComplete.add(function (result) {
      var sanitizer = { ...result.data };
      sanitizer['cases_not_resolved'] = JSON.stringify(sanitizer['cases_not_resolved']);
      serverFunctions.insert_row(window.db.nolle, 'Initial Requests', sanitizer);
    })
    
    return (
      this.state.data == '' ? (<Loader />) : (
        <>
          <Survey onValueChanged={this.autoFillForm} model={survey} />
        </>
      )
    )
  }
}

export default NolleForm;