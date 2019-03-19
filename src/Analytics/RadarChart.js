import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Krishna', 'Guntur', 'Hyderabad-Rangareddy', 'Nellore-Chittoor', 'Kadapa-Ananthapur', 'Godavari', 'Chennai'],
  datasets: [
    {
      label: 'Participants counts / Reach',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [70, 80, 120, 55, 91, 45, 36]
    }
  ]
};

const RadarChart = () => {
    return (
      <div style={{textAlign: 'center'}}>
        <h5> Region based Reach/Participation count</h5>
        <Radar data={data} />
      </div>
    );
}

export default RadarChart;