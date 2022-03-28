import { useState } from "react";
import HospitalContext from "./HospitalContext";

const HospitalState = (props) => {
  const host = "http://localhost:5000";
  const HospitalInitial = [];
  // We will not add notes randomly we will get it for fetch api
  const [hospital, setHospital] = useState(HospitalInitial);

  // get all notes
  const getHospital = async () => {
    // todo api call
    const response = await fetch (`${host}/api/auth/gethospitallist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       
      },
    });
    console.log(response)
    const json = await response.json();
    console.log(json);
    setHospital(json);
  };

 
  
  return (
    <HospitalContext.Provider
      value={{ hospital, getHospital}}
    >
     {props.children}
    </HospitalContext.Provider>
  );
};

export default HospitalState;
