import React from 'react'
import './About.css'
import NAvbar from "../HomePage-Components/NAvbar";
import Footer from '../HomePage-Components/Footer';
function About() {
    return (
        <>
        <NAvbar></NAvbar>
      {/* <div className="about container-fluid">
            
            <div className="img_about">
              <img src="https://flangemanufacturersindia.com/wp-content/uploads/2021/03/about-us.png"></img>
            </div>
            <div className="mission_label">
                
                <h3>Our Mission</h3>
                <h4>Our Mission is to offer child care services to families who are busy in their schedule and can't able to take care of their children so we provides the platform for those families by which they can finds the  Nearest care centers , their information and put their child to suitable care centers at lower costs.   </h4>
            </div>
        </div> */}
          <section>
            <div className = "image">
               <img src="https://cdn.vectorstock.com/i/1000x1000/85/57/doctor-wearing-medical-mask-with-vaccine-cartoon-vector-36808557.webp"></img>
            </div>

            <div className = "content">
                <h2>About Us</h2>
                <span></span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
                <ul className = "links">
                    <li><a href = "#">work</a></li>
                    <div className = "vertical-line"></div>
                    <li><a href = "#">service</a></li>
                    <div className = "vertical-line"></div>
                    <li><a href = "#">contact</a></li>
                </ul>
                <ul className = "icons">
                    <li>
                        <i className = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i className=  "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i className=  "fa fa-github"></i>
                    </li>
                    <li>
                        <i className= "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
        </section><br></br>
        
        <Footer></Footer>
        </>
    )
}

export default About
