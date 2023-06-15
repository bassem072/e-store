import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import GridCols from "../../../../Helpers/GridCols";

export default function Row({ num, data, columns, name }) {
  return (
    <div
      className={
        "grid border-[1px] border-slate-300 hover:bg-slate-300 transition-all duration-500 " +
        GridCols(columns.length + 2) +
        (num % 2 === 1 ? " bg-white" : " bg-slate-200")
      }
    >
      <div
        key={num}
        className="flex justify-between px-3 py-2 border-x-[1px] border-slate-300"
      >
        {num}
      </div>
      {columns.map((item) => (
        <div
          key={item}
          className="flex justify-between overflow-hidden px-3 py-2 border-x-[1px] border-slate-300"
        >
          {data[item]}
        </div>
      ))}
      <div className="flex items-center gap-2 lg:gap-5 px-3 py-2 overflow-hidden border-x-[1px] border-slate-300 text-primary">
        <Link to={"/dashboard/" + name + "s/" + data.id}>
          <FontAwesomeIcon icon={faEye} />
        </Link>
        <Link to={"/dashboard/" + name + "s/" + data.id + "/edit"}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <button
          onClick={() => {
            let confirmData = window.confirm(
              "Are you sure you want to delete this " + name
            );
            if (confirmData) {
              alert("Admin deleted successfully");
            }
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
