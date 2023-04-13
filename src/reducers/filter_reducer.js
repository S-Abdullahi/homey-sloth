import {
  GET_FILTER_PRODUCT,
  GET_FULL_PRODUCT,
  SORT_PRODUCTS,
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === GET_FILTER_PRODUCT) {
    return { ...state, filteredProducts: action.payload };
  }
  if (action.type === GET_FULL_PRODUCT) {
    return { ...state, all_products: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    let newSort;
    let value = action.payload;
    switch (value) {
      case "price-lowest":
        newSort = state.all_products.sort((a, b) => a.price - b.price);
        break;
      case "price-highest":
        newSort = state.all_products.sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        newSort = state.all_products.sort((a, b) => {
          if (a.name < b.name) return -1;
        });
        break;
      case "name-z-a":
        newSort = state.all_products.sort((a, b) => {
          if (a.name > b.name) return 1;
        });
        break;
      default:
    }
    console.log(newSort);
    return { ...state, sort: action.payload, filteredProducts: newSort };
  }
};

export default filterReducer;
