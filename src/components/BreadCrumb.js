import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({title, product}) => {
  return (
    <div className='bg-stone-300 p-8 text-left text-base md:text-xl px-5 md:px-10 lg:px-40 font-bold '>
        <p className='text-stone-500'><Link to='/'>Home </Link> / {product ? <span><Link to='/products'>{title}</Link>/ <span className='text-stone-400'>{product}</span></span> : <span className='text-stone-400'>{title}</span>}</p>
    </div>
  )
}

export default BreadCrumb