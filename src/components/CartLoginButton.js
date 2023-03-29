import React from 'react'
import { BsFillCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";



const CartLoginButton = () => {
  return (
    <div className='flex gap-10'>
         <Link className="hidden md:flex gap-1" to="/cart">
          <p className="text-xl">Cart</p>
          <div className="flex relative">
            <BsFillCartFill className="text-2xl" />
            <div className="rounded-full bg-stone-400 text-white w-6 h-6 flex justify-center align-middle absolute left-4 bottom-4">
              0
            </div>
          </div>
        </Link>

        <Link className="hidden md:flex md:align-middle gap-1" to="/login">
          <p className="text-xl">Login</p>
          <BsFillPersonPlusFill className="text-2xl" />
        </Link>
    </div>
  )
}

export default CartLoginButton