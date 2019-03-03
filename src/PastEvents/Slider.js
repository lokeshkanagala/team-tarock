import React from 'react';
import Swiper from 'react-id-swiper';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.swiper = null;
  }

  render() {
      const params = {
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: 4,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    return(
      <div height="50px !important">
        <Swiper {...params}>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetupfirst.png"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup1.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup2.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup3.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup4.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup5.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup6.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup7.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup8.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup9.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup10.jpeg"}/></div>
          <div><img style={{height:"300px"}} src={"https://s3.ap-south-1.amazonaws.com/www.teamtaraktrust.com/store/meetup11.jpeg"}/></div>
        </Swiper>
      </div>
    )
  }
}