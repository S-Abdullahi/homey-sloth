import React, { useState, useEffect, useContext, useReducer } from "react";
import filterReducer from "../reducers/filter_reducer";
import { useProductContext } from "./Products_Context";
import {
  GET_FULL_PRODUCT,
  GET_FILTER_PRODUCT,
  SORT_PRODUCTS,
  UPDATE_SORT_PRODUCT,
  FILTER_PRODUCT,
  UPDATE_FILTER,
  CLEAR_FILTER,
  GET_PRICE
} from "../actions";

const initialState = {
  all_products: [],
  filteredProducts: [],
  sort: "price-lowest",
  filter: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false
  }
};


const filterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { state: product_state } = useProductContext();
  function getFullProducts() {
    dispatch({ type: GET_FULL_PRODUCT, payload: product_state.products });
    dispatch({type: GET_PRICE})
  }
  function getFilteredProducts() {
    dispatch({ type: GET_FILTER_PRODUCT });
  }

  function sortProduct(e) {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT_PRODUCT, payload: value });
  }

  function updateFilter(e){
    const name = e.target.name
    let value = e.target.value
    switch(name){
        case 'category':
            value = e.target.textContent;
            break;
        case 'color':
            value = e.target.dataset.color;
            break;
        case 'price':
            value = Number(value);
            break;
        case 'shipping':
            value = e.target.checked
            break;
        default:
        }
    dispatch({type: UPDATE_FILTER, payload: {name, value}})
  }

  function clearFilter(){
    dispatch({type: CLEAR_FILTER})
  }

  useEffect(() => {
    getFullProducts();
  }, [product_state.products]);

  useEffect(()=>{
    dispatch({type: SORT_PRODUCTS})
    dispatch({type: FILTER_PRODUCT})
  },[product_state.products, state.sort, state.filter])


  return (
    <filterContext.Provider value={{ ...state, sortProduct, updateFilter, clearFilter }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};
