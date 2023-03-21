import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import {AiOutlineUnorderedList} from 'react-icons/ai'
import { useProductContext } from "../context/Products_Context";

const Sort = () => {
  const {displayGridView, displayListView, state} = useProductContext()
  const {gridView, listView} = state
  return (
    <div className="flex items-center gap-4 align-bottom text-sm text-stone-500 mb-5">
      <BsFillGridFill className={`${gridView ? 'active-view' : 'inactive-view'}`} onClick={()=>displayGridView()}/>
      <AiOutlineUnorderedList className={`${listView ? 'active-view' : 'inactive-view'}`} onClick={()=>displayListView()}/>
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
