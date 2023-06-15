import React from "react";
import flatStar from "../../../../assets/images/rating/star-flat.png";
import star from "../../../../assets/images/rating/star.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";

export default function SpecialItem({ product }) {
  return (
    <div className="w-full h-[650px] lg:w-1/4 border-[3px] border-primary rounded-2xl flex flex-col">
      <div className="p-5 flex justify-end items-center relative z-[1]">
        <div className="w-12 h-12 bg-primary flex justify-center items-center rounded-full text-white text-xs font-extrabold">
          SALE!
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-start gap-5 px-8 pb-3">
        <div className="h-2/5">
          <img
            src={product.image}
            alt="Play Station"
            className="h-[220px] object-cover transition-all duration-500 hover:scale-110"
          />
        </div>
        <div className="h-2/5 flex flex-col items-center gap-4">
          <div className="text-center text-lg font-bold">{product.name}</div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400 line-through font-medium">
              ${product.price}
            </span>
            <span className="text-2xl text-primary font-semibold">${product.discount}</span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <div key={item}>
                  {item <= product.rate ? (
                    <img src={star} alt="Star" width={15} height={15} />
                  ) : (
                    <img
                      src={flatStar}
                      alt="Flat Star"
                      width={15}
                      height={15}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <button className="w-3/5 lg:w-[95%] 2xl:w-3/5 h-14 bg-primary rounded-full flex items-center">
            <div className="w-[calc(100%-56px)] text-white text-sm font-bold">
              Add To Cart
            </div>
            <div className="h-[52px] w-14 bg-white rounded-full flex justify-center items-center text-primary">
              <FontAwesomeIcon icon={faShopify} size="1x" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
