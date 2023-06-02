import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCartFill,
  BsFillPersonPlusFill,
  BsFillPersonDashFill,
} from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useProductContext } from "../context/Products_Context";
import { menuoptions } from "../menuoption";
import CartLoginButton from "../components/CartLoginButton";
import { useCartContext } from "../context/Cart_Context";
import { useUserContext } from "../context/User_Context";

const SideBar = () => {
  const { closeSideBarPanel, state } = useProductContext();
  const { cart } = useCartContext();
  const { myUser, loginWithRedirect, logout } = useUserContext();
  const { openSideBar } = state;
  return (
    <div
      className={`fixed z-30 top-0 ${
        openSideBar
          ? "left-0 transition-all duration-300"
          : "-left-[100%] transition-all duration-300"
      } w-screen bg-white h-screen md:hidden transition ease-linear delay-75`}
    >
      <div className="flex justify-between items-center p-10">
        <h3 className="text-2xl font-bold">HomeySloth</h3>
        <RxCross2
          className="text-2xl mr-2 cursor-pointer"
          onClick={() => closeSideBarPanel()}
        />
      </div>
      <div className="flex flex-col">
        {menuoptions.map((option) => {
          const { title, url } = option;
          return (
            <Link
              to={url}
              className="hover:bg-stone-300 hover:px-12 transition-all cursor-pointer px-10 py-3"
              key={title}
              onClick={() => closeSideBarPanel()}
            >
              {title}
            </Link>
          );
        })}
      </div>
      <div className="flex justify-evenly gap-10 mt-8 text-xl text-stone-600">
        <Link
          to="/cart"
          className="flex justify-center items-center"
          onClick={() => closeSideBarPanel()}
        >
          <p>Cart</p>
          <div className="flex relative">
            <BsFillCartFill />
            <div className="rounded-full bg-stone-400 text-white w-6 h-6 flex justify-center items-center absolute left-3 bottom-2">
              {cart.length}
            </div>
          </div>
        </Link>

        {myUser ? (
          <button
            className="flex justify-center items-center"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            <p>Logout</p>
            <BsFillPersonDashFill />
          </button>
        ) : (
          <button
            className="flex justify-center items-center"
            onClick={loginWithRedirect}
          >
            <p>Login</p>
            <BsFillPersonPlusFill />
          </button>
        )}
      </div>
      {/* <CartLoginButton/> */}
    </div>
  );
};

export default SideBar;
