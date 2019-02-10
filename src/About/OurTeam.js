import React from "react";
import manoj from "../images/manoj.jpeg";
import ajay from "../images/ajay.jpeg";
import gowtham from "../images/gowtham.jpeg";
import prasanth from "../images/prasanth.jpeg";
import vikram from "../images/vikram.jpeg";
import headshot from "../images/headshot.jpeg";

import "./OurTeam.css";

export const OurTeamTemplate = () => {

  return (
    <>
      <section id="team" className="text-center section">
      <div className="container">
        <h2><span className="highlight_secondary">Our</span> Team</h2>

        <h5>
          Our people are our greatest asset and biggest differentiator.<br/>
          Come Join Us. And you can also get your name and headshot here. 😍
        </h5>

        <div className="hr big_size_hr invisible_hr">
            <i className="fa fa-"></i>
        </div>

        <div className="hr invisible_hr">
            <i className="fa fa-"></i>
        </div>

        <div className="row" style={{align: 'center'}}>
          <div className="col-md-2 col-md-offset-1 col-sm-4 col-xs-6 ">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={manoj} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h5>Manoj</h5></div>
                <div className="team-role">Prakasam, West Godavari</div>
                <div className="team-description"></div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={ajay} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h5>Ajay</h5></div>
                <div className="team-role">Kadapa, Anantapur</div>
                <div className="team-description"></div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={gowtham} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h5>Gowtham</h5></div>
                <div className="team-role">Nellore, Chittoor</div>
                <div className="team-description"></div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={prasanth} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h5>Prasanth</h5></div>
                <div className="team-role">Hyderabad, Rangareddy</div>
                <div className="team-description"></div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={vikram} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h5>Vikram</h5></div>
                <div className="team-role">Krishna, Guntur</div>
                <div className="team-description"></div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={headshot} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h5>Lokesh</h5></div>
                <div className="team-role">Developer - Technical Stack</div>
                <div className="team-description"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hr big_size_hr invisible_hr">
            <i className="fa fa-"></i>
        </div>

      </div>
    </section>
    </>
  );
};

const OurTeam = () => {
  return <OurTeamTemplate/>;
};

export default OurTeam;
