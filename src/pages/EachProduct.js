import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/Products_Context";
import { Link, useParams } from "react-router-dom";
import { BreadCrumb, Loading } from "../components";
import axios from "axios";
import Error from "./Error";
import {SingleProductDesc, SingleProductImages} from "../components";


const EachProduct = () => {
  const { id } = useParams();
  const { state, increaseProductCount, addToCart} =
    useProductContext();
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const singleProductAmount = state.productAmount.find(
    (product) => product.id === id
  );

  const getSingleProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://course-api.com/react-store-single-product?id=${id}`
      );
      setSingleProduct(res.data);
      //   console.log(res.data)
      setLoading(false);
    } catch (err) {
      <Error />;
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const {
    images,
    name,
    stock,
  } = singleProduct;

  let inStock;
  if (stock > 1) {
    inStock = "In Stock";
  } else {
    inStock = "Not In Stock";
  }
  return (
    <>
    <BreadCrumb title='Products' product={name}/>
    <div className="my-20 mx-10 md:mx-40">
      <Link to="/products">
        <button className="btn px-40 mb-10">BACK TO PRODUCTS</button>
      </Link>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <SingleProductImages images={images} />
        <div>
          <SingleProductDesc {...singleProduct} inStock={inStock}/>
          <hr className="mt-2" />
          <div className="flex gap-10 mt-5">
            <p className="font-bold">Colors:</p>
            <div>color con</div>
          </div>
          <div className="flex  gap-6 mt-2">
            <button className="text-2xl">-</button>
            <p className="text-2xl font-bold">{singleProductAmount.amount}</p>
            <button
              className="text-2xl"
              onClick={() => increaseProductCount(id)}
            >
              +
            </button>
          </div>
          <button
            className="btn mt-5"
            onClick={() => {
              addToCart(id);
            }}
          >
            <Link to="/cart">ADD TO CART</Link>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default EachProduct;
