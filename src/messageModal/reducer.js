import { DROP_CURRENT_MESSAGE_ID, SET_CURRENT_MESSAGE_ID, SHOW_MODAL, HIDE_MODAL } from './actionTypes';

const initialState = {
  messageId: '',
  isShown: false
}

export default function modalReducer(state = initialState, action){
  switch(action.type){
    case SET_CURRENT_MESSAGE_ID: {
      const {id} = action.payload;
      return {
        ...state,
        messageId: id
      }
    }

    case DROP_CURRENT_MESSAGE_ID: {
      return {
        ...state,
        messageId: ''
      }
    }

    case SHOW_MODAL: {
      return {
        ...state,
        isShown: true
      }
    }

    case HIDE_MODAL: {
      return {
        ...state,
        isShown: false
      }
    }

    default: return state;
  }
}