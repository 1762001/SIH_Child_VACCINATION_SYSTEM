import {centerfacilityConstants} from '../_constants'

export const createCenterFacility =(centerfacility) =>{

    const requestType =()=>({type : centerfacilityConstants.CREATE_CENTERFACILITY_REQUEST})
    const requestSuccessType =(data)=>
    ({
        type : centerfacilityConstants.CREATE_CENTERFACILITY_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=>
    ({
        type : centerfacilityConstants.CREATE_CENTERFACILITY_FAIL,
        error : message   
    })
    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}centerfacility`, {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(centerfacility)
            }).then(async response =>{
                console.log(response)
                if(response.status ==400){
                    const data= await response.json()
                    console.log(data)
                    dispatch(requestFailType(data.sqlmessage))
                }
                else{
                    const data= await response.json()
                    console.log(data)
                    dispatch(requestSuccessType(data))
                }
                

            }).catch(error =>{
                console.log(error)
                dispatch(requestFailType())
            })

        
    } 
}


export const getCenterFacility = (centerId)=>{

    const requestType = ()=>({type : centerfacilityConstants.GET_CENTERFACILITY_REQUEST})
    const requestSuccessType = (data)=>
    ({
        type : centerfacilityConstants.GET_CENTERFACILITY_SUCCESS,
        payload : data
    })
    const requestFailType = (message)=>
    ({
       type : centerfacilityConstants.GET_CENTERFACILITY_FAIL,
       error : message
    })

    return (dispatch)=>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}centerfacility/${centerId}`, {
            method : 'GET',
            headers : {'Content-Type' : 'application/json'}
        }).then(async response =>{
            console.log(response)
            if(response.status == 400){
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

export const updateCenterFacility = (centerfacility)=>{

    const requestType=()=> ({type : centerfacilityConstants.UPDATE_CENTERFACILITY_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : centerfacilityConstants.UPDATE_CENTERFACILITY_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=>
    ({
        type : centerfacilityConstants.UPDATE_CENTERFACILITY_FAIL,
        error : message
    })

    return (dispatch)=>{

        dispatch(requestType())

        fetch(`${process.env.REACT_APP_SERVER_URL}centerfacility/${centerfacility.id}`,{
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(centerfacility)
        }).then(async response=>{
            console.log(response)
            if(response.status==400){
                const data=await response.json()
                console.log(data)
                dispatch(requestFailType(data.sqlmessage))
            }
            else{
                const data =await response.json()
                console.log(data)
                dispatch(requestSuccessType(data))
            }
        }).catch(error =>{
            console.log(error)
            dispatch(requestFailType())
        })
    }
}

export const deleteCenterFacility = (centerfacilityId)=>{

    const requestType=()=>({type : centerfacilityConstants.DELETE_CENTERFACILITY_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : centerfacilityConstants.DELETE_CENTERFACILITY_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=>
    ({
        type : centerfacilityConstants.DELETE_CENTERFACILITY_FAIL,
        error : message
    })

    return(dispatch)=>{

        dispatch(requestType())
        
        fetch(`${process.env.REACT_APP_SERVER_URL}centerfacility/${centerfacilityId}`,{
            method : 'DELETE',
            headers : {'Content-Type' : 'application/json'}
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

export const setSelectedCenterFacility = (selectedCenterFacility)=>{
    return {
        type  : centerfacilityConstants.SELECTED_CENTERFACILITY,
        selectedCenterFacility
    }
}

export const resetSelectedCenterFacility = ()=>{
    return {
        type : centerfacilityConstants.RESET_SELECTED_CENTERFACILITY
    }
}