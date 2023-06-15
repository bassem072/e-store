import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SidebarItem({ icon, title, count, active, sub, route }) {
  const dashboardSetting = useSelector((state) => state.dashboardSetting);
  const collapse = dashboardSetting.collapse;
  return (
    <Link to={route}>
      <div
        className={
          "h-[52px] px-5 rounded-xl group/item flex justify-between transition-all duration-500" +
          (active
            ? sub
              ? " text-slate-700 bg-[#7BAADC]"
              : " text-slate-700 bg-[#A1CCFA]"
            : " text-slate-300 hover:bg-slate-600")
            + (sub ? " ml-3 px-[15px]": "")
        }
      >
        <div className="flex gap-2 items-center font-bold">
          <div>
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
          <div className={"whitespace-nowrap overflow-hidden " + (collapse ? "hidden group-hover:block" : "block")}>
            {title}
          </div>
        </div>
        <div
          className={
            "flex gap-2 items-center " +
            (collapse ? "hidden group-hover:flex" : "flex")
          }
        >
          {count && (
            <div className="px-2 rounded-md bg-[#17A2B8] font-semibold">
              {count}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
