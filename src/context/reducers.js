import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_CONNECTOR
} from './actions'

const reducer = (state, action) => {

  if (action.type === SHOW_MODAL) {
    return {
      ...state,
      displayModal: true,
    }
  }

  if (action.type === HIDE_MODAL) {
    return {
      ...state,
      displayModal: false,
    }
  }

  if (action.type === SET_CONNECTOR) {
    return {
      ...state,
      connector: action.payload.connector,
    }
  }
}

export default reducer