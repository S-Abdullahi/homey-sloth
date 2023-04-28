import React from "react";
import Sort from "./Sort";
import Item from "./Item";
import Loading from "./Loading";
import { useProductContext } from "../context/Products_Context";
import { useFilterContext } from "../context/Filter_Context";
import { Link } from "react-router-dom";
import SearchNotFound from "./searchNotFound";

const GridView = ({filteredProducts}) => {
  const {setSingleProductID, state } = useProductContext();
  // const {state: filteredState} = useFilterContext();
  // const {filteredProducts: filtered} = filteredState
  const {products, isLoading} = state
  return (
    <div className="col-span-10 md:pr-40 md:h-screen overflow-scroll scrollbar-hide">
      <Sort />
      {/* <Loading/> */}
      {isLoading ? (
        <Loading />
      ) : (filteredProducts.length < 1 ? <SearchNotFound/> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts?.map((el) => (
            <Link to={`/products/${el.id}`} key={el.id}>
              <Item {...el} />
            </Link>
          ))}
        </div>
      ))  }
    </div>
  );
};

export default GridView;
