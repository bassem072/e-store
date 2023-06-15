import React from "react";
import brands from "../../../data/brands";
import categories from "../../../data/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Product({ product, id }) {
  return (
    <div className="h-[700px] w-full border-2 hover:border-primary rounded-3xl px-5 transition-all duration-500 relative">
      <Link to={"/product/" + id}>
        <div className="h-2/3 flex justify-center items-center">
          <img
            src={require("../../../assets/images/products/" +
              product.images[0])}
            alt={product.name}
            className="h-[200px] object-cover w-fit"
          />
        </div>
      </Link>
      <div className="h-1/3">
        <Link to={"/product/" + id}>
          <div className="pb-2 text-2xl font-bold">{product.name}</div>
        </Link>
        <div className="pb-4 text-slate-400 font-semibold flex gap-2">
          <Link
            to={"products?category=" + categories[product.category].short_name}
          >
            <div className="hover:text-primary transition-all duration-500">
              {categories[product.category].name}
            </div>
          </Link>
          <div>-</div>
          <Link
            to={"products?brand=" + brands[product.brand].short_name}
          >
            <div className="hover:text-primary transition-all duration-500">
              {brands[product.brand].name}
            </div>
          </Link>
        </div>
        <div className="h-[100px] flex justify-between">
          <div className="flex flex-col justify-around">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <div key={item}>
                    {item <= product.rate ? (
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#FF7513]"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-slate-300"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div
              className={
                "text-xl font-semibold" +
                (product.offer >= 0
                  ? " text-slate-400 line-through"
                  : " text-primary")
              }
            >
              {"$ " + product.price}
            </div>
            {product.offer >= 0 && (
              <div className="text-xl font-semibold text-primary">
                {"$ " + product.offer}
              </div>
            )}
          </div>
          <div className=" flex items-center">
            <button className="w-[150px] h-10 bg-primary/5 rounded-full flex items-center">
              <div className="w-[calc(100%-40px)] text-primary font-bold">
                Add To Cart
              </div>
              <div className="h-[38px] w-[38px] bg-primary rounded-full flex justify-center items-center text-white">
                <FontAwesomeIcon icon={faShopify} size="1x" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {product.offer >= 0 && (
        <div className="absolute top-10 left-10 w-20 h-12 bg-[#F25050] text-white text-sm font-semibold rounded-xl flex justify-center items-center">
          SALE!
        </div>
      )}
    </div>
  );
}
