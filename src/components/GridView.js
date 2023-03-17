import React from "react";
import Sort from "./Sort";
import Item from "./Item";
import { useProductContext } from "../context/Products_Context";

const GridView = () => {
    const {productData} = useProductContext()
  return (
    <div className=" col-span-10 pr-40 h-screen overflow-scroll scrollbar-hide">
      <Sort />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {productData.map(el => <Item key={el} {...el}/>)}
      </div>
    </div>
  );
};

export default GridView;
