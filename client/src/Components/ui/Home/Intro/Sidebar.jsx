import React from "react";
import categories from "../../../../data/categories";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const filteredCategories = Object.entries(categories).filter(
    (category) => category[1].count > 0
  );


  return (
    <div className="w-full lg:w-1/4 flex flex-col justify-between">
      {filteredCategories.map((category) => (
        <div key={category[0]} className="w-full flex flex-col gap-4">
          <Link to={"/products?category=" + category[1].short_name}>
            <div className="w-full flex justify-between hover:text-primary transition-all duration-500">
              <div className="w-full flex items-center gap-3">
                <div className="w-10 h-10 flex justify-center items-center opacity-80 text-primary">
                  <FontAwesomeIcon icon={category[1].icon} size="xl" />
                </div>
                <div className="w-5/6 flex items-center truncate text-base lg:text-sm xl:text-base font-semibold">
                  {category[1].name}
                </div>
              </div>
              <div className="flex items-center text-slate-400">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  size="sm"
                  className="rtl:-scale-x-100"
                />
              </div>
            </div>
          </Link>
          <div className="w-full h-px bg-slate-200"></div>
        </div>
      ))}
    </div>
  );
}
