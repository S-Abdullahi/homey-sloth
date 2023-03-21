import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useProductContext } from "../context/Products_Context";

const Nav = () => {
  const {openSideBarPanel, state} = useProductContext()
  return (
    <div className=" p-10  md:px-40 bg-stone-100 flex justify-between">
      <div>
        <h2 className="text-2xl font-bold">HomeySloth</h2>
      </div>
      <ul className=" hidden md:flex gap-10 justify-center">
        <li className="hover:underline transition:ease-linear">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline transition:ease-linear">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline transition:ease-linear">
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <div className="flex gap-10">
        <Link className="hidden md:flex gap-1" to="/cart">
          <p className="text-xl">Cart</p>
          <div className="flex relative">
            <BsFillCartFill className="text-2xl" />
            <div className="rounded-full bg-stone-400 text-white w-6 h-6 flex justify-center align-middle absolute left-4 bottom-4">
              0
            </div>
          </div>
        </Link>

        <Link className="hidden md:flex md:align-middle gap-1" to="/login">
          <p className="text-xl">Login</p>
          <BsFillPersonPlusFill className="text-2xl" />
        </Link>

        <Link className="flex md:hidden text-3xl">
          <AiOutlineMenu onClick={()=>openSideBarPanel()}/>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
