import React from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

class ViewPleaModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='view-plea-modal' class="modal modal-lg">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Plea</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body">
              {this.props.selected_plea == '' ? (<></>) : (<>

                <div class="accordion" id="pleaAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="pleaAccordionCaseHeading">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#pleaAccordionCase" aria-expanded="true" aria-controls="pleaAccordionCase">
                        Case Information
                      </button>
                    </h2>
                    <div id="pleaAccordionCase" class="accordion-collapse collapse show" aria-labelledby="pleaAccordionCaseHeading" data-bs-parent="#pleaAccordion">
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
                            <small>{this.props.selected_plea.court_case_number}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_plea.da_number}</small>
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
                            <small>{this.props.selected_plea.defendant_name}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="pleaAccordionAttorneyHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pleaAccordionAttorney" aria-expanded="false" aria-controls="pleaAccordionAttorney">
                        Attorney Information
                      </button>
                    </h2>
                    <div id="pleaAccordionAttorney" class="accordion-collapse collapse" aria-labelledby="pleaAccordionAttorneyHeading" data-bs-parent="#pleaAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col">
                            <h5>Screening attorney</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_plea.screening_attorney}</small>
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
                            <small>{this.props.selected_plea.district_court_filed_date}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_plea.trial_date}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_plea.assigned_date}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="pleaAccordionCategoriesHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pleaAccordionCategories" aria-expanded="false" aria-controls="pleaAccordionCategories">
                        Categories
                      </button>
                    </h2>
                    <div id="pleaAccordionCategories" class="accordion-collapse collapse" aria-labelledby="pleaAccordionCategoriesHeading" data-bs-parent="#pleaAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-4">
                            <h5>Prior plea in this case</h5>
                          </div>
                          <div class="col-4">
                            <h5>Is this plea more strict</h5>
                          </div>
                          <div class="col-4">
                            <h5>Are all open cases resolved</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <small>{this.props.selected_plea.prior_plea}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_plea.more_strict}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_plea.all_cases_resolved}</small>
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
                            <small>{this.props.selected_plea.homicide}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_plea.pdm_filed}</small>
                          </div>
                          <div class="col-4">
                            <small>{this.props.selected_plea.pdm_granted}</small>
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
                            <small>{this.props.selected_plea.victim_lea}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="pleaAccordionConferenceHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pleaAccordionConference" aria-expanded="false" aria-controls="pleaAccordionConference">
                        Conference
                      </button>
                    </h2>
                    <div id="pleaAccordionConference" class="accordion-collapse collapse" aria-labelledby="pleaAccordionConferenceHeading" data-bs-parent="#pleaAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-6">
                            <h5>Have you discussed this plea with the victim?</h5>
                          </div>
                          <div class="col-6">
                            <h5>Does the victim oppose this action?</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_plea.victim_discussed}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_plea.victim_opposes}</small>
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
                            <small>{this.props.selected_plea.victim_reason}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-6">
                            <h5>Have you discussed this plea with the case agent?</h5>
                          </div>
                          <div class="col-6">
                            <h5>Does the case agent oppose this action?</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_plea.agent_discussed}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_plea.agent_opposes}</small>
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
                            <small>{this.props.selected_plea.agent_reason}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="pleaAccordionInformationHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pleaAccordionInformation" aria-expanded="false" aria-controls="pleaAccordionInformation">
                        Plea Information
                      </button>
                    </h2>
                    <div id="pleaAccordionInformation" class="accordion-collapse collapse" aria-labelledby="pleaAccordionInformationHeading" data-bs-parent="#pleaAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-6">
                            <h5>Plea reason</h5>
                          </div>
                          <div class="col-6">
                            <h5>Plea subreason</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small>{this.props.selected_plea.plea_reason}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_plea.plea_subreason}</small>
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
                            <small>{this.props.selected_plea.total_jurisdiction_available_years} years, {this.props.selected_plea.total_jurisdiction_available_months} months</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_plea.maximum_initial_incarceration_years} years, {this.props.selected_plea.maximum_initial_incarceration_months} months</small>
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
                            <small>{this.props.selected_plea.firearm_enhancement}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_plea.firearm_enhancement_time}</small>
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
                            <small>{this.props.selected_plea.firearm_enhancement_time_waived}</small>
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
                            <small>{this.props.selected_plea.habitual_offender_enhancement}</small>
                          </div>
                          <div class="col-6">
                            <small>{this.props.selected_plea.priors_in_abeyance}</small>
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
                            <small>{this.props.selected_plea.abeyance_reason}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="pleaAccordionDocumentsHeading">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pleaAccordionDocuments" aria-expanded="false" aria-controls="pleaAccordionDocuments">
                        Documents
                      </button>
                    </h2>
                    <div id="pleaAccordionDocuments" class="accordion-collapse collapse" aria-labelledby="pleaAccordionDocumentsHeading" data-bs-parent="#pleaAccordion">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col">
                            <h5>Justification for proposed plea</h5>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <small>{this.props.selected_plea.plea_justification}</small>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col">
                            <h5>Prosecution memo</h5>
                          </div>
                          {this.props.selected_plea.prosecution_memo.includes('https://') ? (<a type="button" href={this.props.selected_plea.prosecution_memo} target="_blank" class="btn btn-info">View</a>) : (<small>{this.props.selected_plea.prosecution_memo}</small>)}
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

export default ViewPleaModal;