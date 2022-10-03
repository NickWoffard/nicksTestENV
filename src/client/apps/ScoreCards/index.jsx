import React from 'react';
import { Loader, ScoreCard } from '../exports';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();


class ScoreCardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'loaded': false,
    };
    serverFunctions.get_inmates().then((response) => {
      this.setState({ data: response, loaded: true })
    })
  }
  render() {
    return (

      this.state.loaded == false ? (<Loader />) : (
        <>
          <div class="row row-cols-4">
            {this.state.data.map((row) => {
              return (<div class='col'><ScoreCard data={row} /></div>)
            })}
          </div>
        </>
      )
    )
  }
}

export default ScoreCardPage;