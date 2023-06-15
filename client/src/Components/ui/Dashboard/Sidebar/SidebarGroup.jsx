import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function SidebarGroup({ icon, title, count, active, children }) {
  const dashboardSetting = useSelector((state) => state.dashboardSetting);
  const collapse = dashboardSetting.collapse;
  const [show, setShow] = useState(active);
  return (
    <div className="flex flex-col gap-1">
      <button
        className={
          "min-h-[52px] w-full px-5 rounded-xl group/item flex justify-between items-center transition-all duration-500 " +
          (active
            ? " text-slate-700 bg-[#A1CCFA]"
            : "text-slate-300 hover:bg-slate-600")
        }
        onClick={() => setShow(!show)}
      >
        <div className="flex gap-2 items-center font-bold">
          <div>
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
          <div
            className={
              "whitespace-nowrap overflow-hidden " +
              (collapse ? "hidden group-hover:block" : "block")
            }
          >
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
          <div
            className={
              "transition-all duration-500 " + (show ? "rotate-90" : "")
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </button>
      <div
        className={
          "w-full flex flex-col gap-1 overflow-hidden transition-all duration-500 " +
          (active || show ? "h-full" : "h-0")
        }
      >
        {children}
      </div>
    </div>
  );
}
