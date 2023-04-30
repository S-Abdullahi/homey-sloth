import React from 'react'
import { valueData } from '../../utils/constants'

const MissionVision = () => {
  return (
    <section className="bg-stone-300 px-5 lg:px-40 py-20 md:h-96 mb-20 md:mb-60">
        <div className="md:flex md:justify-between mb-10">
          <h3 className="text-2xl md:3xl text-stone-700 font-bold md:w-1/4 mb-4">
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
  )
}

export default MissionVision