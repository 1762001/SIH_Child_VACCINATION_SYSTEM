import {feedbackConstants} from '../_constants'

export const createFeedback = (feedback) =>{
   
        const requestType=()=>({type : feedbackConstants.CREATE_FEEDBACK_REQUEST})

        const requestSuccessType = (data)=>({
            type : feedbackConstants.CREATE_FEEDBACK_SUCCESS,
            payload : data
        })

        const requestFailType =(message) =>({
            type : feedbackConstants.CREATE_FEEDBACK_FAIL,
            error : message

        })

        return (dispatch) =>{
            dispatch(requestType()) //reducer
    
            fetch(`${process.env.REACT_APP_SERVER_URL}feedback`, {
                method : 'POST',
                headers : {'Content-Type':'application/json'},
                body : JSON.stringify(feedback)
             }).then(async response =>{
                 console.log(response)
                 if(response.status==400){
                     const data=await response.json()
                     console.log(data)
                     dispatch(requestFailType(data.sqlmessage))
                 }
                 else {
                     const data=await response.json()
                     console.log(data)
                     dispatch(requestSuccessType(data))
                 }
             }).catch(error=>{
                 console.log(error)
                 dispatch(requestFailType())
             })

    }
}


export const getFeedback = (centerId) =>{
   
    const requestType=()=>({type : feedbackConstants.GET_FEEDBACK_REQUEST})

    const requestSuccessType = (data)=>({
        type : feedbackConstants.GET_FEEDBACK_SUCCESS,
        payload : data
    })

    const requestFailType =(message) =>({
        type : feedbackConstants.GET_FEEDBACK_FAIL,
        error : message

    })

    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}feedback/${centerId}`, {
            method : 'GET',
            headers : {'Content-Type':'application/json'}
            
         }).then(async response =>{
             console.log(response)
             if(response.status==400){
                 const data=await response.json()
                 console.log(data)
                 dispatch(requestFailType(data.sqlmessage))
             }
             else {
                 const data=await response.json()
                 console.log(data)
                 dispatch(requestSuccessType(data))
             }
         }).catch(error=>{
             console.log(error)
             dispatch(requestFailType())
         })

}
}

export const updateFeedback = (feedback)=>{
  
     const requestType=()=>({type : feedbackConstants.UPDATE_FEEDBACK_REQUEST })
     const requestSuccessType=(data)=>
     ({
         type : feedbackConstants.UPDATE_FEEDBACK_SUCCESS,
         payload : data
    })
    const requestFailType = (message)=> 
    ({
        type : feedbackConstants.UPDATE_FEEDBACK_FAIL,
        error : message
    })

    return (dispatch)=>{

        dispatch(requestType())

        fetch(`${process.env.REACT_APP_SERVER_URL}feedback/${feedback.id}`,{
            method : 'PUT',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(feedback)
        }).then(async response=>{
            console.log(response)
            if(response.status==400){
                const data=await response.json()
                console.log(data)
                dispatch(requestFailType(data.sqlmessage))
            }
            else{
                const data=await response.json()
                console.log(data)
                dispatch(requestSuccessType(data))
            }
        }).catch(error =>{
            console.log(error)
            dispatch(requestFailType())
        })
    }
}

export const deleteFeedback = (feedbackId)=>{

    const requestType=()=>({type : feedbackConstants.DELETE_FEEDBACK_REQUEST})
    const requestSuccessType=(data)=> ({
        type : feedbackConstants.DELETE_FEEDBACK_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=> ({
        type: feedbackConstants.DELETE_FEEDBACK_FAIL,
        error : message
    })

    return (dispatch)=>{

        dispatch(requestType())

        fetch(`${process.env.REACT_APP_SERVER_URL}feedback/${feedbackId}`,{
            method : 'DELETE',
            headers : {'Content-Type' : 'application/json'}
        }).then(async response=>{
            console.log(response)
            if(response.status==400){
                const data=await response.json()
                console.log(data)
                dispatch(requestFailType(data.sqlmessage))
            }else{
                const data = await response.json()
                console.log(data)
                dispatch(requestSuccessType(data))
            }
        }).catch(error =>{
            console.log(error)
            dispatch(requestFailType())
        })
    }
}

export const setSelectedFeedback = (selectedFeedback)=>{
    return {
        type : feedbackConstants.SELECTED_FEEDBACK,
        selectedFeedback
    }
}

export const resetSelectedFeedback = ()=>{
    return {
        type : feedbackConstants.RESET_SELECTED_FEEDBACK
    }
}

