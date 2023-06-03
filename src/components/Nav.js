import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useProductContext } from "../context/Products_Context";
import { useUserContext } from "../context/User_Context";
import { menuoptions } from "../menuoption";
import CartLoginButton from "./CartLoginButton";

const Nav = () => {
  const {openSideBarPanel, state} = useProductContext()
  const {myUser} = useUserContext()
  return (
    <div className=" px-5 py-7 md:px-10 lg:px-40 bg-stone-100 flex justify-between">
      <div>
        <h2 className="text-2xl font-bold">HomeySloth</h2>
      </div>
      <ul className=" hidden md:flex gap-10 justify-center">
          {menuoptions.map(option => {
            const {title, url} = option
            return <li className="hover:underline transition:ease-linear" key={title}>
              <Link to={url}>{title}</Link>
            </li>
          })}
          {myUser && (<li className="hover:underline transition:ease-linear">
            <Link to='/checkout'>Checkout</Link>
          </li>) }
          
      </ul>
      <div className="flex gap-10">
        <CartLoginButton/>

        <Link className="flex md:hidden text-3xl">
          <AiOutlineMenu onClick={()=>openSideBarPanel()}/>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
