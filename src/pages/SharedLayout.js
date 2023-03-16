import React from 'react'
import { Outlet } from 'react-router-dom'
import {Nav, Footer} from '../components'


const SharedLayout = () => {
  return (
    <div className='relative'>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SharedLayout