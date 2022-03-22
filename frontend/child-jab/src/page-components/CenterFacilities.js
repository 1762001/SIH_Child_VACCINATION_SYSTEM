import { Link , useHistory} from 'react-router-dom'
import React, {useEffect} from 'react'
import { centerConstants } from '../_constants'
import {connect} from 'react-redux'
import {getCenterFacility, setSelectedCenterFacility, resetSelectedCenterFacility, deleteCenterFacility} from '../_actions'
import {Button} from 'react-bootstrap'


function CenterFacilities(props) {
   // console.log(props.centerfacility.allCenterFacilities)
   
   const history = useHistory();

   useEffect(()=>{
     let user = sessionStorage.getItem("user")
     let centerId=-1
     if(user==="center"){
       let centerDetails = JSON.parse(sessionStorage.getItem("auth"))
       centerId=centerDetails.id
     }
        props.getallCenterFacilities(centerId)
        props.resetSelectedCenterFacility()
    }, [])

    const editCurrentCenterFacility = (selectedCenterFacility)=>{
      console.log(selectedCenterFacility)
      props.setSelectedCenterFacility(selectedCenterFacility)
      history.push(`/new-centerfacility`)
    }

    const deleteCurrentCenterFacility = (selectedCenterFacility)=>{
      props.deleteCenterFacility(selectedCenterFacility.id)
    }

    const newCenterFacility = ()=>{
      history.push(`/new-centerfacility`)
    }
    return (
         <>
        
         
         <div classname="row">
  <div className="col-md-10">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All Center-Facilities</h3>
        <Button className="float-right" variant="success" onClick={()=>newCenterFacility()}>New-CenterFacility</Button>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width: 10}}>ID</th>
              <th>Center</th>
              <th>Facilities</th>
              <th>Description</th> 
              <th>Actions</th>             
            </tr>
          </thead>
          <tbody>
          {props.centerfacility.allCenterFacilities && props.centerfacility.allCenterFacilities.map(centerfacility =>{
                  return <tr key={centerfacility.id}>
                       <td>{centerfacility.id}</td>
                       <td>{centerfacility.name}</td>
                       <td>{centerfacility.facility}</td>
                       <td>{centerfacility.description}</td>
                       <td>
                         <Button onClick={()=>editCurrentCenterFacility(centerfacility)}>Edit</Button>
                         &nbsp;&nbsp;
                         <Button variant="danger" onClick={()=>deleteCurrentCenterFacility(centerfacility)}>Delete</Button>
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
const mapStateToProps = (state)=>{
    return {
        centerfacility : state.centerfacilityReducer
    }
}
//step 2
const mapDispatchToProps = (dispatch)=>{
    return {
        getallCenterFacilities : (centerId)=> dispatch(getCenterFacility(centerId)),
        setSelectedCenterFacility : (selectedCenterFacility)=> dispatch(setSelectedCenterFacility(selectedCenterFacility)),
        resetSelectedCenterFacility : ()=> dispatch(resetSelectedCenterFacility()),
        deleteCenterFacility : (centerfacilityId)=> dispatch(deleteCenterFacility(centerfacilityId))
    }
}
//step 3
const connectCenterFacility = connect(mapStateToProps,mapDispatchToProps)

export default connectCenterFacility(CenterFacilities)