import React from 'react';
import MyLine from './line';
import MyRadar from './radar';
import { Loader } from '../exports';

import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  plugins: {
    title: {
      display: true,
      text: 'Plea reasons',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

class MyDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
    };
    serverFunctions.get_rows(window.db.plea, ['Approved Requests'], {}).then((response) => this.setState({data: response}))
  }
  render() {

    var data = {
      labels: ['Case issues', 'Logistical/Procedural issues', 'Efficient case resolution'],
      datasets: [
        {
          label: 'Plea reason',
          data: [2, 3, 8],
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    };

    return (
      this.state.data == '' ? (<Loader/>) : (
        <>
        <div class="row">
          <div class="col"><Bar options={options} data={data} /></div>
          <div class="col"><MyLine /></div>
        </div>
      </>)
      
    )
  }
}

export default MyDashboard;
