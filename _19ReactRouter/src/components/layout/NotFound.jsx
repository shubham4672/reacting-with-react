import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 not found</h1>
      <NavLink to="/">Back to home</NavLink>
    </div>
  )
}

export default NotFound
