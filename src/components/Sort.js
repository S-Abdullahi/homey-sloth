import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useProductContext } from "../context/Products_Context";
import { useFilterContext } from "../context/Filter_Context";

const Sort = () => {
  const { displayGridView, displayListView, state } = useProductContext();

  const { state: filterState, sortProduct } = useFilterContext();

  const { gridView, listView } = state;
  return (
    <div className="flex items-center gap-4 align-bottom text-sm text-stone-500 mb-5">
      <BsFillGridFill
        className={`${gridView ? "active-view" : "inactive-view"}`}
        onClick={() => displayGridView()}
      />
      <AiOutlineUnorderedList
        className={`${listView ? "active-view" : "inactive-view"}`}
        onClick={() => displayListView()}
      />
      <p> 21 Products Found</p>
      <hr className="grow" />
      <p>Sort By</p>
      <select
        value={filterState.sort}
        onChange={sortProduct}
        className="cursor-pointer"
      >
        <option value="price-lowest">Price (Lowest) </option>
        <option value="price-highest">Price (highest) </option>
        <option value="name-a-z">Name (A-Z) </option>
        <option value="name-z-a">Name (Z-A)</option>
      </select>
    </div>
  );
};

export default Sort;
