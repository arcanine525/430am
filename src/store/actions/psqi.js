import axios from 'axios'
import {setAlert} from './alert'

export const submitPsqi =
  ({answer, point, email}, callback) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      data: {
        email,
        point,
        answer,
      },
    }
    try {
      const res = await axios.post('/api/survey-psqis', body, config)

      callback?.(true, res)
    } catch (err) {
      dispatch(setAlert(err?.response?.data?.error?.message, 'danger'))
      callback?.(false, err)
    }
  }
