import {
  GET_FILTER_PRODUCT,
  GET_FULL_PRODUCT,
  SORT_PRODUCTS,
  UPDATE_SORT_PRODUCT,
  FILTER_PRODUCT,
  UPDATE_FILTER
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === GET_FILTER_PRODUCT) {
    return { ...state, filteredProducts: action.payload };
  }
  if (action.type === GET_FULL_PRODUCT) {
    const priceArray = state.all_products.map((p)=>p.price)
    const maxPrice = Math.max(...priceArray)
    return { ...state, all_products: [...action.payload], filteredProducts: [...action.payload], filter: {...state.filter, price: maxPrice, max_price: maxPrice} };
  }

  if(action.type === UPDATE_SORT_PRODUCT){
    return {...state, sort: action.payload}
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort , filteredProducts} = state;
    let newSort = [...filteredProducts];
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
  if(action.type === 'UPDATE_FILTER'){
    const {name, value} = action.payload
    return {...state, filter: {...state.filter, [name]: value }}
  }
};

export default filterReducer;
