import React, { useContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/reducer";
import {
  OPEN_SIDE_BAR,
  CLOSE_SIDE_BAR,
  GRID_VIEW,
  LIST_VIEW,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  DISPLAY_PRODUCTS,
  LOADING_PRODUCT,
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_ITEM,
  GET_SINGLE_DATA,
  ERROR_LOADING,
  LOADING_SINGLE_PRODUCT,
  ERROR_SINGLE_PRODUCT,
  DISPLAY_ALL_PRODUCTS
} from "../actions";

const initialState = {
  openSideBar: false,
  closeSideBar: true,
  gridView: true,
  listView: false,
  isLoading: true,
  isLoadingSingle: true,
  isErrorSingle: false,
  isError: false,
  products: [],
  productAmount: [],
  cart: [],
  sigleData: [],
};


const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [singleProductID, setSingleProductID] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  function openSideBarPanel() {
    dispatch({ type: OPEN_SIDE_BAR });
  }

  function closeSideBarPanel() {
    dispatch({ type: CLOSE_SIDE_BAR });
  }

  function displayGridView() {
    dispatch({ type: GRID_VIEW });
  }

  function displayListView() {
    dispatch({ type: LIST_VIEW });
  }
  function increaseProductCount(id) {
    dispatch({ type: INCREASE_PRODUCT, payload: id });
  }
  function addToCart(id) {
    dispatch({ type: ADD_TO_CART, payload: id });
  }
  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }
  function deleteCartItem(id) {
    dispatch({ type: DELETE_ITEM, payload: id });
  }
  const getSingleData = async (id) => {
    try {
      dispatch({ type: LOADING_SINGLE_PRODUCT });
      const singleData = await axios.get(`https://course-api.com/react-store-single-product?id=${id}`);
      dispatch({ type: GET_SINGLE_DATA, payload: singleData.data });
    } catch(err) {
      dispatch({type: ERROR_SINGLE_PRODUCT})
    }
  }

  // calculating subTotal
  const shippingFee = 5.25;
  const subTotal = state.cart
    .map((item) => item?.price)
    .reduce((acc, curr) => acc + curr, 0);
  const orderTotal = subTotal + shippingFee;

  const getData = async () => {
    try {
      dispatch({ type: LOADING_PRODUCT });
      const res = await axios.get(
        "https://course-api.com/react-store-products"
      );
      dispatch({ type: DISPLAY_PRODUCTS, payload: res.data });
    } catch (error) {
      dispatch({type: ERROR_LOADING})
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        setIsLoading,
        singleProductID,
        setSingleProductID,
        openSideBarPanel,
        closeSideBarPanel,
        displayGridView,
        displayListView,
        increaseProductCount,
        addToCart,
        clearCart,
        deleteCartItem,
        subTotal,
        shippingFee,
        orderTotal,
        state,
        getSingleData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
