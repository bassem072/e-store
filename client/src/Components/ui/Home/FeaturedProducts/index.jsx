import React, { useState } from "react";
import Product from "../../Product";
import allProducts from "../../../../data/products";

export default function FeaturedProducts() {
  const [select, setSelect] = useState(0);
  let products;
  switch (select) {
    case 0:
      products = Object.keys(allProducts);
      break;
    default:
      products = Object.keys(allProducts).filter(
        (key) => allProducts[key].category === select
      );
      break;
  }
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-10 whitespace-nowrap py-5 pb-10">
        <div className="text-3xl font-bold">Featured Products</div>
        <div className="w-full hidden lg:block h-px bg-slate-300"></div>
        <div className="flex gap-10">
          <button
            className={
              "text-lg font-bold " +
              (select === 0 ? "text-primary" : "text-black")
            }
            onClick={() => setSelect(0)}
          >
            ALL
          </button>
          <button
            className={
              "text-[14px] xl:text-lg font-bold " +
              (select === 4 ? "text-primary" : "text-black")
            }
            onClick={() => setSelect(4)}
          >
            WATCHES & EYEWEA
          </button>
          <button
            className={
              "text-lg font-bold " +
              (select === 7 ? "text-primary" : "text-black")
            }
            onClick={() => setSelect(7)}
          >
            WHITE ELITEBOOK TABLET
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-10">
        {products.slice(0, 4).map((key) => (
          <Product key={key} product={allProducts[key]} id={key} />
        ))}
      </div>
    </div>
  );
}
