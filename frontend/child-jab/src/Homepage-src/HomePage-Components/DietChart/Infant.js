import React from "react";
import "./DietChart.css";
import one from "./images/7.png";
import two from "./images/8.png";
import three from "./images/9.png";

import four from "./images/10.png";

import five from "./images/11.png";

import six from "./images/12.png";

const PregCard = () => {
 
  return (
    
    <div className="preg-container">
      <div className="parent">
        <div className="preg-content">
          <div className="card">
            <img src={one} alt="lorem" />
          </div>

          <div className="card-1">
            <img src={two} alt="lorem" />
          </div>

          <div className="card-1">
            <img src={three} alt="lorem" />
          </div>

          <div className="card-1">
            <img src={four} alt="lorem" />
          </div>

          <div className="card-1">
            <img src={five} alt="lorem" />
          </div>

          <div className="card-1">
            
              <img   src={six} alt="lorem" />
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregCard;
