import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../types'
import axios from 'axios'

const initialState = {
  jwt: localStorage.getItem('jwt'),
  isAuthenticated: null,
  loading: true,
  user: null,
}

const authReducer = (state = initialState, action) => {
  const {type, payload} = action || {}
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      localStorage.removeItem('jwt')
      axios.defaults.headers.common['Authorization'] = undefined
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        jwt: null,
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('jwt', payload.jwt)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      }
    default:
      return state
  }
}

export default authReducer
