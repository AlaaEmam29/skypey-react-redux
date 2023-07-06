import { createAction } from '@reduxjs/toolkit';
import { DELETE_USER } from './UserTypes';

export const deleteUser = createAction(DELETE_USER);

