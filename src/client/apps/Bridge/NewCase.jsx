import React from 'react';
import 'survey-core/modern.min.css';
import { Loader, NolleJSON } from '../exports';
import { Model, StylesManager, } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

StylesManager.applyTheme("modern");


class NewCaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Test',
    };
}

  render() {
    return (
      this.state.data == '' ? (<Loader />) : (
        <>
          <form id="newCase" class="forms">
  <header>
    <div class="row">
      <h1>New Case</h1>
    </div>
  </header>

  <div class="pt-4"></div>
  <div class="row">
    <div id="loadingArrestsList" class="hidden">
      <h4 class="d-inline-block"><small class="text-muted">Loading arrests list</small></h4>
      <div class="spinner-border spinner-border-sm" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
  </div>

  <div class="row pt-4">
    <div class="col">
      <label for="courtCaseNumber">Court case number</label>
      <input type="text" name="courtCaseNumber" class="form-control caseNumber"
        id="courtCaseNumber" value="T-4-FR-2022-"/>
    </div>
    <div class="col">
      <label for="defendantDob">Defendant DOB</label>
      <input type="date" id="defendantDob" class="form-control"/>
    </div>
  </div>
  <div class="row pt-4">
    <div class="col">
      <label for="charges">Top charge</label>
      <input type="text" name="charges" class="form-control" id="charges"/>
    </div>
    <div class="col-3">
      <label for="arrestDate">Date of arrest</label>
      <input type="date" id="arrestDate" class="form-control"/>
    </div>
  </div>


  <div class="row pt-4">
    <div class="col form-group pt-3">

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Yes"
          id="felonyWarrant"/>
        <small class="form-check-label" for="felonyWarrant">
          Felony warrant</small>
      </div>
    </div>
    <div class="col-7">
      <label for="defendantName">Defendant name</label>
      <input type="text" id="defendantName" class="form-control"/>
    </div>
  </div>


  <div class="row pt-4">
    <div class="col-3">
      <label for="incidentDate">Date of incident</label>
      <input type="date" id="incidentDate" class="form-control"/>
    </div>
    <div class="col">
      <label for="incidentLocation">Location of incident</label>
      <input type="text" autocomplete="off" id="incidentLocation" class="form-control"/>
      <input type="text" id="incidentLatLon" class="hidden"/>
    </div>
  </div>

  <div class="row pt-4">
    <div class="col">
      <label for="agency">Agency</label>
      <input name="agency" type="text" id="agency" class="form-control"/>
    </div>
    <div class="col">
      <label for="leanNumber">LEA Number</label>
      <input type="text" id="leaNumber" class="form-control"/>
    </div>
  </div>


  <div class="row pt-4">
    <div class="col">
      <label for="agent">Agent</label>
      <input name="agent" type="text" id="agent" class="form-control"/>
    </div>
    <div class="col pt-5">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Yes"
          id="familyViolence"/>
        <small class="form-check-label" for="familyViolence">
          Family violence</small>
      </div>
    </div>
    <div class="col">
      <img class="hidden re-hide" id='mugshot'/>
    </div>
  </div>

  <div class="row pt-4">
    <div class="col">
      <input id="newCaseSubmit" type="button" value="Save" class="btn
        btn-primary"/>
    </div>
  </div>
</form>
        </>
      )
    )
  }
}

export default NewCaseForm;