import React from "react";
import Sort from "./Sort";
import Item from "./Item";
import Loading from "./Loading";
import { useProductContext } from "../context/Products_Context";
import { Link } from "react-router-dom";

const GridView = ({allProduct, filteredProduct}) => {
  const {setSingleProductID, state } = useProductContext();
  const {products, isLoading} = state
  return (
    <div className="col-span-10 md:pr-40 md:h-screen overflow-scroll scrollbar-hide">
      <Sort />
      {/* <Loading/> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((el) => (
            <Link to={`/products/${el.id}`} key={el.id}>
              <Item {...el} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default GridView;
