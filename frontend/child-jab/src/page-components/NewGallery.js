import React , {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Card, Container,Form, Col, Button } from 'react-bootstrap'
import {createGallery, updateGallery} from '../_actions'
import {
    useHistory
} from 'react-router-dom'
import FileUpload from '../components/FileUpload'

function NewGallery (props) {

    //console.log(props.gallery)
    const history = useHistory();
    const [gallery, setGallery] = useState({
        center_id : "",
        image : "",
        description : ""
    })

    useEffect(() => {
      setGallery(props.gallery.selectedGallery)
       
    }, [])
    const handleChange = (e)=>{
       setGallery({ 
         ...gallery, 
         [e.target.name]: e.target.value
        })
    }

    // const handleSubmit = ()=>{
    //   if(gallery.id){
    //     props.updateGallery(gallery)
    //   }else{
        
    //     props.createGallery(gallery)
    //   }
    // }
    

    return (
        <>
       {
           props.gallery.gallery.id>0 && 
           history.push(`/manage-gallery`)
       }
       {
         props.gallery.selectedGallery.affectedRows>0 &&
         history.push(`/manage-gallery`)
       }
       {
           props.gallery.error
       }

       
       <Container>
           <Col md={11}>
           <Card border="secondary" bg="light" text="dark">
        <Card.Header>
              <h3>Manage Gallery</h3>

        </Card.Header>
        <Card.Body>
        <FileUpload name="image" value={gallery.image} onChange={handleChange}></FileUpload>
           
        </Card.Body>
         </Card>
           </Col>
       
       </Container>
        </>
    )
}

//step 1
const mapStateToProps =(state)=>{
    return {
      gallery : state.galleryReducer
    }
  }
  
  //step 2
  const mapDispatchToProps =(dispatch)=>{
    return {
      createGallery : (gallery) =>dispatch(createGallery(gallery)),
      updateGallery : (gallery) => dispatch(updateGallery(gallery))
    }
  }
  
  //step 3
  const connectGallery = connect(mapStateToProps,mapDispatchToProps)
  
  export default connectGallery(NewGallery)