import { createSlice } from '@reduxjs/toolkit';
import { setActiveUserId } from './ActiveUserIdAction'

export const ActiveUserIdSlice = createSlice({
  name: 'ActiveUserIdSlice',
    initialState: {
      activeUserId: "",
      user:{}
  },
  reducers: {},
     extraReducers: (builder) => {
       builder.addCase(setActiveUserId, (state, action) => {
         return {
           ...state, 
           activeUserId:action.payload
          }
       })
  },


});

export default ActiveUserIdSlice.reducer;
