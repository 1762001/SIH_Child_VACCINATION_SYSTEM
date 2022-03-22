import {galleryConstants} from '../_constants'

export const createGallery =(gallery)=>{
    
    const requestType=()=>({type : galleryConstants.CREATE_GALLERY_REQUEST})

    const requestSuccessType=(data)=>({
        type : galleryConstants.CREATE_GALLERY_SUCCESS,
        payload : data
    })
    
    const requestFailType=(message)=>({
        type : galleryConstants.CREATE_GALLERY_FAIL,
        error : message
    })

        return (dispatch)=>{
        dispatch(requestType())  //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}gallery`,{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(gallery) 
        }).then (async response =>{
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


export const getGallery = (centerId)=>{

    const requestType=()=>({type : galleryConstants.GET_GALLERY_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : galleryConstants.GET_GALLERY_SUCCESS,
        payload : data
    })
    const requestFailType = (message)=>
    ({
      type : galleryConstants.GET_GALLERY_FAIL,
      error : message
    })

    return (dispatch)=>{
        dispatch(requestType())

    fetch(`${process.env.REACT_APP_SERVER_URL}gallery/${centerId}`,{
        method : 'GET',
        headers : {'Content-Type': 'application/json'}
    }).then(async response =>{
        console.log(response)
        if(response.status == 400){
            const data = await response.json()
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

export const getParentsGallery = ()=>{

    const requestType=()=>({type : galleryConstants.GET_GALLERY_REQUEST})
    const requestSuccessType=(data)=>
    ({
        type : galleryConstants.GET_GALLERY_SUCCESS,
        payload : data
    })
    const requestFailType = (message)=>
    ({
      type : galleryConstants.GET_GALLERY_FAIL,
      error : message
    })

    return (dispatch)=>{
        dispatch(requestType())

    fetch(`${process.env.REACT_APP_SERVER_URL}parents-gallery`,{
        method : 'GET',
        headers : {'Content-Type': 'application/json'}
    }).then(async response =>{
        console.log(response)
        if(response.status == 400){
            const data = await response.json()
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

export const updateGallery = (gallery) =>{

    const requestType= ()=>({type : galleryConstants.UPDATE_GALLERY_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : galleryConstants.UPDATE_GALLERY_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : galleryConstants.UPDATE_GALLERY_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}gallery/${gallery.id}`, {
            method : 'PUT',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify(gallery)
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

export const deleteGallery = (galleryId) =>{

    const requestType= ()=>({type : galleryConstants.DELETE_GALLERY_REQUEST})
    const requestSuccessType = (data)=>
            ({
                type : galleryConstants.DELETE_GALLERY_SUCCESS,
                payload:data
            })
    const requestFailType =(message)=>(
        {
            type : galleryConstants.DELETE_GALLERY_FAIL,
            error : message
        })

    return (dispatch) =>{
        dispatch(requestType()) //reducer

        fetch(`${process.env.REACT_APP_SERVER_URL}gallery/${galleryId}`, {
            method : 'DELETE',
            headers : {'Content-Type':'application/json'}
            //body : JSON.stringify(gallery)
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

export const setSelectedGallery =(selectedGallery)=>{
    return {
        type : galleryConstants.SELECTED_GALLERY,
        selectedGallery
    }
}

export const resetSelectedGallery =()=>{
    return {
        type : galleryConstants.RESET_SELECTED_GALLERY
    }
}
