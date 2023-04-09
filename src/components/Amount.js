import React from 'react'
import { INCREASE_PRODUCT } from '../actions';
import { useProductContext } from '../context/Products_Context';

const Amount = ({increase, decrease, amount}) => {
    const {addToCart} = useProductContext()
  return (
    <div>
         <div className="flex  gap-6 mt-2">
            <button className="text-2xl" onClick={()=>decrease()}>-</button>
            <p className="text-2xl font-bold">{amount}</p>
            <button
              className="text-2xl"
              onClick={()=>increase()}
            >
              +
            </button>
          </div>
          
    </div>
  )
}

export default Amount