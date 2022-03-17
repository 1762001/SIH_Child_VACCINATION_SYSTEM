import {authConstants} from '../_constants'

export const createAuth = ()=>{
    return {
        type : authConstants.CREATE_AUTH_REQUEST
    }
}

export const logoutAuth =()=>{
    return {
        type : authConstants.LOGOUT_REQUEST
    }
}