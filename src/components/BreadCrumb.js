import React from 'react'

const BreadCrumb = ({title}) => {
  return (
    <div className='bg-stone-300 p-8 text-left px-40 font-bold '>
        <p className='text-stone-500'>Home / <span className='text-stone-700'>{title}</span></p>
    </div>
  )
}

export default BreadCrumb