import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import {FaTimes} from "react-icons/fa"
import { useProductContext } from "../context/Products_Context";
import { menuoptions } from "../menuoption";
import CartLoginButton from "../components/CartLoginButton";

const SideBar = () => {
  const { closeSideBarPanel, state } = useProductContext();
  return (
    <div className="fixed z-30 top-0 left-0 w-screen bg-white h-screen md:hidden transition ease-linear delay-75">
      <div className="flex justify-between items-center p-10">
        <h3 className="text-2xl font-bold">HomeySloth</h3>
        <FaTimes
          className="text-2xl text-red-500 mr-8 cursor-pointer"
          onClick={() => closeSideBarPanel()}
        />
      </div>
      <ul>
        {menuoptions.map(option => {
          const {title, url} = option
          return <li className="hover:bg-stone-300 hover:px-12 transition-all cursor-pointer px-10 py-3" key={title}>
              {/* <Link to={url}>{title}</Link> */}
              {title}
          </li>
        })}
      </ul>
      <div className="flex justify-center gap-10 mt-8 text-xl text-stone-600">
        <div className="flex justify-center items-center">
          <p>Cart</p>
          <div className="flex relative">
            <BsFillCartFill />
            <div className="rounded-full bg-stone-400 text-white w-6 h-6 flex justify-center items-center absolute left-3 bottom-2">
              0
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p>Login</p>
          <BsFillPersonPlusFill />
          {/* <CartLoginButton/> */}
        </div>
      </div>
      {/* <CartLoginButton/> */}
    </div>
  );
};

export default SideBar;
