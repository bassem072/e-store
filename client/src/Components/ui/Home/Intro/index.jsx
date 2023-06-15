import React from 'react'
import Sidebar from './Sidebar';
import Details from './Details';
import SpecialItem from "./SpecialItem";
import playStation from "../../../../assets/images/products/play-station.png";

export default function Intro() {
  const specialProduct = {
    id: 1,
    name: "Sony Dual sense Controller + Usb 3.0 Cable",
    price: 1300,
    discount: 790,
    rate: 3,
    image: playStation,
  };

  return (
    <>
      <div className="w-full hidden lg:flex gap-10">
        <Sidebar />
        <Details />
        <SpecialItem product={specialProduct} />
      </div>
      <div className="w-full flex flex-col lg:hidden gap-10">
        <Details />
        <div className="flex flex-col md:flex-row gap-10">
          <Sidebar />
          <SpecialItem product={specialProduct} />
        </div>
      </div>
    </>
  );
}
