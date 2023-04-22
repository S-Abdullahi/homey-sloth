import {
  GET_FILTER_PRODUCT,
  GET_FULL_PRODUCT,
  SORT_PRODUCTS,
  UPDATE_SORT_PRODUCT,
  FILTER_PRODUCT,
  UPDATE_FILTER,
  CLEAR_FILTER,
  GET_PRICE,
} from "../actions";

const filterReducer = (state, action) => {
  if (action.type === GET_FILTER_PRODUCT) {
    return { ...state, filteredProducts: action.payload };
  }
  if (action.type === GET_FULL_PRODUCT) {
    return {
      ...state,
      all_products: [...action.payload],
      filteredProducts: [...action.payload],
    };
  }
  if (action.type === GET_PRICE) {
    // console.log(state.all_products)
    const priceArray = state.all_products?.map((p) => p.price);
    const maxPrice = Math.max(...priceArray);
    return {
      ...state,
      filter: { ...state.filter, price: maxPrice, max_price: maxPrice },
    };
  }

  if (action.type === UPDATE_SORT_PRODUCT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;
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
  if (action.type === UPDATE_FILTER) {
    const { name, value } = action.payload;
    return { ...state, filter: { ...state.filter, [name]: value } };
  }
  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filter: {
        ...state.filter,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filter.max_price,
        shipping: false,
      },
    };
  }
  if (action.type === FILTER_PRODUCT) {
    const { all_products, filter } = state;
    const { text, company, category, price, color, shipping } = filter;

    let tempArray = [...all_products];
    if (text) {
      tempArray = tempArray.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    if (company) {
      if (company !== "all") {
        tempArray = tempArray.filter((product) => {
          return product.company.toLowerCase() === company;
        });
      }
    }
    if (category) {
      if (category !== "all") {
        tempArray = tempArray.filter(
          (product) => product.category.toLowerCase() === category
        );
      }
    }
    if (color) {
      if (color !== "all") {
        tempArray = tempArray.filter((product) => {
          return product.colors.find((col) => col === color);
        });
      }
    }
    if (shipping) {
      tempArray = tempArray.filter((product) => product.shipping === shipping);
    }
    if (price) {
      tempArray = tempArray.filter((product) => product.price <= price);
    }
    return { ...state, filteredProducts: tempArray };
  }
};

export default filterReducer;
