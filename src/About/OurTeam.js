import React from "react";
import manoj from "../images/manoj.jpeg";
import ajay from "../images/ajay.jpeg";
import gowtham from "../images/gowtham.png";
import prasanth from "../images/prasanth.jpeg";
import vikram from "../images/vikram.png";
import karthik from "../images/karthik.jpeg";
import kamlesh from "../images/kamlesh.jpeg";
import srinivas from "../images/srinivas.png";
import headshot from "../images/headshot.jpeg";

import "./OurTeam.css";

export const OurTeamTemplate = () => {

  return (
    <>
      <section id="team" className="text-center section">
      <div className="container">
        <h2><span className="highlight_secondary">Founders</span></h2>

        <div className="hr invisible_hr">
            <i className="fa fa-"></i>
        </div>

        <div className="row" style={{align: 'center', justifyContent: 'center'}}>
          <div className="col-md-2 col-md-offset-1 col-sm-4 col-xs-6 ">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={manoj} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h6>Manoj</h6></div>
                <div className="team-role">Australia</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-1 col-sm-4 col-xs-6 ">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={ajay} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h6>Ajay</h6></div>
                <div className="team-role">TG, AP, KA, TN</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-1 col-sm-4 col-xs-6 ">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={vikram} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h6>Vikram</h6></div>
                <div className="team-role">TG, AP, KA, TN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <br/>
      <section id="team" className="text-center section">
      <div className="container">
        <h2><span className="highlight_secondary">Our</span> Team</h2>

        <h5>
          Our people are our greatest asset and biggest differentiator.<br/>
          Come Join Us. 😍
        </h5>

        <div className="hr big_size_hr invisible_hr">
            <i className="fa fa-"></i>
        </div>

        <div className="hr invisible_hr">
            <i className="fa fa-"></i>
        </div>

        <div className="row" style={{align: 'center', justifyContent: 'center'}}>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={karthik} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h6>Karthik</h6></div>
                <div className="team-role">Prakasam, Guntur, Kadapa, Ananthapur</div>
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
                <div className="team-name"><h6>Gowtham</h6></div>
                <div className="team-role">Nellore, Chittoor, Kurnool</div>
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
                <div className="team-name"><h6>Prasanth</h6></div>
                <div className="team-role">Hyderabad, Rangareddy</div>
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
                <div className="team-name"><h6>Nabbi</h6></div>
                <div className="team-role">Vizag, Krishna, WG, EG</div>
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
                <div className="team-name"><h6>Ravi Teja</h6></div>
                <div className="team-role">USA</div>
                <div className="team-description"></div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={srinivas} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h6>Srinivas</h6></div>
                <div className="team-role">Hyderabad</div>
                <div className="team-description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="team" className="text-center section">
      <div className="container">
        <h2><span className="highlight_secondary">Social Media</span></h2>

        <div className="hr invisible_hr">
            <i className="fa fa-"></i>
        </div>

        <div className="row" style={{align: 'center', justifyContent: 'center'}}>
          <div className="col-md-2 col-md-offset-1 col-sm-4 col-xs-6 ">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={headshot} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h6>Vamsi</h6></div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-1 col-sm-4 col-xs-6 ">
            <div className="team">
              <div className="team-image">
                <a href="#">
                  <img src={headshot} className="img-circle img-responsive"/>
                </a>
              </div>
              <div className="team-content">
                <div className="team-name"><h6>Lokesh</h6></div>
              </div>
            </div>
          </div>
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
