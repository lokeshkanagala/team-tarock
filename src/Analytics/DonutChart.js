import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Donations',
    'Expenses',
    'In Reserve'
  ],
  datasets: [{
    data: [30000, 20000, 10000],
    backgroundColor: [
    '#B0E0E6',
    '#F08080',
    '#C0C0C0'
    ],
    hoverBackgroundColor: [
    '#B0E0E6',
    '#F08080',
    '#C0C0C0'
    ]
  }]
};

const DonutChart = () => ({
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h5>Financials Breakdown</h5>
        <Doughnut data={data} />
      </div>
    );
  }
});

export default DonutChart;