import React from "react";
import { BsFillCartFill, BsFillPersonPlusFill, BsFillPersonDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/Products_Context";
import { useCartContext } from "../context/Cart_Context";
import { useUserContext } from "../context/User_Context";

const CartLoginButton = () => {
  const { state } = useProductContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
  // const {cart} = state
  const { cart } = useCartContext();
  return (
    <div className="flex gap-10">
      <Link className="hidden md:flex gap-1" to="/cart">
        <p className="text-xl">Cart</p>
        <div className="flex relative">
          <BsFillCartFill className="text-2xl" />
          <div className="rounded-full bg-stone-400 text-white w-6 h-6 flex justify-center align-middle absolute left-4 bottom-4">
            {cart.length}
          </div>
        </div>
      </Link>

      {myUser ? (
        <button
          className="hidden md:flex md:align-middle gap-1"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <p className="text-xl">Logout</p>
          <BsFillPersonDashFill className="text-2xl" />
        </button>
      ) : (
        <button
          className="hidden md:flex md:align-middle gap-1"
          onClick={loginWithRedirect}
        >
          <p className="text-xl">Login</p>
          <BsFillPersonPlusFill className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default CartLoginButton;
