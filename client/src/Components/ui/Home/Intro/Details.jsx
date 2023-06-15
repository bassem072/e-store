import { faMapLocationDot, faPhone, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
//import main from "../../../assets/images/home/main.jpg";
export default function Details() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-0 justify-between">
      <div
        className="w-full h-64 md:h-[400px] lg:h-1/2 xl:h-1/2 2xl:h-2/3 bg-cover bg-no-repeat bg-right rounded-2xl flex"
        style={{
          backgroundImage: `url(${require("../../../../assets/images/home/main.jpg")})`,
        }}
      >
        <div className="w-1/3 h-full flex flex-col gap-4 justify-center text-white ml-8 lg:ml-4 xl:ml-8">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-4xl xl:text-7xl font-bold">
            TV Shop
          </div>
          <button className="w-fit px-3 lg:px-1 xl:px-4 text-xs md:text-base lg:text-sm p-2 border-[1px] border-white rounded-3xl">
            Shop By Category
          </button>
        </div>
      </div>
      <div className="w-full px-7 py-10 bg-slate-200 rounded-2xl text-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 justify-between items-center self-center gap-x-2 gap-y-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="text-primary text-4xl opacity-80"
            />
            <div className="flex flex-col gap-1 font-semibold">
              <div className="text-slate-700">Free Shipping</div>
              <div className="text-slate-400 text-xs md:text-base">
                On All Order
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-primary text-4xl opacity-80"
            />
            <div className="flex flex-col gap-1 font-semibold">
              <div className="text-slate-700">Online Support</div>
              <div className="text-slate-400 text-xs md:text-base">
                Technical 24/7
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-3">
            <FontAwesomeIcon
              icon={faTag}
              className="text-primary text-4xl opacity-80"
            />
            <div className="flex flex-col gap-1 font-semibold">
              <div className="text-slate-700">Big Saving</div>
              <div className="text-slate-400 text-xs md:text-base">
                Weekend Sales
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
