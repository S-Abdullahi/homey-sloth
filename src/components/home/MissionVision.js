import React from "react";
import { valueData } from "../../utils/constants";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="bg-stone-300 px-5 lg:px-40 py-20 md:h-96 mb-20 md:mb-64">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: "1", delay: "0.5" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="md:flex md:justify-between mb-10"
      >
        <h3 className="text-2xl md:3xl text-stone-700 font-bold md:w-1/4 mb-4">
          Custom Furniture Built Only For You
        </h3>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: "1", delay: "0.5" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20"
      >
        {valueData.map((item, index) => {
          const { icon, title, description } = item;
          return (
            <div
              key={index}
              className="text-center bg-stone-700 rounded p-6 py-10 mx-4 md:mx-0"
            >
              <div className="text-3xl bg-stone-300 flex justify-center rounded-full w-12 p-2 mx-auto mb-5">
                {icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-100">{title}</h4>
              <p className="leading-7 text-gray-100 font-light">
                {description}
              </p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default MissionVision;
