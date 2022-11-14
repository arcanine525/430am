import {HIDE_MODAL, SHOW_MODAL} from '../types'

export const showModal =
  ({isOpen, onOpen, onClose, BodyComponent}) =>
  dispatch => {
    dispatch({
      type: SHOW_MODAL,
      payload: {isOpen, onOpen, onClose, BodyComponent},
    })
  }

export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL,
  })
}
