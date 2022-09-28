import React from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

class StaffSearchField extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    serverFunctions.staff_autocomplete(window.db.staff, ['Employee', 'Contractor', 'Intern']).then((response) => {
      $('#name_search')
        .typeahead({
          source: response,
          displayText: (item) => {
            return typeof item.data != 'undefined'
              ? `${item.data.first_name} ${item.data.last_name} - ${item.data.department}`
              : false;
          },
          autoSelect: false,
          selectOnBlur: false,
          fitToElement: true,
          data: response,
          afterSelect: (e) => {
            this.props.after_select(e, response);
          },
        })
        .bind(this);
    });
  }
  render() {
    return (
      <>
        <div class="row pt-4">
          <div class="col-6">
            <label class="form-label">Search by name</label>
            <input id='name_search' type="text" class="form-control" />
          </div>
        </div>
      </>
    );
  }
}

class SupervisorSearchField extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    serverFunctions
      .staff_autocomplete(window.db.staff, ['Employee'], { is_supervisor: 'TRUE' })
      .then((response) => {
        $(`#${this.props.name}_search`)
          .typeahead({
            source: response,
            displayText: function (item) {
              return typeof item.data != 'undefined'
                ? `${item.data.first_name} ${item.data.last_name} - ${item.data.department}`
                : false;
            },
            autoSelect: false,
            selectOnBlur: false,
            fitToElement: true,
            data: response,
            afterSelect: (e) => {
              this.props.after_select(e, response, this.props.name);
            },
          })
          .bind(this);
      });
  }

  render() {
    return (
      <>
        <label class="form-label">{this.props.supervisor_type}</label>
        <input type="text" name={this.props.name} id={`${this.props.name}_search`} class="form-control" onChange={this.props.onChange} value={this.props.value} />
      </>
    );
  }
}

export { StaffSearchField, SupervisorSearchField }
