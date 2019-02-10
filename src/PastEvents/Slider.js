import React from 'react';
import Swiper from 'react-id-swiper';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.swiper = null;
  }

  render() {
      const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    return(
      <div height="50px !important">
        <Swiper {...params}>
          <div><img style={{height:"300px"}} src={"https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture1.png"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture1.png"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture1.png"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.amazonaws.com/team-tarak-trust/meetups/meetup-1/picture1.png"}/></div>
        </Swiper>
      </div>
    )
  }
}