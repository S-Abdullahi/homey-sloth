import React from "react";
import EmptyCart from "../components/EmptyCart";
import CartTableHead from "../components/CartTableHead";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { BreadCrumb } from "../components";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/Products_Context";
import { clear } from "@testing-library/user-event/dist/clear";

const Cart = () => {
  const { state, clearCart } = useProductContext();
  const { cart } = state;
  return (
    <div className="text-2xl text-center">
      <BreadCrumb title="Cart" />
      {cart < 1 ? (
        <EmptyCart />
      ) : (
        <>
          <CartTableHead />
          {cart.map((item, index) => {
            return <CartItem key={index} {...item} />;
          })}
          {/* <CartItem/> */}
          <hr className="mx-10 md:mx-40" />
          <div className="flex justify-between mx-10 md:mx-40 my-5">
            <button className="bg-stone-500 px-4 py-2 text-base tracking-wide rounded text-white">
              <Link to="/products">Continue shopping</Link>
            </button>
            <button className="text-base bg-black text-white px-4 py-2 rounded tracking-wide" onClick={()=>clearCart()}>
              Clear Shopping Cart
            </button>
          </div>
          <CartTotal />
        </>
      )}
    </div>
  );
};

export default Cart;
