import React from "react";
import { BreadCrumb, Filters, GridView } from "../components";
import dummy from "../assets/dummy.jpg";

const Products = () => {
  return (
    <div className="text-2xl text-center">
      <BreadCrumb title="Product" />
      <div className="grid grid-cols-12 gap-10 pl-40 relative mt-20 mb-10">
        <Filters />
        <GridView />
      </div>
    </div>
  );
};

export default Products;
