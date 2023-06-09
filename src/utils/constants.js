import React from "react";
import { GiCompass, GiDiamondHard, GiScrollUnfurled } from "react-icons/gi";


export const priceFormat = (num) => {
    const newNumber = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(num/100)
    return newNumber
}

export const getUniqueValues = (data, type) =>{
    let valueArray = data.map((item)=>item[type])
    if(type === 'colors'){
      valueArray = valueArray.flat()
    }
    return ['all', ...new Set(valueArray)]
}

export const valueData = [
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