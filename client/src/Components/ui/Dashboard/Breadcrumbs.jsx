import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ name }) {
  const path = useLocation().pathname;
  const routes = path.slice(1, path.length).split("/");
  const routesLink = [];
  for (let i = 0; i < routes.length - 1; i++) {
    console.log(+routes[i] + "this is");
    if (isNaN(routes[i])) {
      routesLink.push(
        <Link
          key={routes[i]}
          to={"/" + routes.slice(0, i + 1).join("/")}
          className="text-primary font-medium"
        >
          {routes[i].slice(0, 1).toUpperCase() +
            routes[i].slice(1, routes[i].length)}
        </Link>
      );
      routesLink.push(<div key={routes[i] + "d"}>/</div>);
    }
  }
  routesLink.push(
    <div key="x">
      {name}
    </div>
  );
  return (
    <div className="flex justify-between items-center mb-7">
      <div className="text-2xl font-medium">{name}</div>
      <div className="flex gap-2 items-center mr-2">
        {routesLink.map((route) => route)}
      </div>
    </div>
  );
}
