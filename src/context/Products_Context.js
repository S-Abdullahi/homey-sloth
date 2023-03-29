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
  LOADING_PRODUCT
} from "../actions";

const initialState = {
  openSideBar: false,
  closeSideBar: true,
  gridView: true,
  listView: false,
  isLoading: true,
  products: [],
  productAmount: []
};

const GET_PRODUCT_DATA = "GET_PRODUCT_DATA";

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
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
  function increaseProductCount(id){
    dispatch({type: INCREASE_PRODUCT, payload:id})
  }

  const getData = async () => {
    try {
      // setIsLoading(true);
      dispatch({type: LOADING_PRODUCT})
      const res = await axios.get(
        "https://course-api.com/react-store-products"
      );
      dispatch({type: DISPLAY_PRODUCTS, payload: res.data })
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        productData,
        isLoading,
        setIsLoading,
        singleProductID,
        setSingleProductID,
        openSideBarPanel,
        closeSideBarPanel,
        displayGridView,
        displayListView,
        increaseProductCount,
        state,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
