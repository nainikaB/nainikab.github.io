import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import sass from "../images/sass.png";
import figma from "../images/figma.png";
import procreate from "../images/procreate.png";
import illustrator from "../images/adobe-illustrator.png";
import photoshop from "../images/photoshop.jpeg";
import auth0 from "../images/auth0.png";
import c from "../images/c.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import Rres from "../images/R_logo.png";


const ResponsiveSkills = () => {
  return (
    <div id="body">
      <div id="responsive-skills-screen">
        <h2 className="title-skills">My Skills</h2>
        <h3 className="subtitle-skills">Front-End Web development </h3>
        <div className="front-skills">
          <div className="htmlprogressbar">
            <div className="html">
              <img
                style={{ height: "100%", width: "50px" }}
                src={html}
                alt="html"
              />
            </div>
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "90%" }}>90%</span>
              </div>
            </div>
          </div>
          <div className="cssprogressbar">
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "80%" }}>80%</span>
              </div>
            </div>
            <div className="css">
              <img
                style={{ height: "100%", width: "80px" }}
                src={css}
                alt="css"
              />
            </div>
          </div>
          <div className="sassprogressbar">
            <div className="sass">
              <img
                style={{ height: "100%", width: "70px" }}
                src={sass}
                alt="sass"
              />
            </div>
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "70%" }}>70%</span>
              </div>
            </div>
          </div>
          <div className="jsprogressbar">
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "65%" }}>65%</span>
              </div>
            </div>
            <div className="js">
              <img
                style={{ height: "100%", width: "120px" }}
                src={js}
                alt="js"
              />
            </div>
          </div>
        </div>
        <h3 className="subtitle-skills">Javascript Frameworks and Libraries</h3>
        <div className="js-skills">
          <div className="react-progressbar">
            <div className="react">
              <img
                style={{ height: "100%", width: "70px" }}
                src={react}
                alt="react"
              />
            </div>
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "60%" }}>60%</span>
              </div>
            </div>
          </div>
          <div className="redux-progressbar">
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "50%" }}>50%</span>
              </div>
            </div>
            <div className="redux">
              <img
                style={{ height: "100%", width: "70px" }}
                src={redux}
                alt="redux"
              />
            </div>
          </div>
        </div>
        <h3 className="subtitle-skills">Design Tools and Softwares</h3>
        <div className="design-skills">
          <div className="figma-progressbar">
            <div className="figma">
              <img
                style={{ height: "100%", width: "70px" }}
                src={figma}
                alt="figma"
              />
            </div>
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "70%" }}>70%</span>
              </div>
            </div>
          </div>
          <div className="procreate-progressbar">
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "65%" }}>65%</span>
              </div>
            </div>
            <div className="procreate">
              <img
                style={{ height: "100%", width: "70px" }}
                src={procreate}
                alt="procreate"
              />
            </div>
          </div>
          <div className="illustrator-progressbar">
            <div className="illustrator">
              <img
                style={{ height: "100%", width: "70px" }}
                src={illustrator}
                alt="illustrator"
              />
            </div>
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "70%" }}>70%</span>
              </div>
            </div>
          </div>
          <div className="photoshop-progressbar">
            <div className="progressbar">
              <div className="bar">
                <span style={{ width: "65%" }}>65%</span>
              </div>
            </div>
            <div className="photoshop">
              <img
                style={{ height: "100%", width: "70px" }}
                src={photoshop}
                alt="photoshop"
              />
            </div>
          </div>
        </div>
        <h3 className="subtitle-skills">What I am currently learning</h3>
        <div className="learn-skills">
          <div className="auth-text">
            <div className="auth0">
              <img
                style={{ height: "100%", width: "60px" }}
                src={auth0}
                alt="auth0"
              />
            </div>
            <div className="text-skills">
              <h3>Course ongoing on Pluralsight</h3>
            </div>
          </div>
          <div className="aws-text">
            <div className="text-skills">
              <h3>Course is complete</h3>
            </div>
            <div className="aws">
              <img
                style={{ height: "100%", width: "90px" }}
                src={Rres}
                alt="aws"
              />
            </div>
          </div>
          <div className="c-text">
            <div className="c">
              <img style={{ height: "100%", width: "70px" }} src={c} alt="c" />
            </div>
            <div className="text-skills">
              <h3>Course ongoing on EDX</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSkills;
