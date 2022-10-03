import React from 'react';
import { GASClient } from 'gas-client';
import { SupervisorSearchField } from '../exports';
const { serverFunctions } = new GASClient();

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div class="card mb-3">
          <h3 class="card-header">{this.props.data.inmate_name}</h3>
          <div class="card-body">
            <h5 class="card-title">Booking: {this.props.data.booking_number}</h5>
            <h6 class="card-subtitle text-muted">Inmate ID: {this.props.data.inmate_id}</h6>
          </div>
          <img width="150px" src={this.props.data.inmate_image} class="d-block user-select-none" />
          <div class="card-body">
            <p class="card-text">Charges here</p>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </>
    )
  }
}

export default ScoreCard;