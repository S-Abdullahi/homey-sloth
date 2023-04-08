import React from "react";
import Sort from "./Sort";
import ListViewItem from "./ListViewItem";
import Loading from "./Loading";
import { useProductContext } from "../context/Products_Context";

const ListView = () => {
  const {state } = useProductContext();
  const { products, isLoading } = state;
  return (
    <div className="col-span-10 md:pr-20 md:h-screen overflow-scroll scrollbar-hide">
      <Sort />
      {isLoading ? <Loading/> : (
        <div>
          {products.map((product) => {
            return <ListViewItem key={product.id} {...product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ListView;
