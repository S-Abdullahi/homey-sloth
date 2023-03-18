import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [singleProductID, setSingleProductID] = useState('')

  const getData = async () =>{
    try{
        setIsLoading(true)
        const res = await axios.get("https://course-api.com/react-store-products")
        setProductData(res.data)
        setIsLoading(false)
    } catch (error){
        console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, []);
  return (
    <ProductContext.Provider value={{ productData, isLoading,setIsLoading, singleProductID, setSingleProductID }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
