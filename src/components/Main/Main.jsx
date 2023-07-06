import React from 'react'
import Button from '../Common/Button/Button'
import './main.css'
import { selectUsers } from '../../store/features/User/UserSelectors'
import {useSelector} from 'react-redux'

export default function Main() {
      const {owner}= useSelector(selectUsers)
  return (
  <>
  {
    owner && <main className='main'>
              <h2 className="main__username">Welcome, {owner.name.split(" ")[0]}</h2>
      <img className="main__username--img" src={owner.profile_pic} alt={owner.name} />
      <p className='main__status'><b>Status:</b> {owner.status}</p>

<Button className='btn main__btn'>Start a conversation</Button>
<p className='main__search'>Search for someone to start chatting with or go to Contacts to see who is available</p>

          </main>
  }
  </>  

  )
}
