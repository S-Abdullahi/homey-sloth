import React, {useContext, useReducer} from "react";
import cartReducer from '../reducers/CartReducer'
import { useProductContext } from "./Products_Context";
import { ADD_TO_CART, INCREASE_PRODUCT, DECREASE_PRODUCT, CLEAR_CART } from "../actions";

const CartContext = React.createContext()

const initialState = {
    cart: []
}

export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, initialState)

    function addToCart(id, color, amount, product){
        dispatch({type: ADD_TO_CART, payload: {id, color, amount, product}})
    }

    function clearCart(){
        dispatch({type: CLEAR_CART})
    }


    return <CartContext.Provider value={{...state, addToCart, clearCart}}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () =>{
    return useContext(CartContext)
}

