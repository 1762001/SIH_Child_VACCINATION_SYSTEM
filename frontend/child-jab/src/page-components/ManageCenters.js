import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { CenterData } from '../Data/CenterData'
import {
    Link, useHistory
} from 'react-router-dom'
import { getCenter, setSelectedCenter, resetSelectedCenter, deleteCenter } from '../_actions'
import {connect} from 'react-redux'


function ManageCenters(props) {
   // console.log(props.center.allCenters)
   const history = useHistory();
    useEffect(() => {
        props.getallCenters()
        props.resetSelectedCenter()
    }, [])
 
    const editCurrentCenter=(selectedCenter)=>{
      console.log(selectedCenter)
      props.setSelectedCenter(selectedCenter)
      history.push(`/new-center`);
    }

    const deleteCurrentCenter=(selectedCenter)=>{
      //console.log(selectedCenter)
        props.deleteCenter(selectedCenter.id)
    }

    const newCenter = ()=>{
      console.log(newCenter)
      history.push(`/new-center`)
    }
   

    return (
        <>
          
       
          <div classname="row">
  <div className="col-md-11">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All Centers</h3>
        <Button variant="success" className="float-right" onClick={()=>newCenter()} >New-Center</Button>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width: 10}}>ID</th>
              <th>Center Profile</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Manager Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Timings</th>
              <th>Opening Days</th>
              <th>Closing Days</th>
              <th>Website</th>
              <th>Social Media Link</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {props.center.allCenters && props.center.allCenters.map(center =>{
                  return <tr key={center.id}>
                       <td>{center.id}</td>
                       <td><img src={`${process.env.REACT_APP_SERVER_URL}${center.center_profile}`} width="100" height="100"></img></td>
                       <td>{center.name}</td>
                       <td>{center.address}</td>
                       <td>{center.city}</td>
                       <td>{center.manager_name}</td>
                       <td>{center.email_id}</td> 
                       <td>{center.phone}</td>
                       <td>{center.Timings}</td>
                       <td>{center.Opening_Days}</td>
                       <td>{center.Closing_Days}</td>
                       <td>{center.website}</td>
                       <td>{center.social_media_link}</td>
                       <td>{center.description}</td>
                       <td>
                         <Button onClick={()=>editCurrentCenter(center)}>Edit</Button> 
                         &nbsp;&nbsp;
                         <Button variant="danger"
                         onClick={()=>deleteCurrentCenter(center)}>Delete</Button>
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

const mapStateToProps =(state)=>{
    return {
      center : state.centerReducer
    }
  }
  
  //step 2
  const mapDispatchToProps =(dispatch)=>{
    return {
      getallCenters : () =>dispatch(getCenter()),
      setSelectedCenter : (selectedCenter)=>dispatch(setSelectedCenter(selectedCenter)),
      resetSelectedCenter : ()=>dispatch(resetSelectedCenter()),
      deleteCenter : (centerId)=>dispatch(deleteCenter(centerId))
    }
  }
  
  //step 3
  const connectCenter = connect(mapStateToProps,mapDispatchToProps)
  
  export default connectCenter(ManageCenters)

