import React from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

class ViewNolleModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='view-nolle-modal' class="modal modal-lg">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Nolle</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              {this.props.selected_nolle == '' ? (<></>) : (<>

                <div class="accordion" id="nolleAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="nolleAccordionCaseHeading">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#nolleAccordionCase" aria-expanded="true" aria-controls="nolleAccordionCase">
                        Case Information
                      </button>
                    </h2>
                    <div id="nolleAccordionCase" class="accordion-collapse collapse show" aria-labelledby="nolleAccordionCaseHeading" data-bs-parent="#nolleAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-6">
                            <h5>Court case number</h5>
                          </div>
                          <div class="col-6">
                            <h5>DA number</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_nolle.court_case_number}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_nolle.da_number}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col">
                            <h5>Defendant name</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_nolle.defendant_name}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="nolleAccordionAttorneyHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nolleAccordionAttorney" aria-expanded="false" aria-controls="nolleAccordionAttorney">
                        Attorney Information
                      </button>
                    </h2>
                    <div id="nolleAccordionAttorney" class="accordion-collapse collapse" aria-labelledby="nolleAccordionAttorneyHeading" data-bs-parent="#nolleAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col">
                            <h5>Screening attorney</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_nolle.screening_attorney}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-4">
                            <h5>Filed date</h5>
                          </div>
                          <div class="col-4">
                            <h5>Trial date</h5>
                          </div>
                          <div class="col-4">
                            <h5>Assigned date</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <small>{this.props.selected_nolle.district_court_filed_date}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_nolle.trial_date}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_nolle.assigned_date}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="nolleAccordionCategoriesHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nolleAccordionCategories" aria-expanded="false" aria-controls="nolleAccordionCategories">
                        Categories
                      </button>
                    </h2>
                    <div id="nolleAccordionCategories" class="accordion-collapse collapse" aria-labelledby="nolleAccordionCategoriesHeading" data-bs-parent="#nolleAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-4">
                            <h5>Prior nolle in this case</h5>
                          </div>
                          <div class="col-4">
                            <h5>Is this nolle more strict</h5>
                          </div>
                          <div class="col-4">
                            <h5>Are all open cases resolved</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <small>{this.props.selected_nolle.prior_nolle}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_nolle.more_strict}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_nolle.all_cases_resolved}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-4">
                            <h5>Homicide</h5>
                          </div>
                          <div class="col-4">
                            <h5>PDM filed</h5>
                          </div>
                          <div class="col-4">
                            <h5>PDM granted</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <small>{this.props.selected_nolle.homicide}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_nolle.pdm_filed}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_nolle.pdm_granted}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col">
                            <h5>Victim is a law enforcement officer?</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_nolle.victim_lea}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="nolleAccordionConferenceHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nolleAccordionConference" aria-expanded="false" aria-controls="nolleAccordionConference">
                        Conference
                      </button>
                    </h2>
                    <div id="nolleAccordionConference" class="accordion-collapse collapse" aria-labelledby="nolleAccordionConferenceHeading" data-bs-parent="#nolleAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-6">
                            <h5>Have you discussed this nolle with the victim?</h5>
                          </div>
                          <div class="col-6">
                            <h5>Does the victim oppose this action?</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_nolle.victim_discussed}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_nolle.victim_opposes}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col">
                            <h5>Why were you unable to confer with the victim?</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_nolle.victim_reason}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-6">
                            <h5>Have you discussed this nolle with the case agent?</h5>
                          </div>
                          <div class="col-6">
                            <h5>Does the case agent oppose this action?</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_nolle.agent_discussed}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_nolle.agent_opposes}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col">
                            <h5>Why were you unable to confer with the case agent?</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_nolle.agent_reason}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="nolleAccordionInformationHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nolleAccordionInformation" aria-expanded="false" aria-controls="nolleAccordionInformation">
                        Nolle Information
                      </button>
                    </h2>
                    <div id="nolleAccordionInformation" class="accordion-collapse collapse" aria-labelledby="nolleAccordionInformationHeading" data-bs-parent="#nolleAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-6">
                            <h5>nolle reason</h5>
                          </div>
                          <div class="col-6">
                            <h5>nolle subreason</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_nolle.nolle_reason}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_nolle.nolle_subreason}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-6">
                            <h5>Total Jurisdiction available</h5>
                          </div>
                          <div class="col-6">
                            <h5>Maximum initial incarceration exposure</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_nolle.total_jurisdiction_available_years} years, {this.props.selected_nolle.total_jurisdiction_available_months} months</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_nolle.maximum_initial_incarceration_years} years, {this.props.selected_nolle.maximum_initial_incarceration_months} months</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-6">
                            <h5>Firearm enhancement charged</h5>
                          </div>
                          <div class="col-6">
                            <h5>Firearm enhancement time</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_nolle.firearm_enhancement}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_nolle.firearm_enhancement_time}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col">
                            <h5>Firearm enhancement time waived or suspended</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_nolle.firearm_enhancement_time_waived}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-6">
                            <h5>Subject to habitual offender enhancement?</h5>
                          </div>
                          <div class="col-6">
                            <h5>Proposing to hold any priors in abeyance?</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_nolle.habitual_offender_enhancement}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_nolle.priors_in_abeyance}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col">
                            <h5>Explain</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_nolle.abeyance_reason}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="nolleAccordionDocumentsHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nolleAccordionDocuments" aria-expanded="false" aria-controls="nolleAccordionDocuments">
                        Documents
                      </button>
                    </h2>
                    <div id="nolleAccordionDocuments" class="accordion-collapse collapse" aria-labelledby="nolleAccordionDocumentsHeading" data-bs-parent="#nolleAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col">
                            <h5>Justification for proposed nolle</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_nolle.nolle_justification}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col">
                            <h5>Prosecution memo</h5>
                          </div>
                          {this.props.selected_nolle.prosecution_memo.includes('https://') ? (<a type="button" href={this.props.selected_nolle.prosecution_memo} target="_blank" class="btn btn-info">View</a>) : (<small>{this.props.selected_nolle.prosecution_memo}</small>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewNolleModal;