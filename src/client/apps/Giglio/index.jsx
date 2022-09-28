import React from 'react';
import 'survey-core/modern.min.css';
import { Loader, GiglioJSON } from '../exports';
import { Model, StylesManager, } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

StylesManager.applyTheme("modern");

class GiglioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      court_case_numbers: '',
      da_numbers: '',
      data: 'TEST',
    };
  }

  render() {
    var survey = new Model(GiglioJSON);

    survey.onComplete.add(function (result) {
      var sanitizer = { ...result.data };
      sanitizer['cases_not_resolved'] = JSON.stringify(sanitizer['cases_not_resolved']);
      serverFunctions.insert_row(window.db.nolle, 'Initial Requests', sanitizer);
    })
    return (
        
      this.state.data == '' ? (<Loader />) : (
        <>
          <Survey model={survey} />
        </>
      )
    )
  }
}

export default GiglioForm;