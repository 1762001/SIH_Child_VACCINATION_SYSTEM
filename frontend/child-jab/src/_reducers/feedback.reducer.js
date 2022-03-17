import {feedbackConstants} from '../_constants/feedback.constants'

const initialFeedback = {
    isloading : false,
    feedback : {},
    error :'',
    allFeedbacks : [],
    selectedFeedback : {}
}

export const feedbackReducer =(state=initialFeedback , action)=>{
    switch(action.type) {
        case feedbackConstants.CREATE_FEEDBACK_REQUEST:
            return {
                    ...state,
                    isloading : true,
                    feedback : {},
                    error : ''
            }
        case feedbackConstants.CREATE_FEEDBACK_SUCCESS:
            return {
                    ...state,
                    isloading : false,
                    feedback : action.payload,
                    error : ''
            }
        case feedbackConstants.CREATE_FEEDBACK_FAIL :
            return {
                    ...state,
                    isloading : false,
                    feedback : {},
                    error : action.error
            }
        case feedbackConstants.GET_FEEDBACK_REQUEST :
            return {
                ...state,
                isloading : true,
                allFeedbacks : [],
                error : '' 
            }
        case feedbackConstants.GET_FEEDBACK_SUCCESS :
            return {
                ...state,
                isloading : false,
                allFeedbacks : action.payload,
                error : ''
            }
        case feedbackConstants.GET_FEEDBACK_FAIL : 
        return {
              ...state,
              isloading : false,
              allFeedbacks : [],
              error : action.error
        }

        case feedbackConstants.SELECTED_FEEDBACK :
            return {
                ...state,
                selectedFeedback : action.selectedFeedback

            }
        case feedbackConstants.RESET_SELECTED_FEEDBACK:
            return {
                ...state,
                selectedFeedback : {}
            }
        case feedbackConstants.UPDATE_FEEDBACK_REQUEST :
            return {
                ...state,
                isloading : true,
                error : ''
            }

        case feedbackConstants.UPDATE_FEEDBACK_SUCCESS:
            return {
                ...state,
                isloading : false,
                selectedFeedback  : action.payload,
                error : ''
            }

        case feedbackConstants.UPDATE_FEEDBACK_FAIL : 
        return {
            ...state,
            isloading : false,
            error : action.error
        }

        case feedbackConstants.DELETE_FEEDBACK_REQUEST :
            return {
                ...state,
                isloading : true,
                error : ''
            }

        case feedbackConstants.DELETE_FEEDBACK_SUCCESS :
            return {
                ...state,
                isloading : false,
                error : ''
            }

        case feedbackConstants.DELETE_FEEDBACK_FAIL :
            return {
                ...state,
                isloading : false,
                error : action.error
            }
            default :
            return state;
    }
}