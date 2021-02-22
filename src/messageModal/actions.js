import { DROP_CURRENT_MESSAGE_ID, SET_CURRENT_MESSAGE_ID, SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export const setCurrentMessageId = id => {
  return {
  type: SET_CURRENT_MESSAGE_ID,
  payload: {
    id
  }
}};

export const dropCurrentMessageId = () => ({
  type: DROP_CURRENT_MESSAGE_ID
});

export const showModal = () => ({
  type: SHOW_MODAL
});

export const hideModal = () => ({
  type: HIDE_MODAL
});