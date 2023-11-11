import React from 'react'

const tableheading = ['Item', 'Price', 'Quantity', 'Subtotal', '']

const CartTableHead = () => {
  return (
    <div className='md:grid grid-cols-5 mt-20 py-5 border-t-[1px] border-b-[1px] mx-5 lg:mx-40 hidden'>
      {tableheading.map((title) => {
        return <span className='text-sm text-gray-500' key={title}>{title}</span>
      })}
    </div>
  )
}

export default CartTableHead