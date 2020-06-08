import React from "react";

const Projects = () => {
  return (
    <div>
      <div id="projects-page">
        <h2 className="project-title">My Projects.</h2>
        <div className="project1">
          <div className="project-textsection">
            <h2 className="project-subtitle">Neighbourhood Maps</h2>
            <p className="project-para">
              Built using React, Foursquare API and Google Maps API.
            </p>
            <button className="project-button">
              <a href="https://github.com/nainikaB/Neighbourhood-Map">
                Click here to view source code
              </a>
            </button>
          </div>
          <div className="project-pic"></div>
        </div>
        <div className="project2">
          <div className="project-pic"></div>
          <div className="project-textsection">
            <h2 className="project-subtitle">Weather App</h2>
            <p className="project-para">
              Built using React, Redux and Openweathermap API.
            </p>
            <button className="project-button">
              <a href="https://github.com/nainikaB/weather-app">
                Click here to view source code
              </a>
            </button>
          </div>
        </div>
        <div className="project3">
          <div className="project-textsection">
            <h2 className="project-subtitle">My Reads</h2>
            <p className="project-para">Built using React and library API.</p>
            <button className="project-button">
              <a href="https://github.com/nainikaB/fend-MyReads">
                Click here to view source code
              </a>
            </button>
          </div>
          <div className="project-pic"></div>
        </div>
        <div className="project4">
          <div className="project-pic"></div>
          <div className="project-textsection">
            <h2 className="project-subtitle">LIVE PROJECT: Freshlypop'd</h2>
            <p className="project-para">Built using Wordpress and Instamojo.</p>
            <button className="project-button">
              <a href="http://www.freshlypopd.in/">
                Click here to view website
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
