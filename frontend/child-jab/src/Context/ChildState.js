import { useState } from "react";
import childContext from "./ChildContext";

const ChildState = (props) => {
  const host = "http://localhost:5000";
  const ChildInitial = [];
  // We will not add notes randomly we will get it for fetch api
  const [child, setChild] = useState(ChildInitial);

  // get all notes
  const getchild = async () => {
    // todo api call
    const response = await fetch (`${host}/api/childauth/getchild`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       "auth-token":localStorage.getItem('token')
      },
    });
    console.log(response)
    const json = await response.json();
    console.log(json);
    setChild(json);
  };

 
  
  return (
    <childContext.Provider
      value={{ child, getchild}}
    >
     {props.children}
    </childContext.Provider>
  );
};

export default ChildState;
