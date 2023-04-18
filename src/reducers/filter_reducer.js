import {
  GET_FILTER_PRODUCT,
  GET_FULL_PRODUCT,
  SORT_PRODUCTS,
  UPDATE_SORT_PRODUCT
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === GET_FILTER_PRODUCT) {
    return { ...state, filteredProducts: action.payload };
  }
  if (action.type === GET_FULL_PRODUCT) {
    return { ...state, all_products: [...action.payload], filteredProducts: [...action.payload] };
  }

  if(action.type === UPDATE_SORT_PRODUCT){
    return {...state, sort: action.payload}
  }
  if (action.type === SORT_PRODUCTS) {
    const { all_products, sort } = state;
    let newSort = [...all_products];
    let value = sort;
    switch (value) {
      case "price-lowest":
        newSort = newSort.sort((a, b) => a.price - b.price);
        break;
      case "price-highest":
        newSort = newSort.sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        newSort = newSort.sort((a, b) => {
          if (a.name < b.name) return -1;
        });
        break;
      case "name-z-a":
        newSort = newSort.sort((a, b) => {
          if (a.name > b.name) return -1;
        });
        break;
      default:
    }
    return { ...state, filteredProducts: newSort };
  }
  
};

export default filterReducer;
