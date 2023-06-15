import {
  faArrowDownLong,
  faArrowUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GridCols from "../../../../Helpers/GridCols";
import { useDispatch, useSelector } from "react-redux";

export default function Header({ data, setSortBy, setInc, name }) {
  const admin = useSelector((state) => state[name]);
  const dispatch = useDispatch();
  const capitalize = (str) => {
    const arr = str.split("_");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  }
  return (
    <div
      className={
        "grid border-[1px] border-slate-300 " + GridCols(data.length + 2)
      }
    >
      <div className="flex items-center px-3 border-x-[1px] border-slate-300 text-sm font-semibold">
        #
      </div>
      {data.map((item) => (
        <button
          key={item}
          className="flex justify-between p-3 border-x-[1px] border-slate-300 overflow-hidden"
          onClick={() => {
            if (admin.sortBy === item) {
              dispatch(setInc());
            } else {
              dispatch(setSortBy(item));
            }
          }}
        >
          <div className="text-sm font-semibold">{capitalize(item)}</div>
          <div className="text-sm text-slate-500">
            <FontAwesomeIcon
              icon={faArrowUpLong}
              className={
                "transition-all duration-500 " +
                (admin.sortBy === item && admin.inc ? "text-black" : "")
              }
            />
            <FontAwesomeIcon
              icon={faArrowDownLong}
              className={
                "transition-all duration-500 " +
                (admin.sortBy === item && !admin.inc ? "text-black" : "")
              }
            />
          </div>
        </button>
      ))}
      <div className="flex items-center px-3 border-x-[1px] border-slate-300 text-sm font-semibold">
        Actions
      </div>
    </div>
  );
}
