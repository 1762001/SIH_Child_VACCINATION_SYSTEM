import {adminConstants} from '../_constants'

const initialAdmin ={
    isloading : false,
    admin : {},
    error : ''
}

export const adminReducer = (state=initialAdmin, action)=>{
      switch(action.type){
          case adminConstants.LOGIN_ADMIN_REQUEST :
              return{
                  ...state,
                  isloading :true,
                  admin : {},
                  error : ''
              }
          case adminConstants.LOGIN_ADMIN_SUCCESS :
              sessionStorage.setItem("auth",JSON.stringify(action.payload))
              return{
                  ...state,
                  isloading :false,
                  admin : action.payload,
                  error : ''
              }
         case adminConstants.LOGIN_ADMIN_FAIL :
             return {
                 ...state,
                 isloading : false,
                 admin : {},
                 error : action.error
             } 
         case adminConstants.REGISTER_ADMIN_REQUEST :
             return {
                 ...state,
                 isloading : true,
                  admin : {},
                  error : ''
             }
         case adminConstants.REGISTER_ADMIN_SUCCESS :
             return {
                 ...state,
                 isloading : false,
                  admin : action.payload,
                  error : ''
             }
         case adminConstants.REGISTER_ADMIN_FAIL :
             return {
                 ...state,
                 isloading : false,
                  admin : {},
                  error : action.error
             }
         default :
         return state;
      }
}