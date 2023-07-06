
import React from 'react'
import './assets/styles/app.css'
import Container from './components/Container/Container'
import Sidebar from './components/Sidebar/Sidebar'
import User from './components/User/User'

export default function App() {
  return (
    <>
      <Sidebar >
        <User />
      </Sidebar>
      <Container/>
    </>
  )
}

