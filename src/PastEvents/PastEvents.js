import React from "react";
import EventTemplate from "./EventTemplate";
import moment from "moment";

export const PastEventsTemplate = ({events}) => {
  return (
    <article className="pastMeetups">
      <div className="container  pastMeetups-container">
        <h1 className="pastMeetups-title">{'Previous Events'}</h1>
        {events &&
          events.map((event, index) => (
            <EventTemplate
              key={index}
              className="pastMeetups-meetup"
              event={event}
            />
          ))}
      </div>
    </article>
  );
};

const PastEvents = ({ eventsData }) => {

  if (!eventsData || !eventsData.meetups) {
    return <></>;
  }

  // Find all the meetups that occured in the past
  let events = eventsData.meetups.filter(meetup => {
    console.log(meetup.next);
    return meetup.next === 'no';
  });

  return (
        <PastEventsTemplate
          events={events}
        />
  );
};

export default PastEvents;
