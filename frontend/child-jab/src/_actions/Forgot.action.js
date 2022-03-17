import axios from 'axios'
import {ForgotConstants} from '../_constants/forgot.constants'

//post request
export const CreateForgot=(Data)=>{
    const createforgotrequest=()=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_REQUEST
        }
    }
    const createforgotsuccess=(data)=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_SUCCESS,
            payload:data
        }
    }
    const createforgotfail=(error)=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(createforgotrequest())
        try{   
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}parents-forgot`,Data) 
            console.log(response)
            if(response.status===200){
                dispatch(createforgotsuccess(response.data))
            }else{
                dispatch(createforgotfail('Email Does Not Exit...'))
            }
        }catch(error){
            dispatch(createforgotfail('Email Does Not Exit...'))
        }
    }
}

//put request
export const UpdateForgot=(Data)=>{
    const updateforgotrequest=()=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_REQUEST
        }
    }
    const updateforgotsuccess=(data)=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_SUCCESS,
            payload:data
        }
    }
    const updateforgotfail=(error)=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(updateforgotrequest())
        console.log(Data.password,Data.email)
        const email=Data.email
        try{   
            const response=await axios.put(`${process.env.REACT_APP_SERVER_URL}parents-forgot/${email}`,Data) 
            console.log(response)
            if(response.status===200){
                dispatch(updateforgotsuccess(response.data))
            }else{
                dispatch(updateforgotfail('Sorry We Failed to Update Password!!! Try Again...'))
            }
        }catch(error){
            dispatch(updateforgotfail('Sorry We Failed to Update Password!!! Try Again...'))
        }
    }
}

export const CenterCreateForgot=(Data)=>{
    const createforgotrequest=()=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_REQUEST
        }
    }
    const createforgotsuccess=(data)=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_SUCCESS,
            payload:data
        }
    }
    const createforgotfail=(error)=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(createforgotrequest())
        try{   
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}center-forgot`,Data) 
            console.log(response)
            if(response.status===200){
                dispatch(createforgotsuccess(response.data))
            }else{
                dispatch(createforgotfail('Email Does Not Exit...'))
            }
        }catch(error){
            dispatch(createforgotfail('Email Does Not Exit...'))
        }
    }
}

export const CenterUpdateForgot=(Data)=>{
    const updateforgotrequest=()=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_REQUEST
        }
    }
    const updateforgotsuccess=(data)=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_SUCCESS,
            payload:data
        }
    }
    const updateforgotfail=(error)=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(updateforgotrequest())
        console.log(Data.password,Data.email)
        const email=Data.email
        try{   
            const response=await axios.put(`${process.env.REACT_APP_SERVER_URL}center-forgot/${email}`,Data) 
            console.log(response)
            if(response.status===200){
                dispatch(updateforgotsuccess(response.data))
            }else{
                dispatch(updateforgotfail('Sorry We Failed to Update Password!!! Try Again...'))
            }
        }catch(error){
            dispatch(updateforgotfail('Sorry We Failed to Update Password!!! Try Again...'))
        }
    }
}

export const AdminCreateForgot=(Data)=>{
    const createforgotrequest=()=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_REQUEST
        }
    }
    const createforgotsuccess=(data)=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_SUCCESS,
            payload:data
        }
    }
    const createforgotfail=(error)=>{
        return{
            type:ForgotConstants.CREATE_FORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(createforgotrequest())
        try{   
            const response=await axios.post(`${process.env.REACT_APP_SERVER_URL}admin-forgot`,Data) 
            console.log(response)
            if(response.status===200){
                dispatch(createforgotsuccess(response.data))
            }else{
                dispatch(createforgotfail('Email Does Not Exit...'))
            }
        }catch(error){
            dispatch(createforgotfail('Email Does Not Exit...'))
        }
    }
}

export const AdminUpdateForgot=(Data)=>{
    const updateforgotrequest=()=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_REQUEST
        }
    }
    const updateforgotsuccess=(data)=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_SUCCESS,
            payload:data
        }
    }
    const updateforgotfail=(error)=>{
        return{
            type:ForgotConstants.UPDATE_FORGOT_FAIL,
            error
        }
    }
    return async(dispatch)=>{ 
        dispatch(updateforgotrequest())
        console.log(Data.password,Data.email)
        const email=Data.email
        try{   
            const response=await axios.put(`admin-forgot/${email}`,Data) 
            console.log(response)
            if(response.status===200){
                dispatch(updateforgotsuccess(response.data))
            }else{
                dispatch(updateforgotfail('Sorry We Failed to Update Password!!! Try Again...'))
            }
        }catch(error){
            dispatch(updateforgotfail('Sorry We Failed to Update Password!!! Try Again...'))
        }
    }
}