/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-prototype-builtins */
import { createSlice } from '@reduxjs/toolkit'
import { MESSAGES } from '../../../static-data'
import { deleteMessage, editMessage, sendMessage } from './MessagesActions'
import cloneDeep from 'clone-deep'
import { faker } from '@faker-js/faker';
export const MessagesSlice = createSlice({
  name: 'MessagesSlice',
  initialState: {
    messages: MESSAGES,
    newMsgIndex: 0,
  },
  reducers: {},
  
  extraReducers: (builder) => {
  builder.addCase(sendMessage, (state, action) => {
  const [key, text] = action.payload;
  const updatedMessages = cloneDeep(state.messages);
  
  let index = parseInt(Object.keys(updatedMessages[key]).pop()) + 1;
  if (updatedMessages.hasOwnProperty(key)) {
    let messageIndex = Object.values(updatedMessages[key]).findIndex(
      (msg) => msg.edit === true 
    );
    console.log(messageIndex , text)
    if (messageIndex !== -1) {
      // Edit the existing message
      const messageId = Object.keys(updatedMessages[key])[messageIndex];
      updatedMessages[key][messageId].text = text;
            updatedMessages[key][messageId].edit = false;

    } else {
      // Add a new message
      updatedMessages[key][index] = {
        text,
        is_user_msg: true,
        msg_id: faker.string.uuid(),
        edit:false
      };
    }
  }
  return {
    ...state,
    messages: updatedMessages,
    newMsgIndex: index,

  };
}),

      builder.addCase(deleteMessage, (state, action) => {
            const [userMessagesID , msg_id] = action.payload
        const updatedMessages = cloneDeep(state.messages);
        if (updatedMessages.hasOwnProperty(userMessagesID)) {
 const filteredMessages = Object.values(updatedMessages[userMessagesID]).filter(
      (msg) => msg.msg_id !== msg_id
    );

          updatedMessages[userMessagesID] = filteredMessages.reduce((acc, curr, index) => {
      acc[index] = curr;
      return acc;
    }, {});
        }
        return {
          ...state,
          messages:updatedMessages
        }
        

      });
    
    builder.addCase(editMessage, (state, action) => {
      
          const [key, msg_id , text] = action.payload;
      const updatedMessages = cloneDeep(state.messages);
let messageIndex = 0
      if (updatedMessages.hasOwnProperty(key)) {
       messageIndex  = Object.values(updatedMessages[key]).findIndex(
          (msg) => msg.msg_id === msg_id
        );
        if (messageIndex !== -1) {
          updatedMessages[key][messageIndex].edit = true;
        }
      }
      console.log(updatedMessages[key][messageIndex] , "-edit")

      return {
        ...state,
        messages: updatedMessages,
      };



      });

  },
});

export default MessagesSlice.reducer;
