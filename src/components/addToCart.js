import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import Amount from "./Amount";
import { useProductContext } from "../context/Products_Context";
import { Link } from "react-router-dom";

const AddToCart = ({ colors, stock, uniqueid }) => {
  const [amount, setAmount] = useState(1);
  const [colorIcon, setColorIcon] = useState(colors[0]);
  const { addToCart } = useProductContext();

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
        <p className="font-bold flex">
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
        </p>
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
              addToCart(uniqueid);
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
