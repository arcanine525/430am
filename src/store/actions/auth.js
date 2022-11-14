import axios from 'axios'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from '../types'
import {setAlert} from './alert'
import setAuthToken from '../../utils/setAuthToken'

//Load user
export const loadUser = () => async dispatch => {
  if (localStorage.jwt) {
    setAuthToken(`Bearer ${localStorage.jwt}`)
  }

  try {
    const res = await axios.get('/api/users/me')

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

//Register user
export const register =
  (
    {email, password, passwordConfirm, fullname, phone, birthYear, address},
    callback
  ) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const newUser = {
      username: email,
      email,
      password,
      passwordConfirm,
      fullname,
      phone: phone || undefined,
      birthYear: birthYear || undefined,
      address: address || undefined,
    }
    try {
      const res = await axios.post('/api/auth/local/register', newUser, config)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })

      dispatch(loadUser())

      callback?.(true, res)
    } catch (err) {
      dispatch(setAlert(err?.response?.data?.error?.message, 'danger'))
      dispatch({
        type: REGISTER_FAIL,
      })
      callback?.(false, err)
    }
  }

//Login user
export const login =
  ({email, password}, callback) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post(
        '/api/auth/local',
        {identifier: email, password},
        config
      )

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })

      dispatch(loadUser())

      callback?.(true, res)
    } catch (err) {
      dispatch(setAlert(err?.response?.data?.error?.message, 'danger'))
      dispatch({
        type: LOGIN_FAIL,
      })
      callback?.(false, err)
    }
  }

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
  })
}
