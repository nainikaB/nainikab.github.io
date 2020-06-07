import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillMediumCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import dribbble from "./images/dribbble.png";
import { MdEmail } from "react-icons/md";
import rocket from "./images/rocket.png";
import me from "./images/me.png";

const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="backgroundimg">
          <div className="section1">
            <div className="logo">
              <img src={me} alt="me" />
            </div>
            <div className="contact-me">
              <img className="rocket" src={rocket} alt="rocket" />

              <div className="contact">
                <h3>Contact</h3>
                <div className="mail">
                  <a href="mailto:nainikabaliga.gmail">
                    <MdEmail
                      style={{
                        marginRight: "30px",
                        textDecoration: "none",
                        border: "none",
                        color: "white",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="social-media">
              <div className="icons">
                <a href="https://twitter.com/NainikaBaliga">
                  {" "}
                  <AiFillTwitterCircle
                    style={{
                      marginRight: "30px",
                      textDecoration: "none",
                      border: "none",
                      color: "white",
                    }}
                  />
                </a>
              </div>
              <div className="icons">
                <a href="https://medium.com/@NainikaBaliga">
                  {" "}
                  <AiFillMediumCircle
                    style={{
                      marginRight: "30px",
                      textDecoration: "none",
                      border: "none",
                      color: "white",
                    }}
                  />
                </a>
              </div>
              <div className="icons">
                <a href="https://github.com/nainikaB">
                  <AiFillGithub
                    style={{
                      marginRight: "30px",
                      textDecoration: "none",
                      border: "none",
                      color: "white",
                    }}
                  />
                </a>
              </div>
              <div className="dribble">
                <a href="https://dribbble.com/nainika">
                  <img src={dribbble} alt="dribbble" />
                </a>
              </div>
            </div>
            <div className="done-by">
              <p>Designed and Developed by Nainika Baliga</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
