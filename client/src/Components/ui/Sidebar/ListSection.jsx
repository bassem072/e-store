import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function ListSection({ title, List }) {
  const [searchParams] = useSearchParams();
  const s_name = searchParams.get(title) ?? "";
  const params = [];
  searchParams.forEach((value, key) => {
    if (key !== title) params.push(key + "=" + value);
  });
  const queryStr = params.length > 0 ? "?" + params.join("&") : "";
  return (
    <div className="flex flex-col gap-2">
      {List.map((item) => {
        return (
          <div key={item.name}>
            {item.short_name !== s_name ? (
              <Link
                to={
                  queryStr +
                  (queryStr.length > 0 ? "&" : "?") +
                  title +
                  "=" +
                  item.short_name
                }
              >
                <div className="w-full flex justify-between hover:text-primary transition-all duration-500">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 border-[1px] rounded-md"></div>
                    <p>{item.name}</p>
                  </div>
                  <p>({item.count})</p>
                </div>
              </Link>
            ) : (
              <Link to={queryStr}>
                <div className="w-full flex justify-between hover:text-primary transition-all duration-500">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 border-[1px] bg-primary rounded-md"></div>
                    <p>{item.name}</p>
                  </div>
                  <p>({item.count})</p>
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
