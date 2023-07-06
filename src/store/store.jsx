import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './features/User/UserSlice'
import MessagesSlice from './features/Messages/MessagesSlice'
import ActiveUserIdSlice from './features/ActiveUserId/ActiveUserIdSlice'
import TypingSlice from './features/Typing/TypingSlice'

export default configureStore({
    reducer: {
        user: UserSlice,
    messages: MessagesSlice,
    activeUserId: ActiveUserIdSlice,
        typing:TypingSlice
          },
})

