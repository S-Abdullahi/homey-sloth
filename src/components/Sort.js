import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  return (
    <div className="flex items-center gap-4 align-bottom text-sm text-stone-500 mb-5">
      <BsFillGridFill className=" active-view" />
      <BsList className="inactive-view" />
      <p> 21 Products Found</p>
      <hr className="grow" />
      <p>Sort By</p>
      <select className="cursor-pointer">
        <option>Price (Lowest) </option>
        <option>Price (highest) </option>
        <option>Name (A-Z) </option>
        <option>Name (Z-A)</option>
      </select>
    </div>
  );
};

export default Sort;
