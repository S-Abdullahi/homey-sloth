import React from 'react'
import hero from "../../assets/hero.jpg";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    
    <section className="px-5 lg:px-40 mt-10 md:mt-20 flex gap-4 md:justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7 md:pt-20 md:w-2/3">
            Design Your Comfort Zone
          </h1>
          <p className="section-paragraph md:w-10/12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <button className="btn">
            <Link to='/products'>SHOP NOW</Link>
          </button>
        </div>
        <div className="hidden md:block md:w-2/5">
          <img src={hero} alt="hero" className="" />
        </div>
      </section>
  )
}

export default Hero