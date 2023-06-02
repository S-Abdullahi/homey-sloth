import React, {useContext, useReducer, useEffect} from "react";
import cartReducer from '../reducers/CartReducer'
import { useProductContext } from "./Products_Context";
import { ADD_TO_CART, INCREASE_PRODUCT, DECREASE_PRODUCT, CLEAR_CART, DELETE_ITEM, SUBTOTAL } from "../actions";

const CartContext = React.createContext()

function getLocalStorage(){
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return []
    }
}

const initialState = {
    cart: getLocalStorage(),
    shippingFee: 50,
    subtotal: 0,
    grandTotal: 0
}

export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, initialState)

    function addToCart(id, color, amount, product){
        dispatch({type: ADD_TO_CART, payload: {id, color, amount, product}})
    }

    function clearCart(){
        dispatch({type: CLEAR_CART})
    }

    function deleteItem(id){
        dispatch({type: DELETE_ITEM, payload: id})
    }

    useEffect(()=>{
        dispatch({type: SUBTOTAL})
        localStorage.setItem('cart', JSON.stringify(state.cart))
    },[state.cart])


    return <CartContext.Provider value={{...state, addToCart, clearCart, deleteItem}}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () =>{
    return useContext(CartContext)
}

