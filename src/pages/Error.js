import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen w-screen text-center flex flex-col items-center justify-center bg-stone-100'>
      <p className='text-2xl font-bold mb-5'>Something went wrong...</p>
      <button className='btn'><Link to='/'>Return to Home</Link></button>
    </div>
  )
}

export default Error