import {adminConstants} from '../_constants'

export const createAdmin = (admin)=>{

    const requestType=()=>({type : adminConstants.LOGIN_ADMIN_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : adminConstants.LOGIN_ADMIN_SUCCESS,
        payload : data
    })
    const requestFailType = (message)=>
    ({
        type : adminConstants.LOGIN_ADMIN_FAIL,
        error : message
    })

    return(dispatch)=>{

        dispatch(requestType())
         console.log(process.env.REACT_APP_SERVER_URL)
        fetch(`${process.env.REACT_APP_SERVER_URL}adminlogin`,{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(admin)
        }).then(async response=>{
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

export const registerAdmin = (admin)=>{
 
     const requestType=()=>({type : adminConstants.REGISTER_ADMIN_REQUEST})

     const requestSuccessType =(data)=>({
         type : adminConstants.REGISTER_ADMIN_SUCCESS,
         payload : data
     })

     const requestFailType = (message)=>({
          type : adminConstants.REGISTER_ADMIN_FAIL,
          error : message
     })

     return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}admin-register`, {
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(admin)
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

