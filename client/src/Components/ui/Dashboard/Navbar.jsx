import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCollapse } from "../../../slice/dashboardSetting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dashboardSetting = useSelector((state) => state.dashboardSetting);
  const collapse = dashboardSetting.collapse;
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <div
      className={
        "fixed top-0 w-full h-16 bg-white flex justify-between items-center px-7 text-slate-600 " +
        (collapse ? "lg:w-[calc(100%-80px)]" : "lg:w-[calc(100%-280px)]")
      }
    >
      {search ? (
        <div className="w-full relative">
          <input
            type="text"
            name="search"
            value={searchText}
            placeholder="Search"
            autoComplete="off"
            className="w-full bg-slate-200 px-3 py-1 outline-none border-[0.25px] border-slate-300 rounded-sm"
            onChange={(e) => setSearchText(e.currentTarget.value)}
          />
          <div className="absolute right-3 top-[50%] -translate-y-[50%] flex items-center gap-5 text-black">
            <button onClick={() => alert(searchText)}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button onClick={() => setSearch(false)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-10">
            <button onClick={() => dispatch(setCollapse())}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <Link to="/dashboard">
              <div className="text-slate-500">Home</div>
            </Link>
            <Link to="/dashboard/admins">
              <div className="text-slate-500">Admins</div>
            </Link>
            <Link to="/dashboard/moderators">
              <div className="text-slate-500">Moderators</div>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <button onClick={() => setSearch(true)}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
