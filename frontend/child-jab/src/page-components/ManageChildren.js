import React,{useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {
     useHistory
} from 'react-router-dom'
import {getChildren, setSelectedChildren, resetSelectedChildren, deleteChildren} from '../_actions'
import {connect} from 'react-redux'


function ManageChildren(props) {
    
    const history = useHistory();
    useEffect(() => {
      let user=sessionStorage.getItem("user")
      let centerId=-1
      if(user==="center"){
      let centerDetails=JSON.parse(sessionStorage.getItem("auth"))
      centerId=centerDetails.id
    }
      
        props.getallChildren(centerId)
        props.resetSelectedChildren()
        
    }, [])
   
    const editCurrentChildren =(selectedChildren)=>{
      console.log(selectedChildren)
      props.setSelectedChildren(selectedChildren)
      history.push(`/new-children`)
    }

    const deleteCurrentChildren = (selectedChildren)=>{
      props.deleteChildren(selectedChildren.id)
     
    }

    const newChildren = ()=>{
      history.push(`/new-children`)
    }

    return (
        <>
         
          
    <div classname="row">
  <div className="col-md-11">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All Childrens</h3>
        <Button variant="success" className="float-right" onClick={()=>newChildren()}>
           New-Children
          </Button>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width: 10}}>ID</th>
              <th>First Name</th>
              <th>Middle Name </th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>City/Village</th>
              <th>Contact Number</th>
              <th>E-Mail</th>
              <th>Parents Profile</th>
              <th>Profile Description</th>
              <th>Parents Full-Name</th>
              <th>Parents UserName</th>
              <th>ID-Proof</th>
              <th>ID Number</th>
              <th>Profession</th>
              <th>Country</th>
              <th>State</th>
              <th>Zip-Code</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
          {props.children.allChildrens && props.children.allChildrens.map(children =>{
                  return <tr key={children.id}>
                       <td>{children.id}</td>
                       <td>{children.firstname}</td>
                       <td>{children.middlename}</td>
                       <td>{children.lastname}</td>
                       <td>{children.age}</td> 
                       <td>{children.address}</td>
                       <td>{children.city_or_village}</td>
                       <td>{children.contact}</td> 
                       <td>{children.email}</td>
                       <td><img src={`${process.env.REACT_APP_SERVER_URL}${children.parents_profile}`} width="100" height="100"></img></td>
                       <td>{children.description}</td>
                       <td>{children.full_name}</td>
                       <td>{children.username}</td>
                       <td>{children.ID_proof}</td>
                       <td>{children.ID_number}</td>
                       <td>{children.profession}</td>
                       <td>{children.country}</td>
                       <td>{children.state}</td>
                       <td>{children.zip_code}</td>
                       <td>
                         <Button onClick={()=>editCurrentChildren(children)}>Edit</Button>
                         &nbsp;&nbsp;
                         <Button onClick={()=>deleteCurrentChildren(children)} variant="danger">Delete</Button>
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
      children : state.childrenReducer
    }
  }
  
  //step 2
  const mapDispatchToProps =(dispatch)=>{
    return {
      getallChildren : (centerId) =>dispatch(getChildren(centerId)),
      setSelectedChildren : (selectedChildren)=> dispatch(setSelectedChildren(selectedChildren)),
      resetSelectedChildren : ()=> dispatch(resetSelectedChildren()),
      deleteChildren : (childrenId)=>dispatch(deleteChildren(childrenId))
    }
  }
  
  //step 3
  const connectChildren = connect(mapStateToProps,mapDispatchToProps)
  
  export default connectChildren(ManageChildren)