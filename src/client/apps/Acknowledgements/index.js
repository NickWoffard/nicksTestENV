import React from 'react';
import Select from 'react-select';
import { GASClient } from 'gas-client';
import { StaffSearchField } from '../exports';
const { serverFunctions } = new GASClient();
const evaluation_database_template =
  '1_fPqO8yK1ZThBYvBrz6HWOCTGOoMLIwlOCTRoyvg4nI';

const today = new Date().toISOString().split('T')[0];
const job_career_goals_options = [
  { value: 'Improve and/or enhance my skills and/or knowledge in specific areas related to my current position', label: 'Improve and/or enhance my skills and/or knowledge in specific areas related to my current position' },
  { value: 'Improve and/or enhance my skills and/or knowledge with the goal of working towards a transfer to a position in a different career ladder within the agency', label: 'Improve and/or enhance my skills and/or knowledge with the goal of working towards a transfer to a position in a different career ladder within the agency' },
  { value: 'Improve and/or enhance my skills and/or knowledge with the goal of working towards a promotion to a higher position in the same career ladder within the agency', label: 'Improve and/or enhance my skills and/or knowledge with the goal of working towards a promotion to a higher position in the same career ladder within the agency' },
  { value: 'Improve and/or enhance my skills and/or knowledge with the goal of working towards a position outside the agency', label: 'Improve and/or enhance my skills and/or knowledge with the goal of working towards a position outside the agency' },
  { value: 'Other', label: 'Other' },
]

class AcknowledgementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      training_plan_required: false,
      loaded: 'evaluation_list',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectInputChange = this.handleMultiSelectInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.afterSelectStaff = this.afterSelectStaff.bind(this);

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

  handleMultiSelectInputChange(event, name) {
    var values = [];
    console.log(event);
    event.map((e) => { values.push(e.value) });
    this.setState({ [name]: values });
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
      case 'evaluation_list':
        return (
          <>
            <h1>{this.props.type}</h1>
            <StaffSearchField after_select={this.afterSelectStaff} />
          </>
        )
      case 'evaluation':
        switch (this.props.type) {
          case 'reviewer':
            return (
              <>
                <h1>{this.props.type}</h1>
                <StaffSearchField after_select={this.afterSelectStaff} />
                <form onSubmit={this.handleSubmit}>
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
          case 'employee':
            return (
              <>
                <h1>{this.props.type}</h1>
                <StaffSearchField after_select={this.afterSelectStaff} />
                <form onSubmit={this.handleSubmit}>
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
        }
        
      default:
        return <>Loading...</>;
    }
  }
}
export default AcknowledgementForm;
