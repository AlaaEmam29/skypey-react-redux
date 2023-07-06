import React from 'react'
import './container.css'
import Main from '../Main/Main'
import { useSelector } from 'react-redux'
import { selectActiveUserId } from '../../store/features/ActiveUserId/ActiveUserIdSelectors'
import ChatWindow from '../ChatWindow/ChatWindow'

export default function Container() {
  const { activeUserId } = useSelector(selectActiveUserId)

  return (
    <section className="container">
      {activeUserId ? <ChatWindow/> : <Main/>}
</section>
  )
}
