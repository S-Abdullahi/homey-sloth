import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState([])
  useEffect(() => {
    try {
      axios
        .get("https://course-api.com/react-store-products")
        .then((response) => setProductData(response.data));
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return <ProductContext.Provider value={{productData}}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
