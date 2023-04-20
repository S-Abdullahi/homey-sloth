import React from "react";
import { BreadCrumb, Filters, GridView, ListView } from "../components";
import { useProductContext } from "../context/Products_Context";
import { useFilterContext } from "../context/Filter_Context";

const Products = () => {
  const { state } = useProductContext();
  const { gridView, listView } = state;
  const { all_products, filteredProducts } = useFilterContext();
  // const { all_products, filteredProducts } = filterState;
  return (
    <div className="text-2xl text-center">
      <BreadCrumb title="Product" />
      <div className="grid px-10 md:grid-cols-12 md:gap-10 md:pl-40 relative mt-20 mb-10">
        <Filters />
        {gridView && (
          <GridView
            allProduct={all_products}
            filteredProducts={filteredProducts}
          />
        )}
        {listView && (
          <ListView
            allProduct={all_products}
            filteredProducts={filteredProducts}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
