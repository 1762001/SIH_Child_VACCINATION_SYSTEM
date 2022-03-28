import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Admin_Page = () => {
  const [hospitals, setHospitals] = useState("");
  let history=useHistory();
    var count=1;
  useEffect(() => {
    const url = "http://localhost:5000/api/auth/gethospitallist";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        setHospitals(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">sl.no</th>
            <th scope="col">Name</th>
            <th scope="col">city</th>
            <th scope="col">email</th>
            <th scope="col">pincode</th>
          </tr>
        </thead>
        <tbody>
        {
        
         Object.entries(hospitals).map((h) => {

            return(

            
                <tr>
                <th scope="row">{count++}</th>
                <td>{h[1].name}</td>
                <td>{h[1].city}</td>
                <td>{h[1].email}</td>
                <td>{h[1].pincode}</td>
              </tr>
            );

        })}
          
          
        </tbody>
      </table>
      <h1>Click to register the hospital</h1>
      <button
          type="submit"
          className="button login__submit"
          onClick={() => history.push('/admin-registration')}
          
        >
          <span class="button__text">Register</span>
          <i class="button__icon fas fa-chevron-right"></i>

        </button>
    </div>
  );
};

export default Admin_Page;
