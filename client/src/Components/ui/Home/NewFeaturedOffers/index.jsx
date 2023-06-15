import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import productsList from "../../../../data/products";
import Product from "../../Product";

export default function NewFeaturedOffers() {
  const windowsWidth = useRef(window.innerWidth);
  const products = Object.keys(productsList).filter(
    (key) => productsList[key].offer >= 0
  );
  const sliderRef = useRef(null);
  const [liCount, setLiCount] = useState(0);

  const imgNum = () => {
    if (windowsWidth.current < 768) {
      return 1;
    } else if (windowsWidth.current < 1024) {
      return 2;
    } else if (windowsWidth.current < 1280) {
      return 3;
    } else {
      return 4;
    }
  };

  const prev = () => {
    if (liCount === 0) {
      setLiCount(products.length - imgNum() - 1);
    } else {
      setLiCount(liCount - 1);
    }
  };
  const next = () => {
    if (liCount === products.length - imgNum() - 1) {
      setLiCount(0);
    } else {
      setLiCount(liCount + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      const li = sliderRef.current.querySelectorAll("li")[liCount];
      if (li) {
        li.scrollIntoView({
          block: "nearest",
          inline: "start",
        });
      }
    });
    const li = sliderRef.current.querySelectorAll("li")[liCount];
    if (li) {
      li.scrollIntoView({
        block: "nearest",
        inline: "start",
      });
    }
  }, [liCount]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center gap-3 whitespace-nowrap py-5 pb-10">
        <div className="text-3xl font-bold">New Featured Offers</div>
        <div className="w-full h-px bg-slate-300"></div>
        <div className="flex gap-3">
          <button
            className="w-10 h-10 flex justify-center items-center border-[3px] rounded-full text-primary border-primary hover:bg-primary hover:text-white transition-all duration-500"
            onClick={prev}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className="w-10 h-10 flex justify-center items-center border-[3px] rounded-full text-primary border-primary hover:bg-primary hover:text-white transition-all duration-500"
            onClick={next}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="w-full" id="scrollItem">
        <ul
          ref={sliderRef}
          className="w-full list-none scroll-smooth overflow-hidden whitespace-nowrap transition-transform ease-in-out duration-1000 snap-x"
        >
          {products.map((key) => (
            <li
              className={"inline-flex w-full md:w-1/2 2xl:w-1/4 h-full pr-5"}
              key={key}
            >
              <Product product={productsList[key]} id={key} />
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex-1 overflow-hidden" ref={sliderRef}>
        <div
          ref={sliderRef}
          className="list-none whitespace-nowrap transition-transform ease-in-out duration-1000 snap-x"
        >
          {products.map((product, index) => (
            <li
              className="inline-flex w-full md:w-1/2 2xl:w-1/4 h-full pr-5"
              key={index}
            >
              <Product product={product} />
            </li>
          ))}
        </div>
      </div> */}
    </div>
  );
}
