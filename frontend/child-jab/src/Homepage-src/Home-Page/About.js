import React from 'react'
import './About.css'
import NAvbar from "../HomePage-Components/NAvbar";
import Footer from '../HomePage-Components/Footer';
function About() {
    return (
        <>
        <NAvbar></NAvbar>
        <div className="about container-fluid">
            
            <div className="img_about">
              <img src="https://flangemanufacturersindia.com/wp-content/uploads/2021/03/about-us.png"></img>
            </div>
            <div className="mission_label">
                
                <h3>Our Mission</h3>
                <h4>Our Mission is to offer child care services to families who are busy in their schedule and can't able to take care of their children so we provides the platform for those families by which they can finds the  Nearest care centers , their information and put their child to suitable care centers at lower costs.   </h4>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default About
