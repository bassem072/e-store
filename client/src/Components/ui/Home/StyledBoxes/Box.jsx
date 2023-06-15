import React from "react";

export default function Box({ box }) {
  return (
    <div
      className={
        "w-full h-full rounded-3xl flex justify-end items-center overflow-hidden p-5 " + box.style
      }
    >
      <img
        src={require("../../../../assets/images/products/" + box.image)}
        alt={box.title}
        className="h-[300px]"
      />
    </div>
  );
}
