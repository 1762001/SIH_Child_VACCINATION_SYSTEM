import React from "react";
import "./DietChart.css";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";

import four from "./images/4.png";

import five from "./images/5.png";

import six from "./images/6.png";

const PregCard = () => {
 
  return (
    
    <div className="preg-container">
      <div className="parent">
        <div className="preg-content">
          <div className="card">
            <img src={one} alt="lorem" />
          </div>

          <div className="card">
            <img src={two} alt="lorem" />
          </div>

          <div className="card">
            <img src={three} alt="lorem" />
          </div>

          <div className="card">
            <img src={four} alt="lorem" />
          </div>

          <div className="card">
            <img src={five} alt="lorem" />
          </div>

          <div className="card">
            
              <img   src={six} alt="lorem" />
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregCard;
