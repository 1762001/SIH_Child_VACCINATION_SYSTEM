import React from 'react'
import Childcare from '../Homepage-src/img/Childcare.jpg'
import {Card} from 'react-bootstrap'
import './Content.css'


function Content() {
    return (
     <>  
  {/* Content Header (Page header) */}
  <div className="content-header content">
    <div className="container-fluid">
      <div className="row sm-1">
        <div className="col-sm-12">
          {/* <h5 style={{ color: "red" }}><marquee>Welcome to Child Care Center... &nbsp;&nbsp;&nbsp; Your Babies are in Safe Hands... &nbsp;&nbsp;&nbsp; Happy Daycare, Happy Children, Happy Parents...</marquee></h5> */}
        </div>{/* /.col */}
        <div className="col-sm-6">
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div className="container-fluid content">
  {/* <div className="col-mb-12 content-wrapper">
  <div id="body">
    <div id="featured"> */}
      <img src={Childcare} className="childcare" style={{ width: "1480px" , height : "720px" }}alt />
      </div>
    {/* </div>
    </div> */}
    {/* <div className="content">
    &nbsp;&nbsp;&nbsp;
    </div> */}
  {/* <section className="content">

  </section> */}
  {/* <div className="content">
    <br></br>
  </div> */}
  
  {/* /.content */}
{/* </div> */}
</>
    )
}


export default Content
