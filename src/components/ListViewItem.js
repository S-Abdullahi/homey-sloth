import React from 'react'
import { Link } from 'react-router-dom'
import { priceFormat } from '../utils/constants'

const ListViewItem = ({id,name, image, description, company, price}  ) => {
  return (
    <div className='grid grid-cols-2  mb-10 gap-10'>
        {/* <div className='w-40 h-40'> */}
            <img src={image} alt={name} className="rounded h-60 w-full object-cover"/>
        {/* </div> */}
        <div className='text-left flex flex-col items-start justify-center gap-2'>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='text-sm font-bold text-yellow-500'>{priceFormat(price)}</p>
            <p className='text-sm text-gray-500'>{description.slice(0,150)}...</p>
            <button className='text-xs bg-stone-400 rounded p-2'>
                <Link to={`/products/${id}`}>DETAILS</Link>
                </button>
        </div>

    </div>
  )
}

export default ListViewItem