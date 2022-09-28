import React, { useRef } from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();
import {
  StaffSearchField,
  SupervisorSearchField,
} from '../exports';

class StaffForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rater: '',
      reviewer: '',
    };

    this.selectFields = ['titles', 'departments', 'evaluation_series_types'];

    this.renderOptions = this.renderOptions.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.afterSelectStaff = this.afterSelectStaff.bind(this);
    this.afterSelectSupervisor = this.afterSelectSupervisor.bind(this);
  }

  componentDidMount() {
    this.selectFields.map((field) =>
      serverFunctions
        .get_rows(window.db.staff, ['Dropdowns'], [field], {})
        .then((res) => this.setState({ [field]: res }))
    );
  }

  afterSelectStaff(e, response) {
    this.setState(e.data);
    var rater = response
      .filter((item) => {
        return item.data.staff_guid == e.data.rater_staff_guid;
      })
      .pop().data;
    var reviewer = response
      .filter((item) => {
        return item.data.staff_guid == e.data.reviewer_staff_guid;
      })
      .pop().data;
    console.log(reviewer);
    rater = `${rater.first_name} ${rater.last_name} - ${rater.department}`;
    reviewer = `${reviewer.first_name} ${reviewer.last_name} - ${reviewer.department}`;
    this.setState({ rater: rater, reviewer: reviewer })
  }

  afterSelectSupervisor(e, response, supervisor_type) {
    console.log(supervisor_type)
    this.setState({ 
      [`${supervisor_type}_staff_guid`] : e.data.staff_guid,
      [supervisor_type]: `${e.data.first_name} ${e.data.last_name} - ${e.data.department}`,
   });
    
  }

  renderOptions(field) {
    return this.state[field].map((option) => (
      <option value={option[field]}>{option[field]}</option>
    ));
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
    switch (this.props.type) {
      case 'onboard':
        this.state.staff_guid = md5(String(Math.random()));
        this.state.email = `${this.state.first_name}.${this.state.last_name}@da2nd.state.nm.us`;
        serverFunctions
          .insert_row(window.db.staff, this.state.staff_type, this.state)
          .then((response) => console.log(response));
        break;
      case 'modify':
        serverFunctions
          .update_row(window.db.staff, this.state.staff_type, this.state, {
            staff_guid: this.state.staff_guid,
          })
          .then((response) => console.log(response));
        break;
      case 'offboard':
        serverFunctions
          .move_row(
            window.db.staff,
            this.state.staff_type,
            `Inactive - ${this.state.staff_type}`,
            { staff_guid: this.state.staff_guid }
          )
          .then((response) => console.log(response));
      default:
        break;
    }
    Object.keys(this.state).forEach((key) => {
      if (!this.selectFields.includes(key)) {
        this.setState({ [key]: '' });
      }
    });
    $('#rater').val('');
    $('#reviewer').val('');
  }

  render() {
    var data_loaded = this.selectFields.every(
      (e) => typeof this.state[e] != 'undefined'
    );
    if (!data_loaded) {
      return <>Loading...</>;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.type}</h1>
        {this.props.type == 'onboard' ? (
          <StaffSearchField className={'hidden'} after_select={this.afterSelectStaff} />
        ) : (
          <StaffSearchField after_select={this.afterSelectStaff} />
        )}
        {this.props.type == 'offboard' ? (
          <></>
        ) : (
          <>
            <div class="row pt-4">
              <div class="col">
                <label class="form-label">First name</label>
                <input
                  type="text"
                  class="form-control"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="col">
                <label class="form-label">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div class="row pt-4">
              <div class="col">
                <label class="form-label">Hire date</label>
                <input
                  type="date"
                  class="form-control"
                  name="hire_date"
                  value={this.state.hire_date}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="col">
                <label class="form-label">Staff ID</label>
                <input
                  type="text"
                  class="form-control"
                  name="staff_id"
                  value={this.state.staff_id}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="col">
                <label class="form-label">Staff type</label>
                <select
                  class="form-select"
                  name="staff_type"
                  value={this.state.staff_type}
                  onChange={this.handleInputChange}
                >
                  <option disabled selected value="">
                    Select an option
                  </option>
                  <option value="Employee">Employee</option>
                  <option value="Contractor">Contractor</option>
                  <option value="Intern">Intern</option>
                </select>
              </div>
            </div>
            <hr></hr>
            <div class="row pt-4">
              <div class="col">
                <label class="form-label">Title</label>
                <select
                  class="form-select"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                >
                  <option disabled selected value="">
                    Select an option
                  </option>
                  {this.renderOptions('titles')}
                </select>
              </div>
              <div class="col">
                <label class="form-label">Department</label>
                <select
                  class="form-select"
                  name="department"
                  value={this.state.department}
                  onChange={this.handleInputChange}
                >
                  <option disabled selected value="">
                    Select an option
                  </option>
                  {this.renderOptions('departments')}
                </select>
              </div>
            </div>
            <div class="row pt-4">
              <div class="col">
                <input
                  type="text"
                  class="hidden"
                  name="rater_staff_guid"
                  value={this.state.rater_staff_guid}
                  onChange={this.handleInputChange}
                />
                <SupervisorSearchField
                  supervisor_type={'Rater'}
                  after_select={this.afterSelectSupervisor}
                  value={this.state.rater}
                  name={"rater"}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="hidden"
                  name="reviewer_staff_guid"
                  value={this.state.reviewer_staff_guid}
                  onChange={this.handleInputChange}
                />
                <SupervisorSearchField
                  supervisor_type={'Reviewer'}
                  after_select={this.afterSelectSupervisor}
                  value={this.state.reviewer}
                  name={"reviewer"}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div class="row pt-4">
              <div class="col">
                <label class="form-label">Evaluation series</label>
                <select
                  class="form-select"
                  name="evaluation_series"
                  value={this.state.evaluation_series}
                  onChange={this.handleInputChange}
                >
                  {this.renderOptions('evaluation_series_types')}
                  <option disabled selected value="">
                    Select an option
                  </option>
                </select>
              </div>
              <div class="col">
                <label class="form-label">Room number</label>
                <input
                  type="text"
                  class="form-control"
                  name="room_number"
                  value={this.state.room_number}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div class="row pt-4">
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    name="is_supervisor"
                    type="checkbox"
                    checked={this.state.is_supervisor}
                    onChange={this.handleInputChange}
                  />
                  <label class="form-check-label">
                    The person being onboarded is a supervisor
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        <div class="row pt-4">
          <div class="col">
            <button type="submit" class="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default StaffForm;
