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
        "At HomeySloth, our mission is to enrich lives by providing top-quality, stylish furniture that transforms houses into homes. We aim to curate a collection that combines functionality, comfort, and aesthetic appeal, ensuring that every piece tells a story.",
    },
    {
      icon: <GiDiamondHard />,
      title: "Vision",
      description:
        "Our vision at HomeySloth is to be the go-to online destination for individuals seeking distinctive and well-crafted furniture that mirrors their personal style. We strive to create an immersive shopping experience",
    },
    {
      icon: <GiScrollUnfurled />,
      title: "History",
      description:
        "HomeySloth has evolved from a passion for interior design into a thriving online platform dedicated to providing high-quality furniture for homes across the globe.",
    },
  ];