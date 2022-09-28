import React from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

class SelectField extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  
  componentDidMount() {
  }

  handleInputChange(event) {
    this.props.onChange(event);
}

  render() {

    var options = this.props.options || ['Yes', 'No'];

    var optionsTemplate = options.map((item) => {
      return <option value={item}>{item}</option>
    })
    return (
      <>
        <label class="form-label">{this.props.label}</label>
        <select id={this.props.id || ''} class="form-select" name={this.props.name} onChange={this.handleInputChange.bind(this)}>
          <option disabled selected value="">Select an option</option>
          {optionsTemplate}
        </select>
      </>
    );
  }
}

export { SelectField }
