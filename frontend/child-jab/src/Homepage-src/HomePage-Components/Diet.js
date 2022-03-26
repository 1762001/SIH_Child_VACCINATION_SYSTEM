import React from "react";
import "./Diet.css";
import NAvbar from "../HomePage-Components/NAvbar";
import {  useHistory } from "react-router-dom";

function Diet() {
  
    var history = useHistory();
  
  return (
    <>
      <NAvbar></NAvbar>
      <div className="diet">
        <div className="containerm">
          <div className="row">
            <div className="col-md-4" onClick={()=>{
              history.push('/PregCard')
            }}>
              <div className="images">
                {" "}
                <img
                  className="imgs"
                  src="https://i.pinimg.com/236x/fb/7c/26/fb7c266cc5c249fe4c3a801d6c1a46a1--mother-care-vector-vector.jpg"
                  alt=""
                />{" "}
                <p className="img-overlay-text">Pregnant Lady Diet</p>{" "}
              </div>
            </div>
            <div className="col-md-4" onClick={()=>{
              history.push('/PostPregCard')
            }}>
              <div className="images">
                {" "}
                <img
                  className="imgs"
                  src="https://image.shutterstock.com/image-vector/baby-tender-embrace-mother-mothers-260nw-397361416.jpg"
                  alt=""
                />{" "}
                <p className="img-overlay-text">Post Pregnancy Diet</p>{" "}
              </div>
            </div>
            <div className="col-md-4" onClick={()=>{
              history.push('/Infant')
            }}>
              <div className="images">
                {" "}
                <img
                  className="imgs"
                  src="https://img.freepik.com/free-vector/flat-design-stages-baby-boy-illustration_23-2148986557.jpg?size=626&ext=jpg"
                  alt=""
                />{" "}
                <p className="img-overlay-text">Infants</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Diet;
