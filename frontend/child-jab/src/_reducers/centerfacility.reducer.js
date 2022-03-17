import {centerfacilityConstants} from '../_constants/centerfacility.constants'

const initialCenterFacility ={
    isloading : false,
    centerfacility : {},
    error : '',
    allCenterFacilities : [],
    selectedCenterFacility : {}
}

export const centerfacilityReducer=(state=initialCenterFacility, action)=>{

    switch(action.type){
        case centerfacilityConstants.CREATE_CENTERFACILITY_REQUEST:
            return {
                ...state,
                isloading : true,
                centerfacility : {},
                error : ''
            }

            case centerfacilityConstants.CREATE_CENTERFACILITY_SUCCESS:
                return {
                    ...state,
                    isloading:false,
                    centerfacility :action.payload,
                    error:''
                }

            case centerfacilityConstants.CREATE_CENTERFACILITY_FAIL:
                return{
                    ...state,
                    isloading:false,
                    centerfacility :{},
                    error:action.error
                }
            case centerfacilityConstants.GET_CENTERFACILITY_REQUEST:
                return{
                    ...state,
                    isloading : true,
                    allCenterFacilities : [],
                    error : ''
                }
            case centerfacilityConstants.GET_CENTERFACILITY_SUCCESS:
                return{
                    ...state,
                    isloading : false,
                    allCenterFacilities : action.payload,
                    error : ''
                }
            case centerfacilityConstants.GET_CENTERFACILITY_FAIL:
                return {
                    ...state,
                    isloading : false,
                    allCenterFacilities : [],
                    error : action.error
                }

             case centerfacilityConstants.SELECTED_CENTERFACILITY:
                 return {
                     ...state,
                     selectedCenterFacility : action.selectedCenterFacility
                 } 
            case centerfacilityConstants.RESET_SELECTED_CENTERFACILITY:
                return{
                    ...state,
                    selectedCenterFacility : {}
                }
            case centerfacilityConstants.UPDATE_CENTERFACILITY_REQUEST:
                return {
                    ...state,
                    isloading : true,
                    error : ''
                }

            case centerfacilityConstants.UPDATE_CENTERFACILITY_SUCCESS:
                return {
                    ...state,
                    isloading : false,
                    selectedCenterFacility : action.payload,
                    error : ''
                }
            case centerfacilityConstants.UPDATE_CENTERFACILITY_FAIL : 
            return {
                ...state,
                isloading : false,
                error : action.error
            }

            case centerfacilityConstants.DELETE_CENTERFACILITY_REQUEST:
                return{
                    ...state,
                    isloading : true,
                    error : ''
                }
            case centerfacilityConstants.DELETE_CENTERFACILITY_SUCCESS :
                return {
                    ...state,
                    isloading :false,
                    error : ''
                }
            case centerfacilityConstants.DELETE_CENTERFACILITY_FAIL :
                return {
                    ...state,
                    isloading : false,
                    error : action.error
                }
            default:
                return state;
    }
}