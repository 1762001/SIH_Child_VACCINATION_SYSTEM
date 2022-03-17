import {childrenConstants} from '../_constants/children.constants'

const initialChildren = {
    isloading : false,
    children : {},
    error : '',
    allChildrens: [],
    selectedChildren : {}
}

export const childrenReducer=(state=initialChildren, action) =>{
     switch(action.type){
         case childrenConstants.CREATE_CHILDREN_REQUEST :
           return{
                  ...state,
                  isloading : true,
                  children : {},
                  error : ''
         }

         case childrenConstants.CREATE_CHILDREN_SUCCESS :
             return {
                 ...state,
                 isloading : false,
                 children : action.payload,
                 error : ''
             }

         case childrenConstants.CREATE_CHILDREN_FAIL :
             return{
                 ...state,
                 isloading : false,
                 children : {},
                 error :action.error
             }    

             case childrenConstants.GET_CHILDREN_REQUEST :
                return{
                       ...state,
                       isloading : true,
                       allChildrens : [],
                       error : ''
              }
     
              case childrenConstants.GET_CHILDREN_SUCCESS :
                  return {
                      ...state,
                      isloading : false,
                      allChildrens : action.payload,
                      error : ''
                  }
     
              case childrenConstants.GET_CHILDREN_FAIL :
                  return{
                      ...state,
                      isloading : false,
                      allChildrens : [],
                      error :action.error
                  }    
           case childrenConstants.SELECTED_CHILDREN :
               return {
                   ...state,
                   selectedChildren : action.selectedChildren
               }   

            case childrenConstants.RESET_SELECTED_CHILDREN :
                return {
                    ...state,
                    selectedChildren : {}
                }
            case childrenConstants.UPDATE_CHILDREN_REQUEST :
                return {
                    ...state,
                    isloading :true,
                    error : ''
                }
            case childrenConstants.UPDATE_CHILDREN_SUCCESS:
                return {
                    ...state,
                    isloading : false,
                    selectedChildren : action.payload,
                    error : ''
                }
            case childrenConstants.UPDATE_CHILDREN_FAIL:
                return {
                    ...state,
                    isloading : false,
                    error : action.error
                }
            case childrenConstants.DELETE_CHILDREN_REQUEST:
                return{
                    ...state,
                    isloading : true,
                    error : ''
                }
            case childrenConstants.DELETE_CHILDREN_SUCCESS:
                return{
                    ...state,
                    isloading : false,
                    //selectedChildren : action.payload,
                    error : ''
                }
            case childrenConstants.DELETE_CHILDREN_FAIL:
                return {
                    ...state,
                    isloading : false,
                    error : action.error
                }
             default :
             return state;
     }
}