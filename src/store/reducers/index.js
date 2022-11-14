import {combineReducers} from 'redux'
import alertReducer from './alert'
import authReducer from './auth'
import modalReducer from './modal'

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  modal: modalReducer,
})
