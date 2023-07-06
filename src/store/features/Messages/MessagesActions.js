import { createAction } from '@reduxjs/toolkit';
import { DELETE_MESSAGE, EDIT_MESSAGE, SEND_MESSAGE } from './MessagesTypes';

export const sendMessage = createAction(SEND_MESSAGE);
export const deleteMessage = createAction(DELETE_MESSAGE);
export const editMessage = createAction(EDIT_MESSAGE);
