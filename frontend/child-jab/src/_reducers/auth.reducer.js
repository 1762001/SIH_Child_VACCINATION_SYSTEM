import {authConstants} from '../_constants'

const initialAuth = {
    user : ""
}

export const authReducer = (state=initialAuth, action)=>{
      switch(action.type){
          case authConstants.CREATE_AUTH_REQUEST:
              return {
                  user : "user"
              }
        case authConstants.LOGOUT_REQUEST :
             
            return{
                user : null
            }
        default :
        return state;
      }
}