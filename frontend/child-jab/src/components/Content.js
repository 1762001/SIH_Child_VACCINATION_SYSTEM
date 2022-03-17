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
          <h5 style={{ color: "red" }}><marquee>Welcome to Child Care Center... &nbsp;&nbsp;&nbsp; Your Babies are in Safe Hands... &nbsp;&nbsp;&nbsp; Happy Daycare, Happy Children, Happy Parents...</marquee></h5>
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
    <div className="content">
    &nbsp;&nbsp;&nbsp;
    </div>
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>1500+</h3>
              <p><h4>Children Enrolled</h4></p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <a href="/flow" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>95<sup style={{fontSize: 20}}>%</sup></h3>
              <p><h4>Satisfied Parents</h4></p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="/testimonials" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>500+</h3>
              <p><h4>Positive Feedbacks</h4></p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <a href="/feedbackform" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>100+</h3>
              <p><h4>Services and Facilities</h4></p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <a href="/contact-us" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        {/* ./col */}
      </div>
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable">
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1" />
                Enrollment Around Country
              </h3>
              <div className="card-tools">
                <ul className="nav nav-pills ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                  </li>
                </ul>
              </div>
            </div>{/* /.card-header */}
            <div className="card-body">
              <div className="tab-content p-0">
                {/* Morris chart - Sales */}
                <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />
                </div>
                <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />
                </div>
              </div>
            </div>{/* /.card-body */}
          </div>
          {/* /.card */}
          {/* DIRECT CHAT */}
          <div className="card direct-chat direct-chat-primary">
            <div className="card-header">
              <h3 className="card-title">Direct Chat with our Executive</h3>
              <div className="card-tools">
                <span title="3 New Messages" className="badge badge-primary">3</span>
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                  <i className="fas fa-comments" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              {/* Conversations are loaded here */}
              <div className="direct-chat-messages">
                {/* Message. Default to the left */}
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">Our Executive</span>
                    <span className="direct-chat-timestamp float-right">23 April 2:00 pm</span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    Hello Sir/Madam ! Welcome to child care center. How may i help you?
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message to the right */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">Smita Patel</span>
                    <span className="direct-chat-timestamp float-left">23 April 2:05 pm</span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    How to choose the center?
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message. Default to the left */}
                <div className="direct-chat-msg">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-left">Our Executive</span>
                    <span className="direct-chat-timestamp float-right">23 April 2:08 pm</span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    You can checkout that in "For Parents" section 
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
                {/* Message to the right */}
                <div className="direct-chat-msg right">
                  <div className="direct-chat-infos clearfix">
                    <span className="direct-chat-name float-right">Smita Patel</span>
                    <span className="direct-chat-timestamp float-left">23 April 2:10 pm</span>
                  </div>
                  {/* /.direct-chat-infos */}
                  <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                  {/* /.direct-chat-img */}
                  <div className="direct-chat-text">
                    I would love to.
                  </div>
                  {/* /.direct-chat-text */}
                </div>
                {/* /.direct-chat-msg */}
              </div>
              {/*/.direct-chat-messages*/}
              {/* Contacts are loaded here */}
              <div className="direct-chat-contacts">
                <ul className="contacts-list">
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Avatar" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Deep Patel
                          <small className="contacts-list-date float-right">28/4/2021</small>
                        </span>
                        <span className="contacts-list-msg">How have you been? I was...</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Avatar" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Shilpa Patel
                          <small className="contacts-list-date float-right">2/5/2021</small>
                        </span>
                        <span className="contacts-list-msg">I will be waiting for...</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Avatar" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Trupti pandya
                          <small className="contacts-list-date float-right">5/5/2021</small>
                        </span>
                        <span className="contacts-list-msg">I'll call you back at...</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Avatar" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Jagruti Patel
                          <small className="contacts-list-date float-right">20/5/2021</small>
                        </span>
                        <span className="contacts-list-msg">Where is your new...</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                  <li>
                    <a href="#">
                      <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Avatar" />
                      <div className="contacts-list-info">
                        <span className="contacts-list-name">
                          Rakesh Patel
                          <small className="contacts-list-date float-right">1/6/2021</small>
                        </span>
                        <span className="contacts-list-msg">Can I take a look at...</span>
                      </div>
                      {/* /.contacts-list-info */}
                    </a>
                  </li>
                  {/* End Contact Item */}
                </ul>
                {/* /.contacts-list */}
              </div>
              {/* /.direct-chat-pane */}
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <form action="#" method="post">
                <div className="input-group">
                  <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                  <span className="input-group-append">
                    <button type="button" className="btn btn-primary">Send</button>
                  </span>
                </div>
              </form>
            </div>
            {/* /.card-footer*/}
          </div>
          {/*/.direct-chat */}
          {/* <div className="container_fluid">
          <Card align="center">
          <Card.Header><h4>Services and Facilities</h4></Card.Header>
          <Card.Body>
            <Card.Text align="left">1. AC / NON-AC Rooms Available <br></br>
                     2. Flexible Timings <br></br>
                     3. Sports Activities Available <br></br>
                     4. Fitness Activities <br></br>
                     5. Child safety<br></br>
              </Card.Text>
          </Card.Body>
          </Card>
          </div>*/}
        </section> 
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
        <section className="col-lg-5 connectedSortable">
          {/* Map card */}
          <div className="card bg-gradient-primary">
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="fas fa-map-marker-alt mr-1" />
                Visitors
              </h3>
              {/* card tools */}
              <div className="card-tools">
                <button type="button" className="btn btn-primary btn-sm daterange" title="Date range">
                  <i className="far fa-calendar-alt" />
                </button>
                <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            <div className="card-body">
              <div id="world-map" style={{height: 250, width: '100%'}} />
            </div>
            {/* /.card-body*/}
            <div className="card-footer bg-transparent">
              <div className="row">
                <div className="col-4 text-center">
                  <div id="sparkline-1" />
                  <div className="text-white">Visitors</div>
                </div>
                {/* ./col */}
                <div className="col-4 text-center">
                  <div id="sparkline-2" />
                  <div className="text-white">Online</div>
                </div>
                {/* ./col */}
                <div className="col-4 text-center">
                  <div id="sparkline-3" />
                  <div className="text-white">Enrollment</div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.card */}
         {/* /.card */}
          {/* Calendar */}
          <div className="card bg-gradient-success">
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="far fa-calendar-alt" />
                Calendar
              </h3>
              {/* tools card */}
              <div className="card-tools">
                {/* button with a dropdown */}
                <div className="btn-group">
                  <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset={-52}>
                    <i className="fas fa-bars" />
                  </button>
                  <div className="dropdown-menu" role="menu">
                    <a href="#" className="dropdown-item">Add new event</a>
                    <a href="#" className="dropdown-item">Clear events</a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">View calendar</a>
                  </div>
                </div>
                <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-success btn-sm" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
              {/* /. tools */}
            </div>
            {/* /.card-header */}
            <div className="card-body pt-0">
              {/*The calendar */}
              <div id="calendar" style={{width: '100%'}} />
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </section>
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  <div className="content">
    <br></br>
  </div>
  
  {/* /.content */}
{/* </div> */}
</>
    )
}


export default Content
