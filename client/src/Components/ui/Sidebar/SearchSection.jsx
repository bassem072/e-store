import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function SearchSection() {
  const [searchParams] = useSearchParams();
  const params = [];
  searchParams.forEach((value, key) => {
    if (key !== "search") params.push(key + "=" + value);
  });
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  params.push("search=" + search);
  let queryStr = params.join("&");
  queryStr = queryStr.length > 0 ? "?" + queryStr : queryStr;
  console.log(queryStr);
  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search Products..."
        className="h-12 w-full bg-slate-200 rounded-3xl focus:outline-none text-slate-800 pl-7 md:pl-2 lg:pl-7"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <Link
        to={queryStr}
        className="h-12 w-full flex justify-center items-center bg-primary rounded-3xl text-white font-semibold"
      >
        Search
      </Link>
    </div>
  );
}
