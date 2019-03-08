import React from "react";
import moment from "moment";
import headerImageNTR from "../images/headerImageNTR.jpg";
import Map from "./Map";
import './Home.scss';

const HomePageTemplate = ({homeData, upcomingMeetup}) => {
  if (!homeData || !homeData.home) {
    return <></>;
  }
  const mapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAnGPiEpydXj18Glw90yONMDzp5XVEW-Ss&v=3.exp&libraries=geometry,drawing,places";
  const presenters = upcomingMeetup && upcomingMeetup.presenters;
  const latitude = upcomingMeetup && parseFloat(upcomingMeetup.location.latitude);
  const longitude = upcomingMeetup && parseFloat(upcomingMeetup.location.longitude);
  return(
    <>
        <section className="header">
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
      <section className="upcomingMeetup  section">
        <div className="upcomingMeetup-container  container">
          <h2 className="upcomingMeetup-title">{'Upcoming Events'}</h2>
          {upcomingMeetup ? (
            <>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--date">
                <span className="upcomingMeetup-detailLabel">Date: </span>
                {upcomingMeetup.formattedDate}
              </p>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
                <span className="upcomingMeetup-detailLabel">Location: </span>
                {upcomingMeetup.location.name}
              </p>
              <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
                <span className="upcomingMeetup-detailLabel">Contact: </span>
                {upcomingMeetup.phoneNumber}
              </p>
              {upcomingMeetup.presenters.length > 0 && (
                <div className="upcomingMeetup-presenters">
                  {presenters.map(presenter => (
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
                  link={upcomingMeetup.location.mapsLink}
                  latitude={latitude}
                  longitude={longitude}
                />
              </div>
            </>
          ) : (
            <p className="upcomingMeetup-detail">{homeData.home.noMeetups + '     '}😃💪</p>
          )}
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

class Home extends React.Component {

  render() {
    const { homeData, meetupsData } = this.props;
    let upcomingMeetup = null;
    if (meetupsData && meetupsData.meetups) {
      meetupsData && meetupsData.meetups.every(meetup => {
        if (meetup.next) {
          return true;
        } else {
          return false;
        }
      });
    }
    return (
      <div>
        <HomePageTemplate homeData={homeData} upcomingMeetup={upcomingMeetup}/>
      </div>
    );
  }
}


export default Home;