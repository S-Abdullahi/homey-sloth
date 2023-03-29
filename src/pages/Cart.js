import React from "react";
import EmptyCart from "../components/EmptyCart";
import CartTableHead from "../components/CartTableHead";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  return (
    <div className="text-2xl text-center">
      {/* <EmptyCart /> */}
      <CartTableHead/>
      <CartItem/>
      <hr className="mx-10 md:mx-40"/>
      <div className="flex justify-between mx-10 md:mx-40 my-5">
        <button className="bg-stone-500 px-4 py-2 text-base tracking-wide rounded text-white">Continue shopping</button>
        <button className="text-base bg-black text-white px-4 py-2 rounded tracking-wide">Clear Shopping Cart</button>
      </div>
      <CartTotal/>
    </div>
  );
};

export default Cart;
