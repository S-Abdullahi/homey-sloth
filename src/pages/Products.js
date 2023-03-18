import React from "react";
import { BreadCrumb, Filters, GridView } from "../components";
import dummy from "../assets/dummy.jpg";
import { useProductContext } from "../context/Products_Context";

const Products = () => {
  return (
    <div className="text-2xl text-center">
      <BreadCrumb title="Product" />
      <div className="grid px-10 md:grid-cols-12 md:gap-10 md:pl-40 relative mt-20 mb-10">
        <Filters />
        <GridView />
      </div>
    </div>
  );
};

export default Products;
