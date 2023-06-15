import React from 'react'
import Box from './Box';

export default function StyledBoxes() {
    
    const boxes = [
      {
        id: 1,
        subtitle: "Health And Fit",
        title: "Health Care Monitor",
        image: "",
        style: "",
      },
      {
        id: 2,
        subtitle: "High Tech Product",
        title: "Monster Beats Headphones",
        image: "handfree-2.png",
        style: "bg-red-600",
      },
      {
        id: 3,
        subtitle: "Minimalism Design",
        title: "Music Makes Feel Better",
        image: "stereo.png",
        style: "bg-[#1F1F21]",
      },
      {
        id: 4,
        subtitle: "Play The Dream",
        title: "Nikon Ultimate Zoom Picture",
        image: "camera.png",
        style: "bg-[#017BC4] xl:flex-col xl:justify-start",
      },
    ];
  return (
    <div className="h-[500px] flex flex-col 2xl:flex-row gap-3">
      <div className="w-full 2xl:w-1/4">
        <div
          className={
            "w-full h-full rounded-3xl flex justify-end items-center overflow-hidden p-5 bg-slate-200 xl:flex-col xl:justify-end relative"
          }
        >
          <img
            src={require("../../../../assets/images/products/smart-watch.png")}
            alt="Health Care Monitor"
            className="h-[300px]"
          />
          <div className='absolute top-0 left-0 w-1/2 h-1/2'>
            <div>Health And Fit</div>
            <div>Health Care Monitor</div>
            <button className=''>Shop</button>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w-1/2 flex flex-col gap-5">
        <Box box={boxes[1]} />
        <Box box={boxes[2]} />
      </div>
      <div className="w-full 2xl:w-1/4">
        <Box box={boxes[3]} />
      </div>
    </div>
  );
}
