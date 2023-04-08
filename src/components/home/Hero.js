import React from 'react'
import hero from "../../assets/hero.jpg";


const Hero = () => {
  return (
    
    <section className="px-10 md:px-40 mt-10 md:mt-20 flex gap-4 md:justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-7 pt-20 md:w-2/3">
            Design Your Comfort Zone
          </h1>
          <p className="section-paragraph md:w-10/12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <button className="btn">SHOP NOW</button>
        </div>
        <div className="hidden md:block md:w-2/5">
          <img src={hero} alt="hero" className="" />
        </div>
      </section>
  )
}

export default Hero