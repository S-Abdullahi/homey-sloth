import React from "react";
import { useProductContext } from "../context/Products_Context";
import { useCartContext } from "../context/Cart_Context";
import { useUserContext } from "../context/User_Context";
import { priceFormat } from "../utils/constants";

const CartTotal = () => {
  const { state, subTotal, orderTotal } = useProductContext();
  const { subtotal, shippingFee, grandTotal } = useCartContext();
  const { loginWithRedirect, myUser } = useUserContext();
  return (
    <div className="flex justify-center md:justify-end my-10">
      <div className="mx-10 w-[70%] md:w-[40%] lg:mx-40 flex flex-col gap-8 mb-10">
        <div className="border rounded p-4">
          <div className="flex justify-between">
            <div className=" mb-5 text-left">
              <p className="text-base font-bold tracking-wide">Subtotal:</p>
              <p className="text-base tracking-wide">Shipping Fee:</p>
            </div>
            <div className="text-left">
              <p className="text-base font-bold">{priceFormat(subtotal)}</p>
              <p className="text-base">{priceFormat(shippingFee)}</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between mt-5">
            <p className="font-bold text-base md:text-lg lg:text-2xl">
              Order Total :{" "}
            </p>
            <p className="font-bold text-base md:text-lg lg:text-2xl">
              &nbsp; {priceFormat(grandTotal)}
            </p>
          </div>
        </div>

        {myUser ? (
          <button className="bg-stone-500 rounded text-base py-2 text-white">
            proceed to checkout
          </button>
        ) : (
          <button className="bg-stone-500 rounded text-base py-2 text-white" onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotal;
