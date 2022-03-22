import {centerConstants} from '../_constants'

const initialCenter = {
    isloading : false,
    center : {},
    searched_centers : [],
    error : '',
    allCenters : [],
    selectedCenter:{}
}

export const centerReducer=(state=initialCenter, action) =>{
     switch(action.type){
         case centerConstants.CREATE_CENTER_REQUEST :
           return{
                  ...state,
                  isloading : true,
                  center : {},
                  error : ''
         }

         case centerConstants.CREATE_CENTER_SUCCESS :
             return {
                 ...state,
                 isloading : false,
                 center :action.payload ,
                 error : ''
             }

         case centerConstants.CREATE_CENTER_FAIL :
             return{
                 ...state,
                 isloading : false,
                 center : {},
                 error : action.error
             } 

             case centerConstants.REGISTER_CENTER_REQUEST :
           return{
                  ...state,
                  isloading : true,
                  center : {},
                  error : ''
         }

         case centerConstants.REGISTER_CENTER_SUCCESS :
             return {
                 ...state,
                 isloading : false,
                 center :action.payload ,
                 error : ''
             }

         case centerConstants.REGISTER_CENTER_FAIL :
             return{
                 ...state,
                 isloading : false,
                 center : {},
                 error : action.error
             } 
             
             case centerConstants.LOGIN_CENTER_REQUEST :
                return{
                       ...state,
                       isloading : true,
                       center : {},
                       error : ''
              }
     
              case centerConstants.LOGIN_CENTER_SUCCESS :
                sessionStorage.setItem("auth",JSON.stringify(action.payload))
                  return {
                      ...state,
                      isloading : false,
                      center :action.payload ,
                      error : ''
                  }
     
              case centerConstants.LOGIN_CENTER_FAIL :
                  return{
                      ...state,
                      isloading : false,
                      center : {},
                      error : action.error
                  }  
              
             case centerConstants.GET_CENTER_REQUEST :
              return{
                  ...state,
                  isloading : true,
                  allCenters : [],
                  error : ''
         }

         case centerConstants.GET_CENTER_SUCCESS :
             return {
                 ...state,
                 isloading : false,
                 allCenters :action.payload ,
                 error : ''
             }

         case centerConstants.GET_CENTER_FAIL :
             return{
                 ...state,
                 isloading : false,
                 allCenters : [],
                 error : action.error
             }  
        case centerConstants.SELECTED_CENTER :
                return{
                    ...state,
                    selectedCenter:action.selectedCenter
                }  
        case centerConstants.RESET_SELECTED_CENTER :
                    return{
                        ...state,
                        selectedCenter:{}
                    }  
    
        case centerConstants.UPDATE_CENTER_REQUEST :
                return{
                        ...state,
                        isloading : true,
                        //selectedCenter : {},
                        error : ''
                }
        
        case centerConstants.UPDATE_CENTER_SUCCESS :
                    return {
                        ...state,
                        isloading : false,
                        selectedCenter :action.payload ,
                        error : ''
                    }
        
        case centerConstants.UPDATE_CENTER_FAIL :
                    return{
                        ...state,
                        isloading : false,
                        //center : {},
                        error : action.error
                    } 
        case centerConstants.DELETE_CENTER_REQUEST :
                        return{
                                ...state,
                                isloading : true,
                                error : ''
                        }
                
        case centerConstants.DELETE_CENTER_SUCCESS :
                            return {
                                ...state,
                                isloading : false,
                                //selectedCenter :action.payload ,
                                error : ''
                            }
                
        case centerConstants.DELETE_CENTER_FAIL :
                            return{
                                ...state,
                                isloading : false,
                                //center : {},
                                error : action.error
                            }
         case centerConstants.SEARCH_CENTER_REQUEST :
                  return{
                             ...state,
                               isloading : true,
                               searched_centers : [],
                               error : ''
                              }
                     
          case centerConstants.SEARCH_CENTER_SUCCESS :
                return {
                        ...state,
                       isloading : false,
                       searched_centers :action.payload ,
                        error : ''
                    }
                     
        case centerConstants.SEARCH_CENTER_FAIL :
                   return{
                           ...state,
                         isloading : false,
                         searched_centers : [],
                        error : action.error
                         } 
                     

        default :
        return state;
     }
}