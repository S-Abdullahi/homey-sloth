import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/Products_Context";
import { Link, useParams } from "react-router-dom";
import { BreadCrumb, Loading } from "../components";
import axios from "axios";
import Error from "./Error";
import {SingleProductDesc, SingleProductImages} from "../components";
import {AiFillCheckCircle} from 'react-icons/ai'
import AddToCart from "../components/addToCart";


const EachProduct = () => {
  const { id } = useParams();
  const { state, increaseProductCount, addToCart, getSingleData} =
    useProductContext();
    const {singleData, isLoadingSingle} = state
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const singleProductAmount = state.productAmount.find(
    (product) => product.id === id
  );

  useEffect(()=>{
    getSingleData(id)
  },[id])

  if (isLoadingSingle) {
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
    colors
  } = singleData;
  console.log(singleData)

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
          <SingleProductDesc {...singleData} inStock={inStock}/>
          <hr className="mt-2" />
          <AddToCart {...singleData} uniqueid={id}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default EachProduct;
