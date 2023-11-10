import React from "react";
import { INCREASE_PRODUCT } from "../actions";
import { useProductContext } from "../context/Products_Context";

const Amount = ({ increase, decrease, amount }) => {
  const { addToCart } = useProductContext();
  return (
    <div>
      <div className="flex items-center gap-6 mt-2">
        <button
          className="text-2xl flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 font-bold"
          onClick={() => decrease()}
        >
          -
        </button>
        <p className="text-2xl font-bold">{amount}</p>
        <button
          className="text-2xl flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 font-bold"
          onClick={() => increase()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Amount;
