import {childrenConstants} from '../_constants'

export const createChildren =(children) =>{

    const requestType =()=>({type : childrenConstants.CREATE_CHILDREN_REQUEST})
    const requestSuccessType =(data)=>
    ({
        type : childrenConstants.CREATE_CHILDREN_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=>
    ({
        type : childrenConstants.CREATE_CHILDREN_FAIL,
        error : message   
    })
    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}children`, {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(children)
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


export const getChildren =(center_id) =>{

    const requestType =()=>({type : childrenConstants.GET_CHILDREN_REQUEST})
    const requestSuccessType =(data)=>
    ({
        type : childrenConstants.GET_CHILDREN_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=>
    ({
        type : childrenConstants.GET_CHILDREN_FAIL,
        error : message   
    })
    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}children/${center_id}`, {
            method : 'GET',
            headers : {'Content-Type':'application/json'}
            
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

export const updateChildren=(children)=>{

    const requestType=()=>({type : childrenConstants.UPDATE_CHILDREN_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : childrenConstants.UPDATE_CHILDREN_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=> 
    ({
        type: childrenConstants.UPDATE_CHILDREN_FAIL,
        error : message
    })

    return (dispatch)=>{
        dispatch(requestType())

        fetch(`${process.env.REACT_APP_SERVER_URL}children/${children.id}`,{
            method : 'PUT',
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify(children)
        }).then(async response=>{
            console.log(response)
            if(response.status==400){
                const data= await response.json()
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

export const deleteChildren = (childrenId)=>{

    const requestType=()=>({type : childrenConstants.DELETE_CHILDREN_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : childrenConstants.DELETE_CHILDREN_SUCCESS,
        payload : data
    })
    const requestFailType=(message)=>
    ({
        type : childrenConstants.DELETE_CHILDREN_FAIL,
        error : message
    })

    return(dispatch)=>{

        dispatch(requestType())

        fetch(`${process.env.REACT_APP_SERVER_URL}children/${childrenId}`,{
            method : 'DELETE',
            headers : {'Content-Type':'application/json'}
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

export const setSelectedChildren = (selectedChildren)=>{
    return {
        type : childrenConstants.SELECTED_CHILDREN,
        selectedChildren
    }
}

export const resetSelectedChildren = ()=>{
    return {
        type : childrenConstants.RESET_SELECTED_CHILDREN,

    }
}