import React from 'react'
import dummy from '../assets/dummy.jpg'
import { useProductContext } from '../context/Products_Context'

const Item = ({id, name, price, image}) => {
  return (
    <div className='mb-2 '>
        <img src={image} alt='product' className='mb-2 rounded h-40 w-full object-cover cursor-pointer hover:contrast-50'/>
        <div className='flex justify-between text-sm'>
            <p>{name}</p>
            <p className='text-stone-500'>$ {price}</p>
        </div>
    </div>
  )
}

export default Item