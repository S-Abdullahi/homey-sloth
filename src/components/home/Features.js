import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/Products_Context";
import Item from "../Item";

const FeaturedProduct = () => {
    const {state} = useProductContext()
    const {products} = state
    const featuredProduct = products.slice(0, 3);
  
    return (<section className="bg-stone-100 px-10 md:px-40 py-20 mt-20 text-center">
    <h2 className="text-4xl font-bold text-center pb-3">
      Featured Products
    </h2>
    <div className="section-head-underline mx-auto"></div>
    <div className="md:grid md:grid-cols-3 mb-10 gap-10">
      {featuredProduct.map((el) => (
        <Link to={`/products/${el.id}`}>
          <Item key={el.id} {...el} />
        </Link>
      ))}
    </div>
    <button className="btn ">
      <Link to="/products">ALL PRODUCTS</Link>
    </button>
  </section>)
}

export default FeaturedProduct