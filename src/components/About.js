import React from "react";
import nainikagdg from "../images/nainika-gdg.png";
const About = () => {
  return (
    <div id="body">
      <div id="about">
        <div className="about-sections">
          <div className="section1">
            <div className="img-about">
              <img src={nainikagdg} alt="me" />
            </div>
            <div className="title-about">
              <h3>About me.</h3>
            </div>
          </div>
          <div className="section2">
            <div className="slider-wrapper">
              I am a
              <div className="slider">
                <div className="slider-text1">developer</div>
                <div className="slider-text2">dreamer</div>
                <div className="slider-text3">designer</div>
              </div>
            </div>
            <div className="para-about">
              <p>
                I am Nainika I am a Font-End Web Developer and Designer. I
                graduated from Christ Univeristy with a degree in BBA amd
                specialisation in finance. But coming from a different
                background hasn't deterred my determination to make it in this
                industry that I have come to adore. It's like they say, when you
                find your true calling there is nothing stopping you. That's
                exactly what happened with me and I haven't looked back since! I
                do understand that I am a work in progress, but if I eat sleep
                code repeat for long enough, I'll get to where I want to be in
                no time. From becoming a Google Udacity Scholar to a helping out
                with Devfest, everything has made me want to be a part of this
                industry even more and contribute in any way I can to help make
                lives easier by creating memorable user interphases and
                experinces. <br />I am an extremely extroverted, harworking,
                creative and out of the box thinker, I am always pushing myself
                to be better and do better, not just professionally but also as
                a person. In my free time you can find me illustrating or
                running after my six rescued doggos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
