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
  DELETE_ITEM
} from "../actions";

const reducer = (state, action) => {
  if (action.type === OPEN_SIDE_BAR) {
    return { ...state, openSideBar: true, closeSideBar: false };
  }
  if (action.type === CLOSE_SIDE_BAR) {
    return { ...state, closeSideBar: true, openSideBar: false };
  }
  if (action.type === GRID_VIEW) {
    return { ...state, gridView: true, listView: false };
  }
  if (action.type === LIST_VIEW) {
    return { ...state, listView: true, gridView: false };
  }
  if (action.type === DISPLAY_PRODUCTS) {
    const productAmountArray = action.payload.map(product => {
        return {id: product.id, amount: 1}
    })
    return { ...state, products: action.payload, isLoading: false, productAmount: productAmountArray };
  }
  if(action.type === LOADING_PRODUCT){
    return {...state, isLoading: true}
  }
  if(action.type === INCREASE_PRODUCT){
  
    const newArray = state.productAmount.map((item)=> {
        if(item.id === action.payload.id){
            return {...item, amount: item.amount + 1}
        }
        return item
    })

    console.log(newArray)
    return {...state, productAmount: newArray}
  }
  if(action.type === ADD_TO_CART){
    const itemToCart = state.products.find(product => product.id === action.payload)
    return {...state, cart: [...state.cart, itemToCart]}
  }
  if(action.type === CLEAR_CART){
    return {...state, cart: []}
  }
  if(action.type === DELETE_ITEM){
    const newArray = state.cart.filter(item => item.id !== action.payload)
    return {...state, cart: newArray}
  }
  
};

export default reducer;
