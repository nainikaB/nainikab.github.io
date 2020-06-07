import React from "react";
import homepage from "./images/home-pagee.png";

const Home = () => {
  return (
    <div id="body">
      <div id="home">
        <div className="home-section">
          <div className="home-title-page">
            <span className="title-home">Hey, there!</span>
            <p className="para-home">
              I am Nainika, nice to meet you. Please take a look around, hope
              you like what you see.
            </p>
          </div>
          <div className="home-page">
            <img src={homepage} alt="homepage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
