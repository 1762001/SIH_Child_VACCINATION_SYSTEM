import {centerConstants} from '../_constants'

export const createCenter =(center) =>{

    const requestType= ()=>({type : centerConstants.CREATE_CENTER_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : centerConstants.CREATE_CENTER_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : centerConstants.CREATE_CENTER_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}center`, {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(center)
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
             
            })            
            .catch(error =>{
                console.log(error)
                dispatch(requestFailType())
            })           
        
    } 

   
}

export const loginCenter =(center) =>{

    const requestType= ()=>({type : centerConstants.LOGIN_CENTER_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : centerConstants.LOGIN_CENTER_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : centerConstants.LOGIN_CENTER_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}centerlogin`, {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(center)
            }).then(async response =>{
                console.log(response)
                if (response.status==400) {
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


export const getCenter =() =>{

    const requestType= ()=>({type : centerConstants.GET_CENTER_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : centerConstants.GET_CENTER_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : centerConstants.GET_CENTER_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}center`, {
            method : 'GET',
            headers : {'Content-Type':'application/json'}
            
            }).then(async response =>{
                console.log(response)
                if (response.status==400) {
                    const data=await response.json()
                    console.log(data)
                    dispatch(requestFailType(data.sqlMessage))    
                }
                else{
                    const data=await response.json()
                    //console.log(data)
                    dispatch(requestSuccessType(data))
                }      
                
                
             
            })            
            .catch(error =>{
                console.log(error)
                dispatch(requestFailType())
            })           
        
    } 

   
}


export const updateCenter = (center) =>{

    const requestType= ()=>({type : centerConstants.UPDATE_CENTER_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : centerConstants.UPDATE_CENTER_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : centerConstants.UPDATE_CENTER_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}center/${center.id}`, {
            method : 'PUT',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(center)
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
            })            
            .catch(error =>{
                console.log(error)
                dispatch(requestFailType())
            })           
    } 
}


export const deleteCenter = (centerId) =>{

    const requestType= ()=>({type : centerConstants.DELETE_CENTER_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : centerConstants.DELETE_CENTER_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : centerConstants.DELETE_CENTER_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}center/${centerId}`, {
            method : 'DELETE',
            headers : {'Content-Type':'application/json'}
            //body : JSON.stringify(center)
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
            })            
            .catch(error =>{
                console.log(error)
                dispatch(requestFailType())
            })           
    } 
}

export const setSelectedCenter =(selectedCenter)=>{
    return {
        type : centerConstants.SELECTED_CENTER,
        selectedCenter
    }
}

export const resetSelectedCenter =()=>{
    return {
        type : centerConstants.RESET_SELECTED_CENTER
    }
}

export const registerCenter = (center)=>{
 
    const requestType=()=>({type : centerConstants.REGISTER_CENTER_REQUEST})

    const requestSuccessType =(data)=>({
        type : centerConstants.REGISTER_CENTER_SUCCESS,
        payload : data
    })

    const requestFailType = (message)=>({
         type : centerConstants.REGISTER_CENTER_FAIL,
         error : message
    })

    return (dispatch) =>{
       dispatch(requestType()) //reducer

       fetch(`${process.env.REACT_APP_SERVER_URL}center-register`, {
           method : 'POST',
           headers : {'Content-Type':'application/json'},
           body : JSON.stringify(center)
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

export const searchCenter =(center) =>{

    const requestType= ()=>({type : centerConstants.SEARCH_CENTER_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : centerConstants.SEARCH_CENTER_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : centerConstants.SEARCH_CENTER_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch(requestType()) //reducer
        console.log(center)
        fetch(`${process.env.REACT_APP_SERVER_URL}search-center`, {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(center)
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
             
            })            
            .catch(error =>{
                console.log(error)
                dispatch(requestFailType())
            })           
        
    } 

   
}

