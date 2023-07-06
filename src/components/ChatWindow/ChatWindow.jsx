import React from 'react'
import './chatWindow.css'
import Header from '../Header/Header'
import Input from '../Common/Input/Input'
import Chat from '../Chat/Chat'
import { selectActiveUserId } from '../../store/features/ActiveUserId/ActiveUserIdSelectors'
import { useSelector , useDispatch} from 'react-redux'
import { selectUsers } from '../../store/features/User/UserSelectors'
import { selectMessages } from '../../store/features/Messages/MessagesSelectors'
import { selectTyping } from '../../store/features/Typing/TypingSelectors'
import { setTypingValue } from '../../store/features/Typing/TypingActions'
import { sendMessage } from '../../store/features/Messages/MessagesActions'
export default function ChatWindow() {
    const { activeUserId } = useSelector(selectActiveUserId)
    const {user:users}= useSelector(selectUsers)
    const { messages } = useSelector(selectMessages)
    const { typing } = useSelector(selectTyping)
    const dispatch = useDispatch()
    const user = (data) => {
        if (Array.isArray(data)) {
            return data.find((user)=>user.user_id === activeUserId)
        
        }
        else {
            return Object.keys(data).find((id) => id === activeUserId)
        }
    }
    const handleOnChangeInput = (e) => {
dispatch(setTypingValue(e.target.value))
    }
    const handleSendMessage = (userMessagesID ,e) => {
        e.preventDefault()
        if (!typing) return
        dispatch(sendMessage([userMessagesID , typing]))
        dispatch(setTypingValue(""))


    }
    const userMessagesID = user(messages)

  return (
      <div className='chatWindow' >
          <Header user={user(users)} />
          <Chat  key={`${activeUserId}-chat` } userMessagesID={userMessagesID}/>
<form onSubmit={handleSendMessage.bind(null, userMessagesID)} >
        <Input value={typing}   onChange={(e)=>handleOnChangeInput(e)}  key={`${activeUserId}-input` } type='text' placeholder='write a message' className='chatWindow__input' /></form>
      </div>
  )
}
