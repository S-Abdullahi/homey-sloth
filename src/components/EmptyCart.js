import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="my-[30%] lg:my-[10%]">
      <p className="font-bold md:text-4xl mb-5">Your Cart is Empty</p>
      <button className="btn">
        <Link to="/products">Fill It</Link>
      </button>
    </div>
  );
};

export default EmptyCart;
