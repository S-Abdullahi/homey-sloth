import React from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import { useProductContext } from "../context/Products_Context";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { closeSideBarPanel, state } = useProductContext();
  return (
    <div className="fixed z-30 top-0 left-0 w-screen bg-white h-screen md:hidden transition ease-linear delay-75">
      <div className="flex justify-between items-center p-10">
        <h3 className="text-2xl font-bold">HomeySloth</h3>
        <RxCross2
          className="text-2xl text-red-500 mr-8 cursor-pointer"
          onClick={() => closeSideBarPanel()}
        />
      </div>
      <ul>
        <li className="hover:bg-stone-300 hover:px-12 transition-all cursor-pointer  px-10 py-3">
          {/* <Link to='/'>Home</Link> */}
          Home
        </li>
        <li className="hover:bg-stone-300 hover:px-12 transition-all cursor-pointer  px-10 py-3">
        {/* <Link to='/about'>About</Link> */}
        About
        </li>
        <li className="hover:bg-stone-300 hover:px-12 transition-all cursor-pointer  px-10 py-3">
        {/* <Link to='/products'>Products</Link> */}
        Link
        </li>
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
        </div>
      </div>
    </div>
  );
};

export default SideBar;
