import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useProductContext } from "../context/Products_Context";
import { useFilterContext } from "../context/Filter_Context";

const Sort = () => {
  const { displayGridView, displayListView, state } = useProductContext();
  const { sort, sortProduct, filteredProducts } = useFilterContext();
  const { gridView, listView } = state;
  return (
    <div className="flex items-center gap-[2px] sm:gap-4 align-bottom text-sm text-stone-500 mb-5">
      <BsFillGridFill
        className={`${gridView ? "active-view" : "inactive-view"} hidden sm:block`}
        onClick={() => displayGridView()}
      />
      <AiOutlineUnorderedList
        className={`${listView ? "active-view" : "inactive-view"} hidden sm:block`}
        onClick={() => displayListView()}
      />
      <p className="">{filteredProducts.length} Products Found</p>
      <hr className="grow" />
      <p>Sort By</p>
      <select
        value={sort}
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
