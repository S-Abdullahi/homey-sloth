import React from 'react'

const CartTableHead = () => {
  return (
    <div className='grid grid-cols-5 mt-20 py-5 border-b-2 mx-40 '>
      <span className='text-sm text-gray-500'>Item</span>
      <span className='text-sm text-gray-500'>Price</span>
      <span className='text-sm text-gray-500'>Quantity</span>
      <span className='text-sm text-gray-500'>Subtotal</span>
      <span></span>
    </div>
  )
}

export default CartTableHead