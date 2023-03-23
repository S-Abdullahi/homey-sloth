import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/Products_Context";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";
import axios from "axios";

const EachProduct = () => {
  const { id } = useParams();
  const { state, increaseProductCount } = useProductContext();
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const singleProductAmount = state.productAmount.find(product => product.id === id)
  console.log(singleProductAmount)

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
    id: sid,
    images,
    name,
    category,
    description,
    price,
    reviews,
    shipping,
    starts,
    stock,
    company,
  } = singleProduct;

  let inStock;
  if (stock > 1) {
    inStock = "In Stock";
  } else {
    inStock = "Not In Stock";
  }
  return (
    <div className="my-20 mx-10 md:mx-40">
      <Link to="/products">
        <button className="btn px-40 mb-10">BACK TO PRODUCTS</button>
      </Link>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2">
          <div className="mb-10">
            <img
              src={images[0]?.url}
              alt={images[0]?.filename}
              className="rounded w-full object-cover"
            />
          </div>
          <div className="flex justify-between gap-2 mt-[-30px]">
            {images.map((image) => {
              return (
                <div className="w-36 h-29">
                  <img
                    src={image?.thumbnails?.small?.url}
                    key={image.filename}
                    alt={image?.filename}
                    className="rounded w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="section-head">{name}</h3>
          <p className="text-gray-400">({reviews} customer reviews)</p>
          <h5 className="font-bold text-yellow-700 text-2xl">$ {price}</h5>
          <p className="leading-8 mt-5 text-gray-500">{description}</p>
          <div className="flex gap-5 mt-5">
            <div className="font-bold leading-8">
              <p>Available:</p>
              <p>SKU:</p>
              <p>Brand:</p>
            </div>
            <div className="leading-8">
              <p>{inStock}</p>
              <p>{sid}</p>
              <p>{company}</p>
            </div>
          </div>
          <hr className="mt-2" />
          <div className="flex gap-10 mt-5">
            <p className="font-bold">Colors:</p>
            <div>color con</div>
          </div>
          <div className="flex  gap-6 mt-2">
            <button className="text-2xl">-</button>
            <p className="text-2xl font-bold">{singleProductAmount.amount}</p>
            <button className="text-2xl" onClick={()=> increaseProductCount(id)}>+</button>
          </div>
          <button className="btn mt-5">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
