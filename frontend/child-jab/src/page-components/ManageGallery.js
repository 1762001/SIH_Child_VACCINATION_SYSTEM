import React,{useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {GalleryData} from '../Data/GalleryData'
import {
    Link, useHistory
} from 'react-router-dom'
import {connect} from 'react-redux'
import {getGallery, setSelectedGallery, resetSelectedGallery, deleteGallery} from '../_actions'

function ManageGallery(props) {
    const history = useHistory();
    useEffect(()=>{
      let user=sessionStorage.getItem("user")
      let centerId=-1
      if(user==="center"){
      let centerDetails=JSON.parse(sessionStorage.getItem("auth"))
      centerId=centerDetails.id
    }
      props.getallGallery(centerId)
      props.resetSelectedGallery()
    },[])

    const editCurrentGallery = (selectedGallery)=>{
      console.log(selectedGallery)
      props.setSelectedGallery(selectedGallery)
      history.push(`/new-gallery`)
    }

    const deleteCurrentGallery = (selectedGallery)=>{
      props.deleteGallery(selectedGallery.id)
    }

    const newGallery = ()=>{
      history.push(`/new-gallery`)
    }
    return (
        <>
         
  <div classname="row">
  <div className="col-md-10">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All Gallery</h3>
        <Button variant="success" className="float-right" onClick={()=>newGallery()}>New-Gallery</Button>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width: 10}}>ID</th>
              <th>Center</th>
              <th>Image</th>
              <th>Description</th> 
              <th>Actions</th> 
            </tr>
          </thead>
          <tbody>
          {props.gallery.allGalleries && props.gallery.allGalleries.map(gallery =>{
                
                  return <tr key={gallery.id}>
                       <td>{gallery.id}</td>
                       <td>{gallery.name}</td>
                       <td><img src={`${process.env.REACT_APP_SERVER_URL}${gallery.image}`}
                       width="100" height="100" ></img></td>
                       <td>{gallery.description}</td> 
                       <td>
                         <Button onClick={()=>editCurrentGallery(gallery)}>Edit</Button>
                         &nbsp;&nbsp;
                         <Button variant="danger" onClick={()=>deleteCurrentGallery(gallery)}>Delete</Button>
                         </td>      
                       </tr>
              })}
            </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </div>
</div>
 

        </>
    )
}
//step 1
const  mapStateToProps = (state)=>{
    return {
        gallery : state.galleryReducer
    }
}

//step 2
const mapDispatchToProps = (dispatch) =>{
    return {
        getallGallery : (centerId)=> dispatch(getGallery(centerId)),
        setSelectedGallery : (selectedGallery)=> dispatch(setSelectedGallery(selectedGallery)),
        resetSelectedGallery : ()=> dispatch(resetSelectedGallery()),
        deleteGallery : (selectedGalleryId)=> dispatch(deleteGallery(selectedGalleryId))
    }
}

//step 3
const connectGallery = connect(mapStateToProps,mapDispatchToProps)

export default connectGallery(ManageGallery)
