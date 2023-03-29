import React from "react";

const CartTotal = () => {
  return (

    <div className="flex justify-center md:justify-end my-10">
        <div className="mx-10 w-1/2 md:w-1/4 md:mx-40 flex flex-col gap-5 mb-10">
      <div className="border rounded p-4">
        <div className="flex justify-between">
          <div className=" mb-5 text-left">
            <p className="text-base font-bold tracking-wide">Subtotal:</p>
            <p className="text-base tracking-wide">Shipping Fee:</p>
          </div>
          <div className="text-left">
            <p className="text-base font-bold">$125.99</p>
            <p className="text-base">$5.34</p>
          </div>
        </div>
        <hr/>
        <div className="flex justify-between mt-5">
            <p className="font-bold">Order Total :</p>
            <p className="font-bold">$150.33</p>
        </div>
      </div>

      <button className="bg-stone-500 rounded text-base py-2 text-white">Login</button>
    </div>
    </div>
  );
};

export default CartTotal;
