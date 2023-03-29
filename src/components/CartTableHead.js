import React from 'react'

const tableheading = ['Item', 'Price', 'Quantity', 'Subtotal', '']

const CartTableHead = () => {
  return (
    <div className='grid grid-cols-5 mt-20 py-5 border-b-[1px] mx-5 md:mx-40 '>
      {tableheading.map(title => {
        return <span className='text-sm text-gray-500'>{title}</span>
      })}
    </div>
  )
}

export default CartTableHead