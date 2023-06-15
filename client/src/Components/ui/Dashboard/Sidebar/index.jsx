import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import style from "../../../../assets/css/style.module.css";
import avatar from "../../../../assets/images/others/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumpster, faSearch } from "@fortawesome/free-solid-svg-icons";
import { setCollapse } from "../../../../slice/dashboardSetting";
import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";
import sidebar from "../../../../data/dashboard/sidebar";

export default function Sidebar() {
  const dashboardSetting = useSelector((state) => state.dashboardSetting);
  const collapse = dashboardSetting.collapse;
  const dispatch = useDispatch();
  const ref = useRef(null);
  const auth = useSelector((state) => state.auth);
  const user = auth.user;
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (window.innerWidth < 1024 && !collapse) {
          dispatch(setCollapse());
        }
        //alert("You clicked outside of me!");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [collapse, dispatch, ref]);

  return (
    <div
      ref={ref}
      className={
        "group fixed top-0 left-0 h-screen overflow-hidden flex flex-col bg-slate-700 transition-all duration-500 z-10 " +
        (collapse ? "w-0 lg:w-[80px] lg:hover:w-[280px]" : "w-[280px]")
      }
    >
      <div className="flex items-center gap-5 px-6 py-3">
        <FontAwesomeIcon
          icon={faDumpster}
          className="text-slate-300 text-2xl"
        />
        <div
          className={
            "text-slate-300 text-xl text-center whitespace-nowrap font-semibold overflow-hidden transition-all duration-500 " +
            (collapse ? "opacity-0 group-hover:opacity-100" : "opacity-100")
          }
        >
          E-STORE
        </div>
      </div>
      <div className="h-px w-full bg-slate-500 mb-3"></div>
      <div
        className={`h-full overflow-y-scroll flex flex-col gap-3 mx-1 transition-all duration-500 ${style.scrollbar}`}
      >
        <div className="flex items-center gap-3 pl-5 pt-2 whitespace-nowrap overflow-hidden">
          <div className="w-8 h-8 rounded-full whitespace-nowrap">
            <img src={avatar} alt="avatar" className="h-8 w-8 min-w-[32px]" />
          </div>
          <div
            className={
              "text-slate-300 text-center whitespace-nowrap font-semibold overflow-hidden transition-all duration-500 " +
              (collapse ? "opacity-0 group-hover:opacity-100" : "opacity-100")
            }
          >
            {`${user.first_name} ${user.last_name}`}
          </div>
        </div>
        <div className="h-px w-full bg-slate-500"></div>
        <div
          className={
            "flex border-2 border-slate-400 rounded-md bg-slate-600 " +
            (collapse ? "hidden" : "block")
          }
        >
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-white pl-3"
          />
          <div className="w-px h-full bg-slate-400"></div>
          <button className="py-2 px-4 text-white">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {sidebar.map((sidebarItem) =>
          sidebarItem.isList ? (
            <SidebarGroup
              key={sidebarItem.name}
              title={sidebarItem.name}
              icon={sidebarItem.icon}
              count={sidebarItem.count}
              active={sidebarItem.list.filter((listItem) => listItem.route === location.pathname).length > 0}
            >
              {sidebarItem.list.map((listItem) => {
                return (
                  <SidebarItem
                    key={listItem.name}
                    title={listItem.name}
                    icon={listItem.icon}
                    count={listItem.count}
                    sub={sidebarItem.isList}
                    active={listItem.route === location.pathname}
                    route={listItem.route}
                  />
                );
              })}
            </SidebarGroup>
          ) : (
            <SidebarItem
              key={sidebarItem.name}
              title={sidebarItem.name}
              icon={sidebarItem.icon}
              count={sidebarItem.count}
              sub={sidebarItem.isList}
              active={sidebarItem.route === location.pathname}
              route={sidebarItem.route}
            />
          )
        )}
        {/* <SidebarItem title="Dashboard" icon={faChartPie} count={5} />
        <SidebarGroup title="Dashboard" icon={faChartPie} count={5} active sub>
          <SidebarItem title="Dashboard" icon={faChartPie} count={5} sub />
          <SidebarItem
            title="Dashboard"
            icon={faChartPie}
            count={5}
            active
            sub
          />
          <SidebarItem title="Dashboard" icon={faChartPie} count={5} sub />
        </SidebarGroup> */}
      </div>
    </div>
  );
}
