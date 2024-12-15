import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export default RootLayout
