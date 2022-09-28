import React from 'react';
import Select from 'react-select';
import { GASClient } from 'gas-client';
import { StaffSearchField } from '../exports';
const { serverFunctions } = new GASClient();
const staff_database = '1enquD5KcXKVwWDQ7vvliCL55D07VhD0UDGMSyCdjoQU';
const evaluation_database_template =
  '1_fPqO8yK1ZThBYvBrz6HWOCTGOoMLIwlOCTRoyvg4nI';

const today = new Date().toISOString().split('T')[0];
const training_plan_options = [
  { value: 'Long-term classroom instruction (univiersity, college, technical/vocational course)', label: 'Long-term classroom instruction (univiersity, college, technical/vocational course)' },
  { value: 'Short-term classroom instruction (conference, workshop or seminar)', label: 'Short-term classroom instruction (conference, workshop or seminar)' },
  { value: 'On the job training (group or one-on-one training with mentor or supervisor)', label: 'On the job training (group or one-on-one training with mentor or supervisor)' },
  { value: 'Cross-training (job exchange or temporary assignments)', label: 'Cross-training (job exchange or temporary assignments)' },
  { value: 'Other', label: 'Other' },
]

class EvaluationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      training_plan_required: false,
      loaded: 'staff_list',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectInputChange = this.handleMultiSelectInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.afterSelectStaff = this.afterSelectStaff.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.checkTrainingPlan = this.checkTrainingPlan.bind(this);
    this.renderTrainingPlan = this.renderTrainingPlan.bind(this);

  }

  afterSelectStaff(e, response) {
    serverFunctions
      .get_evaluation_template(evaluation_database_template, e.data.evaluation_series, [], {})
      .then((response) => {
        this.setState({
          questions: response,
          loaded: 'evaluation',
        });
      });
  }

  renderQuestions() {
    return this.state.questions.map((i, iter) => {
      var index = iter + 1;
      var description_name = `question_${index}_description`;
      var comments_name = `question_${index}_comments`;
      var points_name = `question${index}_points`;
      return (
        <>
          <div class="row pt-4 pb-4">
            <div class="col">
              <label class="form-label">{i.criteria}</label>
              <textarea class="form-control" name={description_name} rows="10">
                {i.criteria_description}
              </textarea>
            </div>
            <div class="col">
              <div class="row">
                <div class="col">
                  <label class="form-label">Comments</label>
                  <textarea
                    class="form-control"
                    name={comments_name} rows="5"></textarea>
                </div>
              </div>
              <div class="row pt-4">
                <div class="col">
                  <label class="form-label">Points</label>
                  <select onChange={(e) => { this.handleInputChange(e); this.checkTrainingPlan(e) }} name={points_name} class="form-select points">
                    <option selected disabled>
                      Select an option
                    </option>
                    <option value={1.0}>1.0</option>
                    <option value={1.5}>1.5</option>
                    <option value={2.0}>2.0</option>
                    <option value={2.5}>2.5</option>
                    <option value={3.0}>3.0</option>
                    <option value={3.5}>3.5</option>
                    <option value={4.0}>4.0</option>
                    <option value={4.5}>4.5</option>
                    <option value={5.0}>5.0</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </>
      );
    });
  }

  checkTrainingPlan(event) {
    var training_plan_required = !Array.from(document.getElementsByClassName("points")).every((point) => (point.value >= 3 || point.value == 'Select an option'));
    Array.from(document.getElementsByClassName("points")).map((point) => { if (point.value != 'Select an option') { console.log(point.value) } });
    if (!training_plan_required) {this.setState({'training_plan': ''})}
    this.setState({ training_plan_required: training_plan_required });
  }

  renderTrainingPlan() {
    return this.state.training_plan_required ? (
      <>
      <div class="row pt-4 pb-4">
        <div class="col-6">
          <label class="form-label">Training plan</label>
        <Select
          isMulti
          name="training_plan"
          options={training_plan_options}
          className="basic-multi-select"
          onChange={(e) => {this.handleMultiSelectInputChange(e, "training_plan")}}
          classNamePrefix="select"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary: 'black',
            },
          })}
        />
        </div>
      </div>
      </>

    ) : (<></>)
  }

  handleMultiSelectInputChange(event, name) {
    var values = [];
    console.log(event);
    event.map((e) => {values.push(e.value)});
    this.setState({[name]: values});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    return;
    switch (this.props.type) {
      case 'open':
        serverFunctions.create_evaluation(this.state.evaluation_sheet_id);
        break;
      default:
        break;
    }
    Object.keys(this.state).forEach((key) => {
      if (!this.selectFields.includes(key)) {
        this.setState({ [key]: '' });
      }
    });
  }

  render() {
    switch (this.state.loaded) {
      case 'staff_list':
        return (
          <>
            <h1>{this.props.type}</h1>
            <StaffSearchField after_select={this.afterSelectStaff} />
          </>
        )
      case 'evaluation':
        return (
          <>
            <h1>{this.props.type}</h1>
            <StaffSearchField after_select={this.afterSelectStaff} />
            <form onSubmit={this.handleSubmit}>
              {this.renderQuestions()}
              {this.renderTrainingPlan()}
              <div class="row pt-4 pb-4">
                <div class="col">
                  <label>Additional comments</label>
                  <input type="text" class="form-control" name="rater_comments" />
                </div>
              </div>
              <div class="row pt-4">
                <div class="col">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </>
        )
      default:
        return <>Loading...</>;
    }
  }
}
export default EvaluationForm;
