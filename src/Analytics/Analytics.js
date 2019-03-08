import React from "react";
import "./Analytics.css";
import {Pie, Line} from 'react-chartjs-2';
import hand from "../images/hand.svg";
import moneyBag from "../images/moneyBag.svg";
import smile from "../images/smile.svg";

export const AnalyticsTemplate = ({}) => {
  const config = {
      angle: 90,
      spread: 45,
      startVelocity: 45,
      elementCount: 50,
      dragFriction: 0.1,
      duration: 3000,
      delay: 0,
      width: "10px",
      height: "10px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };
  return (
  <div className="wrapper">
    <div>{MainAnalytics()}</div>
    <div className="twocolumnsana">{EventAnalytics()}</div>
    <div className="twocolumnsana">{DonationAnalytics()}</div>
    <br/>
    <p style={{textAlign: 'center', fontSize: '8px'}}>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/"           title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"           title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"           title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"           title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
  </div>
  );
};

  const EventAnalytics = () => {
    const data = {
      labels: [
        'Help the Elderly',
        'Sankalp'
      ],
      datasets: [{
        data: [3000, 5000],
        backgroundColor: [
        '#F0FFF0',
        '#B0C4DE'
        ],
        hoverBackgroundColor: [
        '#F0FFF0',
        '#B0C4DE'
        ]
      }]
    };
    return (
        <div style={{textAlign: 'center'}}>
        <h4> Event-by-Event breakdown of expenses </h4>
        <Pie data={data} />
        </div>
      );
  };

  const MainAnalytics = () => {
    return (
        <div style={{textAlign: 'center'}}>
        <p style={{margin: '20px'}}><b>This page is updated every 2 weeks (bi-weekly). Last updated on:</b></p>
        <p> Here, you can view all the financial status of our trust. We are always an open book and if you have any queries or questions please feel free to contact us using any of our social media platforms or via our email: <b>teamtaraktrust@gmail.com</b>. The maximum amount of money a person can contribute is 100 INR or 50 USD. However if you are willing to contribute more, you can contribute in the form of direct supplies like food, clothing, etc..</p>
        <div><b className="button">Received: 9000</b><img src={hand} style={{width:'50px'}}/></div>
        <div style={{margin: '10px'}}><b className="button">Spent: 9000</b><img src={moneyBag} style={{width:'50px'}}/></div>
        <div><b className="button">Smiles spread: 90</b><img src={smile} style={{width:'50px'}}/></div>
        </div>
      );
  };

  const DonationAnalytics = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Donations',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [650, 590, 2000, 1300]
        }
      ]
    };
    return (
        <div style={{textAlign: 'center'}}>
        <h4> Month by Month breakdown of donations </h4>
        <Line data={data}/>
        </div>
      );
  };

const Analytics = (props) => {
  return <AnalyticsTemplate analyticsData={props.analyticsData} />;
};

export default Analytics;
