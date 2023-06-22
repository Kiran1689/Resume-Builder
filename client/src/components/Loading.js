import React from "react";
import "../loading.css"; // Importing the CSS file for Loading component

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="background-image"></div>
      <h1>Building, please wait...</h1>
    </div>
  );
};

export default Loading;
