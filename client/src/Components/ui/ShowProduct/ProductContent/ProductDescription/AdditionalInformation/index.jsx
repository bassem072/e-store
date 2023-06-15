import React from "react";

export default function AdditionalInformation({ product }) {
  return (
    <div className="w-full flex flex-col gap-7">
      <div className="text-4xl font-black">Details Specifications</div>
      <div className="font-medium">{product.name}</div>
      <div className="w-full flex flex-col">
        {Object.keys(product.additional_information).map((key, index) => (
          <div
            key={index}
            className={
              "w-full h-20 flex justify-between items-center px-20" +
              (index % 2 === 1 ? " bg-slate-50" : " bg-slate-200")
            }
          >
            <div className="text-lg font-bold">{key}</div>
            <div className="text-lg font-medium">{product.additional_information[key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
