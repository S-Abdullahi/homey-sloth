import React from "react";
import { useFilterContext } from "../context/Filter_Context";
import { getUniqueValues, priceFormat } from "../utils/constants";
import {FaCheck} from 'react-icons/fa'

const Filters = () => {
  const {
    updateFilter,
    all_products,
    filter: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    clearFilter
  } = useFilterContext();

  // getting unique filter values
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");
  return (
    <div className="col-span-2 md:h-screen p-2 text-sm text-left text-gray-500 ">
      <form action="" method="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          name="text"
          className="w-full rounded p-1 border"
          value={text}
          onChange={updateFilter}
        />
        {/* category filter */}
        <div className="flex flex-col items-left mt-5">
          <h4 className="font-bold">Category</h4>
          {categories.map((cat) => {
            return (
              <button
                type="button"
                name="category"
                key={cat}
                className={`w-0 ${category === cat && 'bg-gray-400'}`}
                onClick={updateFilter}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* company filter */}
        <div className="my-5">
          <h4 className="font-bold mb-2">Company</h4>
          <select
            name="company"
            className="rounded p-1 cursor-pointer border"
            value={company}
            onChange={updateFilter}
          >
            {companies.map((com) => {
              return (
                <option key={com} value={com}>
                  {com}
                </option>
              );
            })}
          </select>
        </div>

        {/* color filter */}
        <div className="my-5">
          <h4 className="font-bold mb-2">Colors</h4>
          <div className="flex gap-1 items-center">
            {colors.map((col, index) => {
              return (
                <button
                  className={`w-4 h-4 rounded-full`}
                  key={index}
                  style={{ backgroundColor: `${col}`}}
                  data-color={col}
                  name='color'
                  onClick={updateFilter}
                >
                  {col === "all" ? "all" : (color===col?  <FaCheck className="text-white"/> : null)}
                </button>
              );
            })}
          </div>
        </div>

        {/* price filter */}
        <div>
          <h4>{priceFormat(price)}</h4>
          <input type='range' min={min_price} max={max_price} onChange={updateFilter} name='price' value={price}/>
        </div>

            {/* shipping filter */}
        <div className="flex justify-between w-full items-center">
          <label htmlFor="shipping">Free Shipping</label>
          <input type="checkbox" id="shipping" name="shipping" onChange={updateFilter} checked={shipping}/>
        </div>

        {/* clear filter */}
        <button className="bg-red-500 my-5 p-1 px-2 rounded text-black" onClick={clearFilter}>
          Clear Filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
