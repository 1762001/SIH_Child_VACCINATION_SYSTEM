import React, {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  gallery1 from '../img/gallery1.jpg'
import  gallery2 from '../img/gallery2.jpg'
import  gallery3 from '../img/gallery3.jpg'
import  gallery4 from '../img/gallery4.jpeg'
import  gallery5 from '../img/gallery5.jpg'
import  gallery6 from '../img/gallery6.jpeg'
import  gallery7 from '../img/gallery7.jpg'
import  gallery8 from '../img/gallery8.jpeg'
import  gallery9 from '../img/gallery9.jpg'
import  gallery10 from '../img/gallery10.jpg'
import  gallery11 from '../img/gallery11.jpeg'
import  gallery12 from '../img/gallery12.jpeg'
import  gallery13 from '../img/gallery13.jpg'
import  gallery14 from '../img/gallery14.jpg'
import NAvbar from '../HomePage-Components/NAvbar'
import Footer from '../HomePage-Components/Footer'
import {connect} from 'react-redux'
import {getParentsGallery} from '../../_actions/gallery.action'


function Gallery(props) {

    useEffect(() => {
        props.getallGallery()
    }, [])

    

    return (
        <>
        <NAvbar></NAvbar>
        <div className="content-header">
              <div className="container-fluid">
                  <div className="row mb-2">
                 </div>
            </div>
        </div>
         <div className="container-fluid">
            <Row>
                <Col>
               <img src={gallery1} style={{ width: "720px" , height : "500px" }}></img>
                </Col>
                &nbsp;&nbsp;&nbsp;
                <Col>
                <img src={gallery2} style={{ width: "720px" , height : "500px" }}></img>
                </Col>
                </Row>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Row>
                    <Col>
                    <img src={gallery3} style={{ width: "450px" , height : "250px" }}></img>
                    </Col>
                    <Col>
                    <img src={gallery4} style={{ width: "450px" , height : "250px" }}></img>
                    </Col>
                    <Col>
                    <img src={gallery5} style={{ width: "450px" , height : "250px" }}></img>
                    </Col>
                </Row>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Row>
                 <Col>
                 <img src={gallery6} style={{ width: "320px" , height : "260px" }}></img>
                 </Col>
                 <Col>
                 <img src={gallery7} style={{ width: "320px" , height : "260px" }}></img>
                 </Col>
                 <Col>
                 <img src={gallery8} style={{ width: "320px" , height : "260px" }}></img>
                 </Col>
                 <Col>
                 <img src={gallery9} style={{ width: "320px" , height : "260px" }}></img>
                 </Col>
                </Row>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Row>
                    <Col>
                    <img src={gallery10} style={{ width: "720px" , height : "500px" }}></img>
                    </Col>
                    <Col>
                    <img src={gallery13} style={{ width: "720px" , height : "500px" }}></img>
                    </Col>
                </Row>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Row>
                  <Col>
                  <img src={gallery11} style={{ width: "470px" , height : "460px" }}></img>
                  </Col>
                  <Col>
                  <img src={gallery12} style={{ width: "470px" , height : "460px" }}></img>
                  </Col>
                  <Col>
                  <img src={gallery14} style={{ width: "470px" , height : "460px" }}></img>
                  </Col>
                </Row> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                {props.gallery.allGalleries && props.gallery.allGalleries.map(gallery =>{
                    return (
                        <>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                 <img src={`${process.env.REACT_APP_SERVER_URL}${gallery.image}`} width="320" height="260">
                 </img>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </>

                    )
                })}
         
          <br></br>
          <br></br>
          <Footer></Footer>
        </>
    )
}

const  mapStateToProps = (state)=>{
    return {
        gallery : state.galleryReducer
    }
}

//step 2
const mapDispatchToProps = (dispatch) =>{
    return {
        getallGallery : ()=> dispatch(getParentsGallery())
       
    }
}

//step 3
const connectGallery = connect(mapStateToProps,mapDispatchToProps)

export default connectGallery(Gallery)




