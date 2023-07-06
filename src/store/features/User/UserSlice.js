import { createSlice } from '@reduxjs/toolkit'
import { OWNER, USERS } from '../../../static-data'
import { deleteUser } from './UserActions'

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    
    user: USERS,
    owner :OWNER,
    deleted: []


  },
  reducers: {},
    extraReducers: (builder) => {
      builder.addCase(deleteUser, (state, { payload : user_id }) => {
        const deleted = state.user.find(person => person.user_id === user_id);
        const updatesUsers = state.user.filter(person => person.user_id !== user_id)
        const deletedUser = [...state.deleted, deleted]
    return{
      ...state,
      user:updatesUsers ,
      deleted: deletedUser
    };
       })
  },

})


export default UserSlice.reducer
//  //  const newUsers = 
