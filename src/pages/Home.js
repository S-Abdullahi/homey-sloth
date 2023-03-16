import React from "react";
import { Item, Footer } from "../components";
import { GiCompass, GiDiamondHard, GiScrollUnfurled } from "react-icons/gi";
import hero from "../assets/hero.jpg";

const data = [1, 2, 3];
const valueData = [
  {
    icon: <GiCompass />,
    title: "Mission",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    icon: <GiDiamondHard />,
    title: "Vision",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    icon: <GiScrollUnfurled />,
    title: "History",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

const Home = () => {
  return (
    <div>
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
      {/* FEATURED PRODUCTS */}
      <section className="bg-stone-100 px-10 md:px-40 py-20 mt-20 text-center">
        <h2 className="text-4xl font-bold text-center pb-3">
          Featured Products
        </h2>
        <div className="section-head-underline mx-auto"></div>
        <div className="md:flex md:justify-between mb-10">
          {data.map((el) => (
            <Item key={el} />
          ))}
        </div>
        <button className="btn ">ALL PRODUCTS</button>
      </section>
      {/* Mission and Vision */}
      <section className="bg-stone-300 px-10 md:px-40 py-20 md:h-96 mb-20 md:mb-60">
        <div className="md:flex md:justify-between mb-10">
          <h3 className="text-3xl text-stone-700 font-bold md:w-1/4">
            Custom Furniture Built Only For You
          </h3>
          <p className="md:w-1/2 text-stone-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="md:flex md:justify-between md:gap-20">
          {valueData.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div
                key={index}
                className="text-center bg-stone-400 rounded p-6 py-10 m-4"
              >
                <div className="text-3xl bg-stone-300 flex justify-center rounded-full w-12 p-2 mx-auto mb-5">
                  {icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-stone-700">
                  {title}
                </h4>
                <p className="leading-7 text-stone-700">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Join Our Newsletter */}
      <section className="mx-10 md:mx-40 mb-40 md:flex">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">
            Join our newsletter and get 20% off
          </h3>
          <p className="leading-8 text-stone-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </div>
        <div className="md:w-1/2 relative mt-10">
          <input
            type="text"
            placeholder="Enter Email"
            className="border-2 border-black w-full absolute p-2 text-stone-400 rounded"
          />
          <button className="absolute right-0 bg-stone-400 border-2 border-black px-4 py-2 rounded">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
