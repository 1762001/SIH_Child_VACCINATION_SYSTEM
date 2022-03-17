import React from "react";
import "./Search.css";
import { Form } from "react-bootstrap";
import NAvbar from "../HomePage-Components/NAvbar";
import Footer from "../HomePage-Components/Footer";
function Search() {
  return (
    <>
    <NAvbar></NAvbar>
    <div className="search container-fluid">
      <div className="search_care_center">
        <div>
          <h2>Select best care center </h2>
        </div>
        <Form.Group>
          <Form.Control as="select" size="lg">
            <option>select Country</option>
            <option>India</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" size="lg">
            <option>select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" size="lg">
            <option>select District</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" size="lg">
            <option>select care Center</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
        <button className="nav_btn">Done</button>
       
        </Form.Group>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Search;
