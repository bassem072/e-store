import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ImageView({ images, current }) {
  const [index, setIndex] = useState(current);

  const next = () => {
    images.length - 1 > index ? setIndex(index + 1) : setIndex(0);
  }

  const prev = () => {
    index > 0  ? setIndex(index - 1) : setIndex(images.length - 1);
  }

  const handleKeyPress = (event) => {
    console.log(event.key);
    if (event.key === "ArrowLeft") {
      prev();
    } else if (event.key === "ArrowRight") {
        next();
    }
  };

  return (
    <div
      className="h-full w-full bg-black/70 flex justify-center items-center relative"
      onKeyDown={handleKeyPress}
    >
      <div className="w-2/5 h-4/5 bg-white flex justify-center items-center">
        <img
          src={require("../../../../../../assets/images/products/" +
            images[index])}
          alt="h"
        />
      </div>
      <button
        className="absolute left-0 top-1/2 translate-y-1/2 pl-10 text-white text-4xl"
        onClick={() => {
          prev();
        }}
        onKeyDown={handleKeyPress}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className="absolute right-0 top-1/2 translate-y-1/2 pr-10 text-white text-4xl"
        onClick={() => {
          next();
        }}
        onKeyDown={handleKeyPress}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}
