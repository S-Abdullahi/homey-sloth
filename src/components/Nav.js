import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillPersonPlusFill } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="mb-10 p-10  md:px-40 bg-stone-100 flex justify-between">
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
        <Link className="flex gap-1">
          <p className="text-xl">Cart</p>
          <div className="flex relative">
            <BsFillCartFill className="text-2xl" />
            <div className="rounded-full bg-stone-400 text-white w-6 h-6 flex justify-center align-middle absolute left-4 bottom-4">
              0
            </div>
          </div>
        </Link>

        <Link className="flex align-middle gap-1">
          <p className="text-xl">Login</p>
          <BsFillPersonPlusFill className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
