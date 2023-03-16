import React from 'react'
import dummy from '../assets/dummy.jpg'

const Item = () => {
  return (
    <div className='md:w-1/4 mb-2'>
        <img src={dummy} alt='product' className='mb-2 rounded'/>
        <div className='flex justify-between'>
            <p>Entertainment Center</p>
            <p className='text-stone-500'>$599.99</p>
        </div>
    </div>
  )
}

export default Item