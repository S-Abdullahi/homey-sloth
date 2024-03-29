import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/Products_Context";
import Item from "../Item";
import Loading from "../Loading";
import {motion} from "framer-motion";

const FeaturedProduct = () => {
  const { state } = useProductContext();
  const { products, isError, isLoading } = state;
  const featuredProduct = products.slice(0, 3);

  return (
    <section className="bg-stone-100 px-5 md:px-40 py-20 mt-20 text-center">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: "1", delay: "0.5" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center pb-3">
          Featured Products
        </h2>
        <div className="section-head-underline mx-auto"></div>
        <div className="md:grid md:grid-cols-3 mb-10 gap-10">
          {isLoading && (
            <div className="col-span-3 text-center">
              <Loading />
            </div>
          )}
          {isError ? (
            <div className="text-xl font-bold col-span-3">
              <p className="text-center">Something went wrong...</p>
            </div>
          ) : (
            featuredProduct.map((el) => (
              <Link to={`/products/${el.id}`} key={el.id} className="">
                <Item key={el.id} {...el} />
              </Link>
            ))
          )}
        </div>
        <button className="btn ">
          <Link to="/products">All Products</Link>
        </button>
      </motion.div>
    </section>
  );
};

export default FeaturedProduct;
