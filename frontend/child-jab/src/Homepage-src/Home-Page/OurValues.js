import React from 'react'
import Footer from '../HomePage-Components/Footer'
import NAvbar from '../HomePage-Components/NAvbar'
import './About.css'
import ourvalues from '../img/ourvalues2.png'
import ourvalues2 from '../img/ourvalues3.jpg'
import {Row, Image} from 'react-bootstrap'

function OurValues() {
    return (
        <>
          <NAvbar></NAvbar>
          <div className="content-header value">
        <div className="container-fluid">
        <div className="row md-2"></div>
      </div>
      </div>
        
       
           <div className="ourvalue">
          <div className="container-fluid">
          <Image src={ourvalues2}   roundedCircle style={{ width: "500px", height : "450px" }}></Image> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={ourvalues} style={{ width: "500px", height : "450px" }}></img>
          </div>
          <br></br>
          <div>
            <Row>
              
              <span className="block-example border border-primary">
                <div>
                <h3>Child Care Loves the Community</h3>
           <h5>At ChildCare Education, we know learning begins at birth and that the first five years of life are the most critical in a child’s development. That’s why, through our community partnerships, we enhance educational opportunities for children and families by providing volunteer, in-kind, and financial contributions. 
           The Value of Early Childhood Education
        Research shows that early childhood educational and development efforts are critical for helping children enjoy health, confidence and success later in life. 
        We support organizations that emphasize the importance of education equity, early childhood literacy, whole-child health, and more.</h5>
  
              </div> 
              </span>
              
            </Row>
          </div>
       </div>
        
          <Footer></Footer>  
         
        </>
    )
}

export default OurValues
