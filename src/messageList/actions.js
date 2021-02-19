import { SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from './actionTypes';
import service from './service';

export const sendMessage = data => ({
  type: SEND_MESSAGE,
  payload: {
    id: service.getNewId(),
    data
  }
});

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