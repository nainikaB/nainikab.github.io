import React from "react";
import skills from "../images/skills.png";
import htmlres from "../images/html-res.png";
import cssres from "../images/css-res.png";
import jsres from "../images/js-res.png";
import sassres from "../images/sass-res.png";
import figmares from "../images/figma-res.png";
import procreateres from "../images/procreate-res.png";
import illustratorres from "../images/illustrator-res.png";
import photoshopres from "../images/photoshop-res.png";
import auth0res from "../images/auth0-res.png";
import awsres from "../images/aws-res.png";
import cres from "../images/c-res.png";
import frescores from "../images/fresco-res.png";
import reduxres from "../images/redux-res.png";
import reactres from "../images/react-res.png";
import gitres from "../images/git-res.png";

const Skills = () => {
  return (
    <div id="body">
      <div id="skills">
        <img src={skills} alt="skills" className="bg" />
        <h2 className="skills-title">My Skills</h2>
        <img
          title="Advanced:90/100%"
          className="htmlres"
          src={htmlres}
          alt="htmlres"
        />
        <img
          title="Advanced:80/100%"
          className="cssres"
          src={cssres}
          alt="cssres"
        />
        <img
          title="Intermediate:65/100%"
          className="jsres"
          src={jsres}
          alt="jsres"
        />
        <img
          title="Intermediate:70/100%"
          className="sassres"
          src={sassres}
          alt="sassres"
        />
        <img
          title="Intermediate:70/100%"
          className="figmares"
          src={figmares}
          alt="figmares"
        />
        <img className="procreateres" src={procreateres} alt="procreateres" />
        <img
          title="Intermediate:80/100%"
          className="illustratorres"
          src={illustratorres}
          alt="illustratorres"
        />
        <img
          title="Intermediate:70/100%"
          className="photoshopres"
          src={photoshopres}
          alt="photoshopres"
        />
        <img
          title="Basic:40/100%"
          className="auth0res"
          src={auth0res}
          alt="auth0res"
        />
        <img
          title="Basic:40/100%"
          className="awsres"
          src={awsres}
          alt="awsres"
        />
        <img title="Basic:30/100%" className="cres" src={cres} alt="cres" />
        <img
          title="Intermediate:70/100%"
          className="frescores"
          src={frescores}
          alt="frescores"
        />
        <img
          title="Intermediate:60/100%"
          className="reduxres"
          src={reduxres}
          alt="reduxres"
        />
        <img
          title="Intermediate:78/100%"
          className="reactres"
          src={reactres}
          alt="reactres"
        />
        <img
          title="Intermediate:73/100%"
          className="gitres"
          src={gitres}
          alt="gitres"
        />
      </div>
    </div>
  );
};

export default Skills;
