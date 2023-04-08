import React from "react";
import { BreadCrumb, Filters, GridView, ListView } from "../components";
import { useProductContext } from "../context/Products_Context";

const Products = () => {
  const {state} = useProductContext()
  const {gridView, listView} = state
  return (
    <div className="text-2xl text-center">
      <BreadCrumb title="Product" />
      <div className="grid px-10 md:grid-cols-12 md:gap-10 md:pl-40 relative mt-20 mb-10">
        <Filters />
        {gridView && <GridView/>}
        {listView && <ListView/>}
      </div>
    </div>
  );
};

export default Products;
