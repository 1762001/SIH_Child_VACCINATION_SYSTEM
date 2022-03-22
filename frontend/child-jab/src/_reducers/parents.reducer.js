import {parentsConstants} from '../_constants'

const initialParents ={
    isloading : false,
    parents : {},
    error : '',
    allParents : [],
    selectedParents :{}
}

export const parentsReducer=(state=initialParents, action)=>{

    switch(action.type){
        case parentsConstants.CREATE_PARENTS_REQUEST:
            return {
                ...state,
                isloading : true,
                parents : {},
                error : ''
            }

            case parentsConstants.CREATE_PARENTS_SUCCESS:
                return {
                    ...state,
                    isloading:false,
                    parents:action.payload,
                    error:''
                }

            case parentsConstants.CREATE_PARENTS_FAIL:
                return{
                    ...state,
                    isloading:false,
                    parents:{},
                    error:action.error
                }

                case parentsConstants.LOGIN_PARENTS_REQUEST:
                    return {
                        ...state,
                        isloading : true,
                        parents : {},
                        error : ''
                    }
        
                    case parentsConstants.LOGIN_PARENTS_SUCCESS:
                        sessionStorage.setItem("auth",JSON.stringify(action.payload))
                        return {
                            ...state,
                            isloading:false,
                            parents:action.payload,
                            error:''
                        }
        
                    case parentsConstants.LOGIN_PARENTS_FAIL:
                        return{
                            ...state,
                            isloading:false,
                            parents:{},
                            error:action.error
                        }

                        case parentsConstants.REGISTER_PARENTS_REQUEST :
                            return{
                                   ...state,
                                   isloading : true,
                                   parents : {},
                                   error : ''
                          }
                 
                          case parentsConstants.REGISTER_PARENTS_SUCCESS :
                              return {
                                  ...state,
                                  isloading : false,
                                  parents :action.payload ,
                                  error : ''
                              }
                 
                          case parentsConstants.REGISTER_PARENTS_FAIL :
                              return{
                                  ...state,
                                  isloading : false,
                                  parents : {},
                                  error : action.error
                              } 
                              
        
                case parentsConstants.GET_PARENTS_REQUEST:
                    return {
                        ...state,
                        isloading : true,
                        allParents : [],
                        error : ''
                    }
        
                    case parentsConstants.GET_PARENTS_SUCCESS:
                        return {
                            ...state,
                            isloading:false,
                            allParents: action.payload,
                            error:''
                        }
        
                    case parentsConstants.GET_PARENTS_FAIL:
                        return{
                            ...state,
                            isloading:false,
                            allParents:[],
                            error:action.error
                        }
            case parentsConstants.SELECTED_PARENTS :
                return {
                    ...state,
                    selectedParents : action.selectedParents
                } 
            case parentsConstants.RESET_SELECTED_PARENTS:
                return {
                    ...state,
                    selectedParents : {}
                }
            case parentsConstants.UPDATE_PARENTS_REQUEST:
                return {
                    ...state,
                    isloading : true,
                    //selectedParents : {},
                    error : ''
                }
            case parentsConstants.UPDATE_PARENTS_SUCCESS:
                return{
                    ...state,
                    isloading : false,
                    selectedParents : action.payload,
                    error : ''
                }
            case parentsConstants.UPDATE_PARENTS_FAIL:
                return{
                    ...state,
                    isloading :false,
                    //parents : {},
                    error : action.error
                }
            case parentsConstants.DELETE_PARENTS_REQUEST:
                return {
                    ...state,
                    isloading : true,
                    //selectedParents : {},
                    error :''
                }
            case parentsConstants.DELETE_PARENTS_SUCCESS:
                return {
                    ...state,
                    isloading : false,
                    //selectedParents : action.payload,
                    error : ''
                }
            case parentsConstants.DELETE_PARENTS_FAIL:
                return {
                    ...state,
                    isloading : false,
                    //parents : {},
                    error : action.error
                }

            default:
                return state;
    }
}