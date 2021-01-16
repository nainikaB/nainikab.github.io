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
                I am a front end web developer turned Data Analyst with a keen
                interest in startups. I graduated with a degree in business and
                specialisation in finance. But coming from a different
                background hasn’t deterred my determination to make it in this
                industry that I have come to adore. It's like they say, when you
                find your true calling there’s nothing stopping you. Now, I do
                understand that I’m a work in progress but I always believe that
                perseverance and true grit can outweigh anything. <br /> From
                being a Google Udacity Scholar to an active member in WTM and
                GDG, this industry has taught me the power of community and how
                many people it can benefit from a collaborative learning
                atmosphere.  I am an extremely extroverted, harworking, creative
                and out of the box thinker, I’m always pushing myself to be
                better and do better, not just professionally but also as a
                person. In my free time you can find me illustrating or reading
                about smart tech or running after my six doggos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
