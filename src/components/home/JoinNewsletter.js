import React from "react";

const JoinNewsletter = () => {
  return (
    <section className="mx-5 lg:mx-40 mb-40 md:flex">
      <div className="md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Join our newsletter and get 20% off
        </h3>
        <p className="leading-8 text-stone-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
      </div>
        <form action="https://formspree.io/f/mdovpkpy" method="POST" className="md:w-1/2 relative mt-10">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="border-2 border-black w-full absolute p-2 text-stone-400 rounded"
          />
          <button type="submit" className="absolute right-0 bg-stone-400 border-2 border-black px-4 py-2 rounded">
            Subscribe
          </button>
        </form>
    </section>
  );
};

export default JoinNewsletter;
