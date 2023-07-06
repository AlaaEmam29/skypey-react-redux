import React from 'react'
import './header.css'
export default function Header({ user }) {
  return (
      <nav className='header'>
          <h1 className='header__name'>{user.name}</h1>
          <p className='header__status'>{user.status}</p>
    </nav>
  )
}
