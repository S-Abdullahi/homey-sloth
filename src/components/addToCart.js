import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import Amount from "./Amount";
import { useProductContext } from "../context/Products_Context";
import { useCartContext } from "../context/Cart_Context";
import { Link } from "react-router-dom";

const AddToCart = ({colors,stock, uniqueid, singleData }) => {
  const {addToCart} = useCartContext()
  const [amount, setAmount] = useState(1);
  const [colorIcon, setColorIcon] = useState(singleData?.colors[0]);

  function increase() {
    setAmount((oldValue) => {
      let tempValue = oldValue + 1;
      if (tempValue > stock) {
        tempValue = stock;
      }
      return tempValue;
    });
  }

  function decrease() {
    setAmount((oldValue) => {
      let tempValue = oldValue - 1;
      if (tempValue < stock) {
        tempValue = 1;
      }
      return tempValue;
    });
  }

  return (
    <div>
      <div className="gap-10 mt-5">
        {/* <p className="font-bold flex">
          Colors:
          {colors.map((color) => {
            return (
              <button
                className={`rounded-full w-5 h-5 ml-5 flex justify-center items-center`}
                style={{
                  background: `${color}`,
                  opacity: `${colorIcon === color ? 1 : 0.5}`,
                }}
                onClick={() => setColorIcon(color)}
              >
                {colorIcon === color ? (
                  <BsCheck className="text-white" />
                ) : null}
              </button>
            );
          })}
        </p> */}
        <div>
          <Amount
            increase={increase}
            decrease={decrease}
            amount={amount}
            uniqueid={uniqueid}
          />
          <button
            className="btn mt-5"
            onClick={() => {
              addToCart(uniqueid, colorIcon, amount, singleData);
            }}
          >
            <Link to="/cart">ADD TO CART</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
