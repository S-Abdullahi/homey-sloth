import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className="grid grid-cols-5 mx-10 md:mx-40 my-5 items-center">
      <div className="flex gap-3 items-center">
        <div className="md:w-1/2">
          <img
            src="https://images2.imgbox.com/38/85/iuYyO9RP_o.jpeg"
            alt="dummy"
            className="rounded"
          />
        </div>

        <div>
          <p className="text-sm font-bold">product name</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">color:</span>
            <div className="w-3 h-3 rounded bg-black"></div>
          </div>
        </div>
      </div>
      <p className="text-yellow-500 text-base">$30.00</p>
      <div className="flex justify-center gap-5 font-bold">
        <button>-</button>
        <span>3</span>
        <button>+</button>
      </div>
      <p className="text-gray-500 text-base">$92.97</p>
      <AiFillDelete className="text-red-600 cursor-pointer" />
    </div>
  );
};

export default CartItem;
