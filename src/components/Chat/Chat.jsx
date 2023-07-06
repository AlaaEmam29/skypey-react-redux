import React, { useEffect, useRef } from 'react';
import './chat.css';
import { selectMessages } from '../../store/features/Messages/MessagesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Common/Button/Button';
import { deleteMessage, editMessage } from '../../store/features/Messages/MessagesActions';
import { setTypingValue } from '../../store/features/Typing/TypingActions';
import { selectTyping } from '../../store/features/Typing/TypingSelectors';

export default function Chat({ userMessagesID }) {
  const { messages } = useSelector(selectMessages);
  const {typing} = useSelector(selectTyping)
  const messagesData = Object.values(messages[userMessagesID]);
  const chatsRef = useRef(null);
const dispatch = useDispatch()
  const scrollToBottom = () => {
    chatsRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

    useEffect(() => {
    scrollToBottom();
  }, [messagesData?.length]);
const handleDeleteMessage = (msg_id) =>{
  dispatch(deleteMessage([userMessagesID , msg_id]))
  }
  const handleEdit = (msg) => {
    if (!msg.is_user_msg) {
      alert("You can't edit the receiver's message");
      return
    }
    dispatch(setTypingValue(msg.text));
    dispatch(editMessage([userMessagesID, msg.msg_id , msg.text]));
  }
  return (
    <div className='chats' >
      {messagesData.map((msg) => {
        return (
          <div className='chat' ref={chatsRef} key={msg.msg_id}>
            <div className={msg.is_user_msg ? `chat__is--user--msg` : 'chat__acc'} onClick={()=>handleEdit(msg)}>{msg.text}</div>
            {msg.is_user_msg && <Button onClick={()=>handleDeleteMessage(msg.msg_id)}  className='chat__btn'>&#10005;</Button>}
          </div>
        );
      })}
    </div>
  );
}
