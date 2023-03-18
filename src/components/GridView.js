import React from "react";
import Sort from "./Sort";
import Item from "./Item";
import Loading from "./Loading";
import { useProductContext } from "../context/Products_Context";
import { Link } from "react-router-dom";

const GridView = () => {
  const { productData, isLoading, setSingleProductID } = useProductContext();
  return (
    <div className="col-span-10 md:pr-40 md:h-screen overflow-scroll scrollbar-hide">
      <Sort />
      {/* <Loading/> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {productData.map((el) => (
            <Link to={`/products/${el.id}`}>
              <Item key={el.id} {...el} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default GridView;
