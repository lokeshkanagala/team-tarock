import React from "react";
import headerImageNTR from "../images/headerImageNTR.jpg";
import Map from "./Map";
import './Home.scss';
import Confetti from 'react-confetti';
import Wishes from "./Wishes";

const renderMeetup = (meetup) => {
  const mapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAnGPiEpydXj18Glw90yONMDzp5XVEW-Ss&v=3.exp&libraries=geometry,drawing,places";
  return (
    <>
      <p className="upcomingMeetup-detail  upcomingMeetup-detail--date">
        <span className="upcomingMeetup-detailLabel">Date: </span>
        {meetup.formattedDate}
      </p>
      <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
        <span className="upcomingMeetup-detailLabel">Location: </span>
        {meetup.location.name}
      </p>
      <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
        <span className="upcomingMeetup-detailLabel">Contact: </span>
        {meetup.phoneNumber}
      </p>
      {meetup.presenters.length > 0 && (
        <div className="upcomingMeetup-presenters">
          {meetup.presenters.map(presenter => (
            <div className="upcomingMeetup-presenter" key={presenter.text}>
              <img
                className="upcomingMeetup-presenterImage"
                src={presenter.headshot}
              />
              <span className="upcomingMeetup-presenterName">{presenter.name}</span>
              <span className="upcomingMeetup-presenterPresentationTitle">
                {presenter.presentationTitle}
              </span>
              <p className="upcomingMeetup-presenterDescription">{presenter.text}</p>
            </div>
          ))}
        </div>
      )}
      <p className="upcomingMeetup-mapNote">{'click cheyandi'}</p>
      <div className="upcomingMeetup-mapWrapper">
        <Map
          isMarkerShown
          googleMapURL={mapUrl}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          link={meetup.location.mapsLink}
          latitude={meetup.location.latitude}
          longitude={meetup.location.longitude}
        />
      </div>
    </>
    );
}

const generateLocations = (meetups) => {
  let locations = [];
  for(let meetup of meetups) {
    if (meetup.location && meetup.location.latitude && meetup.location.longitude)
    locations.push({latitude: meetup.location.latitude, longitude: meetup.location.longitude, link: meetup.location.mapsLink});
  }
  console.log(locations);
  return locations;
}

const renderMeetups = (meetups) => { 
  const locations = generateLocations(meetups);
  const mapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAnGPiEpydXj18Glw90yONMDzp5XVEW-Ss&v=3.exp&libraries=geometry,drawing,places";
  return (
    <>
      <p className="upcomingMeetup-detail  upcomingMeetup-detail--date">
        <span className="upcomingMeetup-detailLabel" style={{color: "#5F9EA0"}}>Date: </span>
        <span style={{color: "#5F9EA0"}}>{'May 20, 2019'}</span>
      </p>
      {
        meetups.map((meetup) => {
        return (
        <div>
          <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
            <span>Location: </span>
            <span style={{color: "#000000", borderBottom:"1px solid #FF0000"}}>{meetup.location.name}</span>
          </p>
          <p className="upcomingMeetup-detail">
            <span className="upcomingMeetup-detailLabel">Contact: </span>
            <span style={{color: "#5F9EA0"}}>{meetup.phoneNumber}</span>
          </p>
        </div>
        )})
      }
      <div className="upcomingMeetup-mapWrapper">
        <Map
          isMarkerShown
          googleMapURL={mapUrl}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          locations={locations}
        />
      </div>
    </>
  );
}

const HomePageTemplate = ({homeData, upcomingMeetups, showConfetti}) => {
  if (!homeData || !homeData.home) {
    return <></>;
  }
  // const mapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAnGPiEpydXj18Glw90yONMDzp5XVEW-Ss&v=3.exp&libraries=geometry,drawing,places";
  // const presenters = upcomingMeetup && upcomingMeetup.presenters;
  // const latitude = upcomingMeetup && parseFloat(upcomingMeetup.location.latitude);
  // const longitude = upcomingMeetup && parseFloat(upcomingMeetup.location.longitude);
  return(
    <>
        <section className="header">
        <div style={{position: "absolute"}}>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces="300"
          />
        </div>
        <div className="header-container  container">
          <img className="header-image" src={headerImageNTR} style={{borderRadius: '50%'}}/>
          <h3 className="header-tagline">
          <div>
            <span className="header-taglinePart">{homeData.home.line1}</span>
          </div>
          <div>
            <span className="header-taglinePart">{homeData.home.line2}</span>
          </div>
          <div>
            <span className="header-taglinePart">{homeData.home.line3}</span>
          </div>
          <div>
            <span className="header-taglinePart">{homeData.home.line4}</span>
          </div>
          </h3>
        </div>
      </section>
      <div className="header" style={{backgroundColor: "white"}}>
        <Wishes/>
      </div>
      <section className="upcomingMeetup  section">
        <div className="upcomingMeetup-container  container">
          <h2 className="upcomingMeetup-title">{'Upcoming Events'}</h2>
          {upcomingMeetups && upcomingMeetups.length > 1 ? renderMeetups(upcomingMeetups) : <p className="upcomingMeetup-detail">{homeData.home.noMeetups + '     '}😃💪</p>}
        </div>
      </section>
      <section className="ctaBlock">
        <a
          href="/pastevents"
          className="ctaBlock-pattern  ctaBlock-pattern--first"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">Previous Events</span>
            <p className="ctaBlock-ctaDescription">ఇంతకు ముందు జరిగిన కార్యక్రమాలు</p>
          </div>
        </a>
        <a
          href={'mailto:teamtaraktrust@gmail.com'}
          className="ctaBlock-pattern  ctaBlock-pattern--second"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">Come Join Us</span>
            <p className="ctaBlock-ctaDescription" style={{color: 'white'}}>ఓబా..ఒక్కడివే సహాయం చేస్తే అది ఉపకారం..మనం అందరం కలిసి చేస్తే అది ఆ సమ్యస్యకి పరిష్కారం.</p>
          </div>
        </a>
      </section>
    </>
    );
};


const Home = ({ homeData, meetupsData }) => {
  let upcomingMeetups = meetupsData.meetups && meetupsData.meetups.filter((meetup) => meetup.next === true);
  return (
    <div>
      <HomePageTemplate homeData={homeData} upcomingMeetups={upcomingMeetups}/>
    </div>
  );
}


export default Home;