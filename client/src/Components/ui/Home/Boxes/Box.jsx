import React from "react";
import { Link } from "react-router-dom";

export default function Box({ box }) {
  return (
    <div
      className={'w-full h-60 rounded-3xl text-white pr-5 relative flex justify-end items-center ' + box.color}
    >
      <div
      >
        <img
          src={box.image}
          alt={box.name}
          className="h-[180px] object-cover"
        />
      </div>
      <div className="absolute left-8 top-1/2 translate-y-[-50%] z-10">
        <div className="text-3xl font-extralight pb-2">{box.name}</div>
        <div className="text-4xl font-bold pb-5">{box.description}</div>
        <Link to={box.route}>
          <div className="w-fit px-8 py-1.5 border-2 rounded-3xl font-semibold">Shop</div>
        </Link>
      </div>
    </div>
  );
}
