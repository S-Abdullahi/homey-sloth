import React from "react";

const Filters = () => {
  return (
    <div className="col-span-2 h-screen p-2 text-sm text-left text-gray-500">
      <input type="text" placeholder="Search" className="w-full rounded p-1 border" />
      <div className="flex flex-col items-left mt-5">
        <h4 className="font-bold">Category</h4>
        <button className="bg-blue-300 w-0">All</button>
        <button className="w-0">Office</button>
        <button className="w-0">Living Room</button>
        <button className="w-0">Kitchen</button>
        <button className="w-0">Bedroom</button>
        <button className="w-0">Dining</button>
        <button className="w-0">Kids</button>
      </div>
      <div className="my-5">
        <h4 className="font-bold mb-2">Company</h4>
        <select className="rounded p-1 cursor-pointer border">
            <option>all</option>
            <option>Marcos</option>
            <option>Liddy</option>
            <option>Ikia</option>
            <option>Caresa</option>
        </select>
      </div>
      <div className="my-5">
        <h4 className="font-bold mb-2">Colors</h4>
        <div className="flex gap-1 items-center">
            <button>All</button>
            <button className="w-4 h-4 rounded-full bg-green-400"></button>
            <button className="w-4 h-4 rounded-full bg-blue-400"></button>
            <button className="w-4 h-4 rounded-full bg-stone-400"></button>
            <button className="w-4 h-4 rounded-full bg-yellow-400"></button>
            <button className="w-4 h-4 rounded-full bg-gray-400"></button>
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <label htmlFor="shipping">Free Shipping</label>
        <input type='checkbox' id="shipping"/>
      </div>
      <button className="bg-red-500 my-5 p-1 px-2 rounded text-black">Clear Filters</button>
    </div>
  );
};

export default Filters;
