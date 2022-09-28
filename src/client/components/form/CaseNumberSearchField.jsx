import React from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

class CaseNumberSearchField extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    serverFunctions.autocomplete(this.props.database, this.props.tables, this.props.case_number_type).then((response) => {
      $(`#${this.props.case_number_type}_search`)
        .typeahead({
          source: response,
          displayText: (item) => {
            return typeof item.data != 'undefined'
              ? `${item.data[this.props.case_number_type]}`
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
          <div class="col-6">
            <label class="form-label">Search by {this.props.label}</label>
            <input id={`${this.props.case_number_type}_search`} type="text" class="form-control" />
          </div>
      </>
    );
  }
}

export { CaseNumberSearchField }
