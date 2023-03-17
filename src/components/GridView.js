import React from "react";
import Sort from "./Sort";
import Item from "./Item";

const dummyArray = [1,2,3,4,5,6,7,8,9,10, 11,12, 13,14,15, 16, 17, 18, 19,20]

const GridView = () => {
  return (
    <div className=" col-span-10 pr-40 h-screen overflow-scroll scrollbar-hide">
      <Sort />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {dummyArray.map(el => <Item key={el}/>)}
      </div>
    </div>
  );
};

export default GridView;
