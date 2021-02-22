import { SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from './actionTypes';
import getNewId from './service';

export const sendMessage = input => {
  let messageText = input.value;
  let data = {
    "text": messageText,
    "createdAt": new Date().toISOString(),
    "editedAt": ""
  };

  input.value = '';
  return ({
    type: SEND_MESSAGE,
    payload: {
      id: getNewId(),
      data
  }})
};

export const editMessage = (id, data) => ({
  type: EDIT_MESSAGE,
  payload: {
    id,
    data
  }
});

export const deleteMessage = id => ({
  type: DELETE_MESSAGE,
  payload: {
    id
  }
});