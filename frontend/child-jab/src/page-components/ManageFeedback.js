import React,{useEffect} from 'react'
import {
    Link,useHistory
} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getFeedback, setSelectedFeedback, resetSelectedFeedback, deleteFeedback} from '../_actions/feedback.action'

function ManageFeedback(props) {
  const history = useHistory();
    
    useEffect(() => {
     let user = sessionStorage.getItem("user")
     let centerId=-1
     if(user==="center"){
       let centerDetails = JSON.parse(sessionStorage.getItem("auth"))
       centerId=centerDetails.id
     }
        props.getallFeedback(centerId)
        props.resetSelectedFeedback()
        
    }, [])

    const editCurrentFeedback = (selectedFeedback)=>{
      console.log(selectedFeedback)
      props.setSelectedFeedback(selectedFeedback)
      history.push(`/new-feedback`)
    }

    const deleteCurrentFeedback = (selectedFeedback)=>{
      props.deleteFeedback(selectedFeedback.id)

    }

    const newFeedback =()=>{
      history.push(`/new-feedback`)
    }

    return (
     <>
     
     
          <div classname="row">
  <div className="col-md-10">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">All Feedbacks</h3>
        {/* <Button variant="success" className="float-right" onClick={()=>newFeedback()}>New-Feedback</Button> */}
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width: 10}}>ID</th>
              <th>Parents Name</th>
              <th>Feedback By Parents</th>
              <th>Express Your Emotions</th>
              <th>Stars</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
          {props.feedback.allFeedbacks && props.feedback.allFeedbacks.map(feedback =>{
                  return <tr key={feedback.id}>
                       <td>{feedback.id}</td>
                       <td>{feedback.full_name}</td>
                       <td>{feedback.feedback}</td>
                       <td>{feedback.ratings}</td>
                       <td>{feedback.Stars}</td>
                       {/* <td>
                         <Button onClick={()=>editCurrentFeedback(feedback)}>Edit</Button>
                         &nbsp;&nbsp;
                         <Button onClick={()=>deleteCurrentFeedback(feedback)} variant="danger">Delete</Button>
                       </td> */}
                                       
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

const mapStateToProps = (state)=>{
    return{
        feedback : state.feedbackReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getallFeedback : (centerId)=> dispatch(getFeedback(centerId)),
        setSelectedFeedback : (selectedFeedback)=> dispatch(setSelectedFeedback(selectedFeedback)),
        resetSelectedFeedback : ()=> dispatch(resetSelectedFeedback()),
        deleteFeedback : (feedbackId) => dispatch(deleteFeedback(feedbackId))
    }
}

const connectFeedback = connect(mapStateToProps,mapDispatchToProps)

export default connectFeedback(ManageFeedback)
