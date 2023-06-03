import { ADD_TO_CART, CLEAR_CART, DELETE_ITEM, SUBTOTAL } from "../actions";

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
                let newSubTotal = cartItem.price * newAmount
                return {...cartItem, amount: newAmount, subtotal: newSubTotal}
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
      break;

    case CLEAR_CART:
      return {...state, cart: []}
      break;
    case DELETE_ITEM:
      const newItem = state.cart.filter(item => item.id !== action.payload)
      return {...state, cart: newItem}
      break;
    case SUBTOTAL:
      const subtotal = state.cart.map(item => item.subtotal).reduce((acc, item) => acc + item, 0)
      const total = subtotal + state.shippingFee
      return {...state, subtotal: subtotal, grandTotal: total}
      break;
    default:
      throw new Error(`no matching ${actionType} - action type`);
  }
};

export default cartReducer;
