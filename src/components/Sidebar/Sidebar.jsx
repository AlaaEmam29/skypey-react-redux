import React from 'react'
import './sidebar.css'
export default function Sidebar({children }) {
  return (
      <aside className='sidebar'>
        {children}
      </aside>
  )
}
