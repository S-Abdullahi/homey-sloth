import React, { useState, useEffect, useContext, useReducer } from "react";
import filterReducer from "../reducers/filter_reducer";
import { useProductContext } from "./Products_Context";
import {
  GET_FULL_PRODUCT,
  GET_FILTER_PRODUCT,
  SORT_PRODUCTS,
  UPDATE_SORT_PRODUCT
} from "../actions";

const initialState = {
  all_products: [],
  filteredProducts: [],
  sort: "",
};
const filterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { state: product_state } = useProductContext();

  function getFullProducts() {
    dispatch({ type: GET_FULL_PRODUCT, payload: product_state.products });
  }
  function getFilteredProducts() {
    dispatch({ type: GET_FILTER_PRODUCT });
  }

  function sortProduct(e) {
    const value = e.target.value;
    dispatch({ type: SORT_PRODUCTS, payload: value });
    console.log(value);
  }

  function updateSort() {
    dispatch({type: UPDATE_SORT_PRODUCT});
  }

  useEffect(() => {
    getFullProducts();
  }, [product_state.products]);

  console.log(state.all_products);

  return (
    <filterContext.Provider value={{ state, sortProduct }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};