import { createAction } from '@reduxjs/toolkit';
import { SET_ACTIVE_USER_ID } from './ActiveUserIdTypes.js';

export const setActiveUserId = createAction(SET_ACTIVE_USER_ID);

