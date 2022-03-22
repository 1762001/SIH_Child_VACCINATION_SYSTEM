import {combineReducers} from 'redux'
import {centerReducer} from '../_reducers/center.reducer'
import {parentsReducer} from '../_reducers/parents.reducer'
import {childrenReducer} from '../_reducers/children.reducer'
import {feedbackReducer} from '../_reducers/feedback.reducer'
import {centerfacilityReducer} from './centerfacility.reducer'
import {galleryReducer} from './gallery.reducer'
import {adminReducer} from './admin.reducer'
import {authReducer} from './auth.reducer'
import {ForgotReducer} from './Forgot.reducer'

const rootReducer = combineReducers ({
     centerReducer, parentsReducer, childrenReducer, 
     feedbackReducer, centerfacilityReducer, galleryReducer, adminReducer, authReducer,
     ForgotReducer
})

export default rootReducer