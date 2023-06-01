import { ADD_TO_CART, INCREASE_PRODUCT, DECREASE_PRODUCT, CLEAR_CART } from "../actions";

const cartReducer = (state, action) => {
  let actionType = action.type;
  switch (actionType) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      let tempItem = state.cart?.find((i) => i.id === id + color);
      if (tempItem) {
        const tempCart = state.cart?.map((cartItem)=>{
            if(cartItem.id === id+color){
                let newAmount = cartItem.amount + amount
                if(newAmount > cartItem.max){
                    newAmount = cartItem.max
                }
                return {...cartItem, amount: newAmount}
            }else{
                return cartItem
            }
        })

        return {...state, cart: tempCart}
      } else {
        let subtotal = product?.price * amount
        const newItem = {
          id: id + color,
          name: product?.name,
          amount,
          color,
          image: product?.images[0]?.url,
          price: product?.price,
          max: product?.stock,
          subtotal
        };
        return { ...state, cart: [...state.cart, newItem] };
      }

    case CLEAR_CART:
      return {...state, cart: []}
      break;

    default:
      throw new Error(`no matching ${actionType} - action type`);
  }
};

export default cartReducer;