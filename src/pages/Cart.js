import React from "react";
import EmptyCart from "../components/EmptyCart";
import CartTableHead from "../components/CartTableHead";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="text-2xl text-center">
      {/* <EmptyCart /> */}
      <CartTableHead/>
      <CartItem/>
    </div>
  );
};

export default Cart;
