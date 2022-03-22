import {parentsConstants} from '../_constants'

export const createParents=(parents) =>{

    const requestType= ()=>({type : parentsConstants.CREATE_PARENTS_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : parentsConstants.CREATE_PARENTS_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : parentsConstants.CREATE_PARENTS_FAIL,
            error : message
        })

    return (dispatch) =>{
        console.log(`actions  - ${parents}`)
        dispatch (requestType()) // reducer
        fetch(`${process.env.REACT_APP_SERVER_URL}parents`, {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(parents)
            }).then(async response =>{
                console.log(response)
                if(response.status==400){
                    const data=await response.json()
                    console.log(data)
                    dispatch(requestFailType(data.sqlMessage))
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

export const loginParents=(parents) =>{

    const requestType= ()=>({type : parentsConstants.LOGIN_PARENTS_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : parentsConstants.LOGIN_PARENTS_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : parentsConstants.LOGIN_PARENTS_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch (requestType()) // reducer
        fetch(`${process.env.REACT_APP_SERVER_URL}parentslogin`, {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(parents)
            }).then(async response =>{
                console.log(response)
                if(response.status==400){
                    const data=await response.json()
                    console.log(data)
                    dispatch(requestFailType(data.msg))
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


export const getParents=() =>{

    const requestType= ()=>({type : parentsConstants.GET_PARENTS_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : parentsConstants.GET_PARENTS_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : parentsConstants.GET_PARENTS_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch (requestType()) // reducer
        fetch(`${process.env.REACT_APP_SERVER_URL}parents`, {
            method : 'GET',
            headers : {'Content-Type':'application/json'}
            
            }).then(async response =>{
                console.log(response)
                if(response.status==400){
                    const data=await response.json()
                    console.log(data)
                    dispatch(requestFailType(data.sqlMessage))
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

export const updateParents =(parents)=>{
     
    const requestType =()=>({type : parentsConstants.UPDATE_PARENTS_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : parentsConstants.UPDATE_PARENTS_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=>
    ({
        type : parentsConstants.UPDATE_PARENTS_FAIL,
        error : message
    })

    return (dispatch)=>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}parents/${parents.id}`, {
            method : 'PUT',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(parents)

       }).then (async response=>{
           console.log(response)
           if(response.status == 400){
               const data= await response.json()
               console.log(data)
               dispatch(requestFailType(data.sqlMessage))
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

export const deleteParents = (parentsId)=>{

    const requestType=()=>({type : parentsConstants.DELETE_PARENTS_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : parentsConstants.DELETE_PARENTS_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=>
    ({
        type : parentsConstants.DELETE_PARENTS_FAIL,
        error : message
    })

    return (dispatch)=>{
         dispatch(requestType()) //reducer

         fetch(`${process.env.REACT_APP_SERVER_URL}parents/${parentsId}`,{
             method: 'DELETE',
             headers : {'Content-Type' : 'application/json'}
         }).then(async response=>{
             console.log(response)
             if(response.status==400){
                 const data=await response.json()
                 console.log(data)
                 dispatch(requestFailType(data.sqlMessage))
              
             }
             else{
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

export const setSelectedParents =(selectedParents)=>{
    return {
        type : parentsConstants.SELECTED_PARENTS,
        selectedParents
    }
}

export const resetSelectedParents = ()=>{
    return {
        type : parentsConstants.RESET_SELECTED_PARENTS
    }
}

export const registerParents = (parents)=>{
 
    const requestType=()=>({type : parentsConstants.REGISTER_PARENTS_REQUEST})

    const requestSuccessType =(data)=>({
        type : parentsConstants.REGISTER_PARENTS_SUCCESS,
        payload : data
    })

    const requestFailType = (message)=>({
         type : parentsConstants.REGISTER_PARENTS_FAIL,
         error : message
    })

    return (dispatch) =>{
       dispatch(requestType()) //reducer

       fetch(`${process.env.REACT_APP_SERVER_URL}host-register`, {
           method : 'POST',
           headers : {'Content-Type':'application/json'},
           body : JSON.stringify(parents)
           }).then(async response =>{
               console.log(response)
               if (response.status==400) {
                   const data=await response.json()
                   console.log(data)
                   dispatch(requestFailType(data.sqlMessage))    
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

