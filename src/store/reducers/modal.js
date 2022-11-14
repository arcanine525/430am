import {HIDE_MODAL, SHOW_MODAL} from '../types'

const initialState = {
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  BodyComponent: null,
}

const modalReducer = function (state = initialState, action) {
  const {type, payload} = action || {}

  switch (type) {
    case SHOW_MODAL:
      return payload
    case HIDE_MODAL:
      return initialState
    default:
      return state
  }
}

export default modalReducer
