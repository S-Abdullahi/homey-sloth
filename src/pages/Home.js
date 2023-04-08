import React from "react";
import { useProductContext } from "../context/Products_Context";
import { FeaturedProduct, Hero, JoinNewsletter, MissionVision } from "../components/home";

const Home = () => {
  const {state } = useProductContext();
  const {products} = state
  const featuredProduct = products.slice(0, 3);
  return (
    <div>
      {/* Hero section */}
      <Hero/>
      {/* FEATURED PRODUCTS */}
      <FeaturedProduct/>
      {/* Mission and Vision */}
      <MissionVision/>
      {/* Join Our Newsletter */}
      <JoinNewsletter/>
    </div>
  );
};

export default Home;
