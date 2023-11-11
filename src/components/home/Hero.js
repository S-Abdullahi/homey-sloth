import React from "react";
import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="px-5 lg:px-40 mt-10 md:mt-20 flex gap-4 md:justify-between">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: "1", delay: "0.5" }}
        whileInView={true}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7 md:pt-20 md:w-2/3">
          Design Your Comfort Zone
        </h1>
        <p className="section-paragraph md:w-10/12">
          Welcome to HomeySloth, your ultimate destination for exquisite and
          comfortable furniture that transforms houses into homes. At
          HomeySloth, we believe that every piece of furniture should not only
          be functional but also reflect your unique style and personality. Our
          curated collection boasts a fusion of timeless elegance and
          contemporary flair, offering a diverse range of high-quality
          furnishings to suit every taste and space.
        </p>
        <button className="btn">
          <Link to="/products">Shop Now</Link>
        </button>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: "1", delay: "0.5" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="hidden md:block md:w-2/5"
      >
        <img src={hero} alt="hero" className="" />
      </motion.div>
    </section>
  );
};

export default Hero;
