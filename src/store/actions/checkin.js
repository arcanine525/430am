import axios from 'axios'
import {setAlert} from './alert'

export const checkin =
  ({email, sleepAt, checkinAt, sharing, shareUrl}, callback) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      data: {
        email,
        sleepAt,
        checkinAt,
        sharing,
        shareUrl,
      },
    }
    try {
      const res = await axios.post('/api/checkins', body, config)

      callback?.(true, res)
    } catch (err) {
      dispatch(setAlert(err?.response?.data?.error?.message, 'danger'))
      callback?.(false, err)
    }
  }
