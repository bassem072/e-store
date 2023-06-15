import React from "react";
import products from "../../../../data/products";
import Product from "../../Product";

export default function MostPopular() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center gap-3 whitespace-nowrap py-5 pb-10">
        <div className="text-3xl font-bold">Most Popular</div>
        <div className="w-full h-px bg-slate-300"></div>
        <button className="py-2 px-5 bg-primary rounded-full text-white">
          View All
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-10">
        {Object.keys(products)
          .slice(0, 4)
          .map((key) => (
            <Product key={key} product={products[key]} id={key} />
          ))}
      </div>
    </div>
  );
}
