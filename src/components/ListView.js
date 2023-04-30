import React from "react";
import Sort from "./Sort";
import ListViewItem from "./ListViewItem";
import Loading from "./Loading";
import { useProductContext } from "../context/Products_Context";
import SearchNotFound from "./searchNotFound";

const ListView = ({filteredProducts}) => {
  const {state } = useProductContext();
  const { products, isLoading } = state;
  return (
    <div className="col-span-12 md:col-span-9 lg:col-span-10 md:pr-20 md:h-screen overflow-scroll scrollbar-hide">
      <Sort />
      {isLoading ? <Loading/> : filteredProducts < 1 ? <SearchNotFound/> : (
        <div>
          {filteredProducts.map((product) => {
            return <ListViewItem key={product.id} {...product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ListView;
