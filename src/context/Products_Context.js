import React, { useContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/reducer";
import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR, GRID_VIEW, LIST_VIEW } from "../actions";

const initialState = {
  openSideBar: false,
  closeSideBar: true,
  gridView:true,
  listView: false
}

const GET_PRODUCT_DATA = 'GET_PRODUCT_DATA'

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [singleProductID, setSingleProductID] = useState('')

  const [state, dispatch] = useReducer(reducer, initialState)

  function openSideBarPanel(){
    dispatch({type: OPEN_SIDE_BAR})
  }

  function closeSideBarPanel(){
    dispatch({type: CLOSE_SIDE_BAR})
  }
  
  function displayGridView(){
    dispatch({type: GRID_VIEW})
  }

  function displayListView(){
    dispatch({type: LIST_VIEW})
  }


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
    <ProductContext.Provider value={{ productData, isLoading,setIsLoading, singleProductID, setSingleProductID, openSideBarPanel, closeSideBarPanel,displayGridView, displayListView, state }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
