import React from "react";
import { faShareFromSquare, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cart from "../../../../../../assets/images/cart/shopping-bag.png";
import categories from "../../../../../../data/categories";
import brands from "../../../../../../data/brands";

export default function ProductDetails({ product, id }) {
  return (
    <div className="w-full flex flex-col gap-12 pt-7">
      <div className="text-5xl font-bold">{product.name}</div>
      <div className="flex gap-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <div key={item}>
                {item <= product.rate ? (
                  <FontAwesomeIcon icon={faStar} className="text-[#FF7513]" />
                ) : (
                  <FontAwesomeIcon icon={faStar} className="text-slate-300" />
                )}
              </div>
            );
          })}
        </div>
        <div>(7 customer reviews)</div>
      </div>
      <div className="w-full h-40 bg-slate-50 rounded-3xl flex items-center justify-between px-10">
        <div className="flex items-end gap-2">
          <div className="text-4xl font-bold">${product.price}</div>
          <div className="text-2xl text-slate-400 font-medium line-through">
            ${product.offer}
          </div>
        </div>
        <button className="flex items-center gap-3 bg-primary px-5 py-3 rounded-full">
          <div className="text-white text-lg font-medium">Add To Cart</div>
          <img
            src={cart}
            alt="cart"
            width={30}
            height={30}
            className="invert"
          />
        </button>
      </div>
      <div className="w-3/5 text-lg font-medium leading-8 max-h-[6rem] overflow-ellipsis overflow-hidden">
        {product.description}
      </div>
      <div className="flex gap-5">
        <button className="flex items-center gap-10 border-2 rounded-full px-10 py-4">
          <div className="text-lg">Add To Wishlist</div>
          <FontAwesomeIcon
            icon={faHeart}
            className="text-primary text-xl font-thin"
          />
        </button>
        <button className="flex items-center gap-5 border-2 rounded-full px-7 py-4">
          <div className="text-lg">Share</div>
          <FontAwesomeIcon
            icon={faShareFromSquare}
            className="text-primary text-xl font-thin"
          />
        </button>
      </div>
      <div className="h-px w-full bg-slate-200"></div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="text-lg">Category:</div>
          <div className="text-lg text-primary font-semibold">{categories[product.category].name}</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-lg">Brand:</div>
          <div className="text-lg text-primary font-semibold">{brands[product.brand].name}</div>
        </div>
      </div>
    </div>
  );
}
