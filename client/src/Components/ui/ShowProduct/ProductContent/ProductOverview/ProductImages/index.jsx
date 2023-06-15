import React, { useState } from "react";
import scale from "../../../../../../assets/images/others/zoom-in.png";
import ImageView from "./ImageView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ProductImage({ images }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex flex-col gap-3 px-10">
      <div className="w-full h-[820px] flex justify-center items-center p-10 border-[3px] rounded-3xl relative">
        <img
          src={require("../../../../../../assets/images/products/" +
            images[index])}
          alt="h"
          className="h-2/5 object-contain"
        />
        <button
          className="absolute top-0 right-0 h-20 w-20 flex justify-center items-center rotate-90 opacity-50 hover:opacity-100 transition-all duration-500"
          onClick={() => setShow(true)}
        >
          <img src={scale} alt="scale" className="h-10" />
        </button>
      </div>
      <div className="h-40 w-full flex gap-5">
        {images.slice(0, 4).map((_, key) => (
          <button key={key} className="w-1/4" onClick={() => setIndex(key)}>
            <div
              className={
                "h-full w-full border-[3px] rounded-2xl flex justify-center items-center hover:opacity-100 transition-all duration-500" +
                (index === key ? " border-primary" : " opacity-50")
              }
            >
              <img
                src={require("../../../../../../assets/images/products/" +
                  images[key])}
                alt="h"
                className="h-24"
              />
            </div>
          </button>
        ))}
      </div>
      <div
        className={
          "fixed top-0 left-0 z-10 h-screen w-screen" +
          (show ? " block" : " hidden")
        }
      >
        <ImageView images={images} current={index} />
        <button
          className="absolute top-10 right-20 text-white"
          onClick={() => setShow(false)}
        >
          <FontAwesomeIcon icon={faXmark} size="2xl" />
        </button>
      </div>
    </div>
  );
}
