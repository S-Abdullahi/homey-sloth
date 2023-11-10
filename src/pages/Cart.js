import React from "react";
import EmptyCart from "../components/EmptyCart";
import CartTableHead from "../components/CartTableHead";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { BreadCrumb } from "../components";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/Products_Context";
import { useCartContext } from "../context/Cart_Context";
import { clear } from "@testing-library/user-event/dist/clear";

const Cart = () => {
  const { state} = useProductContext();
  const {cart, clearCart} = useCartContext()
  // const { cart } = state;
  return (
    <div className="text-2xl text-center">
      <BreadCrumb title="Cart" />
      {cart < 1 ? (
        <EmptyCart />
      ) : (
        <>
          <CartTableHead />
          {cart?.map((item, index) => {
            return <CartItem key={index} {...item} />;
          })}
          {/* <CartItem/> */}
          <hr className="mx-10 lg:mx-40" />
          <div className="flex justify-between gap-5 mx-10 lg:mx-40 my-5">
            <button className="bg-yellow-700 py-1 px-2 tracking-wide rounded text-white text-xs">
              <Link to="/products">Continue shopping</Link>
            </button>
            <button className="text-xs py-1 px-2 bg-black text-white rounded tracking-wide" onClick={()=>clearCart()}>
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
