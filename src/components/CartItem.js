import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useProductContext } from "../context/Products_Context";
import Amount from "./Amount";
import { priceFormat } from "../utils/constants";

const CartItem = ({id, image, name, price, colors}) => {
  const {deleteCartItem} = useProductContext()
  return (
    <div className="grid grid-cols-5  md:grid-cols-5 mx-10 md:mx-40 my-5 items-center">
      <div className="col-span-2 md:col-span-1 flex gap-3 items-center">
        <div className="w-1/2">
          <img
            src={image}
            alt={name}
            className="rounded"
          />
        </div>

        <div className=" w-1/2 text-left">
          <p className="text-sm font-bold">{name}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">color:</span>
            <div className={`w-3 h-3 rounded bg-[${colors[0]}]`}></div>
          </div>
          <p className="text-yellow-500 text-base md:hidden">{priceFormat(price)}</p>
        </div>
      </div>
      <p className="text-yellow-500 text-base hidden md:block">{priceFormat(price)}</p>
      <div className="flex justify-center gap-5 col-span-2 md:col-span-1 font-bold">
        {/* <button>-</button>
        <span>3</span>
        <button>+</button> */}
        <Amount/>
      </div>
      <p className="text-gray-500 text-base hidden md:block">$92.97</p>
      <div className="flex justify-center">
        <AiFillDelete className="text-red-600 col-span-1 cursor-pointer" onClick={()=>deleteCartItem(id)}/>
      </div>
    </div>
  );
};

export default CartItem;
