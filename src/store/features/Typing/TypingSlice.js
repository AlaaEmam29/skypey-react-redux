import { createSlice } from '@reduxjs/toolkit';
import { setTypingValue } from './TypingActions';


export const TypingSlice = createSlice({
  name: 'TypingSlice',
    initialState: {
      typing:""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTypingValue, (state, action) => {
      return {
        ...state,
        typing:action.payload
         }
        
       })
  },
});


export default TypingSlice.reducer;