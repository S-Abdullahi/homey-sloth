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
  
};

export default reducer;
