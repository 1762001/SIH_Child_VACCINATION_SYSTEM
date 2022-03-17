import React, {useEffect} from 'react'
import {
  Link, useHistory
} from 'react-router-dom'
import { ParentsData } from '../Data/ParentsData'
import {getParents, setSelectedParents, resetSelectedParents, deleteParents} from '../_actions'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

function ManageParents(props) {
  //console.log(props.parents.allParents)
  const history = useHistory();
  
    useEffect(() => {
      props.getallParents()
      props.resetSelectedParents()

    }, [])

  const editCurrentParents=(selectedParents)=>{
    console.log(selectedParents)
    props.setSelectedParents(selectedParents)
    history.push(`/new-parents`);
  }

  const deleteCurrentParents = (selectedParents)=>{
    console.log(selectedParents)
    props.deleteParents(selectedParents.id)
  }

  const newParents =()=>{
    history.push(`/new-parents`)
  }

   return (
     <>
     
      
      <div classname="row">
  <div className="col-md-11">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All Parents</h3>
        <Button variant="success" className="float-right"
      onClick ={()=> newParents()}>New-Parents</Button>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width: 10}}>ID</th>
              <th>Center ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>ID Proof</th>
              <th>ID number</th>
              <th>Address</th>
              <th>Country</th>
              <th>State</th>
              <th>City/Village</th>
              <th>Zip Code</th>
              <th>Profession</th>
              <th>Actions</th>
              
              
            </tr>
          </thead>
          <tbody>
          {props.parents.allParents && props.parents.allParents.map(parents =>{
                  return <tr key={parents.id}>
                       <td>{parents.id}</td>
                       <td>{parents.center_id}</td>
                       <td>{parents.firstname}</td>
                       <td>{parents.lastname}</td>
                       <td>{parents.email}</td> 
                       <td>{parents.contact}</td>
                       <td>{parents.ID_proof}</td>
                       <td>{parents.ID_number}</td>
                       <td>{parents.address}</td>
                       <td>{parents.country}</td>
                       <td>{parents.state}</td>
                       <td>{parents.city_or_village}</td>
                       <td>{parents.zip_code}</td>
                       <td>{parents.profession}</td>
                       <td>
                         <Button onClick={()=>editCurrentParents(parents)}>Edit</Button>
                         &nbsp; &nbsp;
                         <Button variant="danger" onClick={()=>deleteCurrentParents(parents)}>Delete</Button>
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
<table>

              </table>  

        </>
    )
}

const mapStateToProps =(state)=>{
  return {
    parents : state.parentsReducer
  }
}

//step 2
const mapDispatchToProps =(dispatch)=>{
  return {
    getallParents : () =>dispatch(getParents()),
    setSelectedParents : (selectedParents)=> dispatch(setSelectedParents(selectedParents)),
    resetSelectedParents : ()=> dispatch(resetSelectedParents()),
    deleteParents : (parentsId)=> dispatch(deleteParents(parentsId))
  }
}

//step 3
const connectParents = connect(mapStateToProps,mapDispatchToProps)

export default connectParents(ManageParents)
