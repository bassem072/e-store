import React from "react";
import Navbar from "../ui/Dashboard/Navbar";
import Sidebar from "../ui/Dashboard/Sidebar";
import { useSelector } from "react-redux";
import Breadcrumbs from "../ui/Dashboard/Breadcrumbs";

export default function DashboardBody({ children, name }) {
  const dashboardSetting = useSelector((state) => state.dashboardSetting);
  const collapse = dashboardSetting.collapse;
  return (
    <div className="w-full bg-slate-200 min-h-screen flex justify-end">
      <Sidebar />
      <div
        className={
          "pt-20 transition-all duration-500 w-full " +
          (collapse ? "lg:w-[calc(100%-80px)]" : "lg:w-[calc(100%-280px)]")
        }
      >
        <Navbar />
        <div className="w-full px-4">
          <Breadcrumbs name={name} />
          {children}
        </div>
      </div>
    </div>
  );
}
