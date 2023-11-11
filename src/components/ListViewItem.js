import React from "react";
import { Link } from "react-router-dom";
import { priceFormat } from "../utils/constants";

const ListViewItem = ({ id, name, image, description, company, price }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  mb-10 gap-3 md:gap-10">
      {/* <div className='w-40 h-40'> */}
      <img
        src={image}
        alt={name}
        className="rounded h-60 w-full object-cover"
      />
      {/* </div> */}
      <div className="text-left flex flex-col items-start justify-center gap-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm font-bold text-yellow-500">
          {priceFormat(price)}
        </p>
        <p className="text-sm text-gray-500">{description.slice(0, 150)}...</p>
        <button className="text-xs bg-yellow-600 hover:bg-yellow-700 transition-all duration-200 text-white rounded px-2 py-1">
          <Link to={`/products/${id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ListViewItem;
