import React from "react";
import Sidebar from "../ui/Sidebar/Sidebar";

export default function Sub({ children }) {
  return (
    <div className="w-5/6 flex flex-col-reverse md:flex-row gap-10">
      <Sidebar />
      <main className="w-full md:w-3/4">{children}</main>
    </div>
  );
}
