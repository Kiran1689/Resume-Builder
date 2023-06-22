import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1 className="title">Welcome to Resume Builder</h1>
      </div>
      <div className="button-container">
        <Link to="/home">
          <button className="customize-button">Customize Your Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
