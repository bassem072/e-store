import {
  faBars,
  faEnvelope,
  faMagnifyingGlass,
  faPhoneVolume,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menu from "../../../assets/images/navbar/menu.png";
import cart from "../../../assets/images/navbar/cart.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;
  const current = location.substring(1, location.length).split("/")[0];
  const pages = ["Home", "Products", "About", "Contact", "Blog"];

  return (
    <>
      <nav className="w-full flex flex-col gap-2 h-fit bg-[#292936] rounded-b-[60px]">
        <div className="w-full h-14 bg-[#1f1f21] rounded-b-[40px] flex justify-center items-center">
          <div className="w-5/6 flex justify-between">
            <div className="flex justify-start gap-10">
              <div className="text-[#31c9c0] text-xl font-semibold px-4 mr-3 border-[3px] border-[#31c9c0] rounded-3xl">
                E-STORE
              </div>
              <ul className="hidden md:flex justify-center items-center gap-6 font-semibold">
                {pages.map((page) => {
                  let str = page.toLowerCase();
                  str = str === "home" ? "" : str;
                  if (str === current) {
                    return (
                      <li className="text-white" key={page}>
                        {page}
                      </li>
                    );
                  } else {
                    return (
                      <li className="text-secondary" key={page}>
                        <Link to={"/" + str}>{page}</Link>
                      </li>
                    );
                  }
                })}
              </ul>
              <button className="md:hidden" onClick={() => setOpen(true)}>
                <FontAwesomeIcon icon={faBars} className="text-white" />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  className="text-white"
                />
                <div className="hidden lg:block text-secondary font-semibold">
                  info@e-store.eco
                </div>
              </div>
              <div className="w-px h-4 bg-secondary"></div>
              <div className="flex gap-4 items-center">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  size="1x"
                  className="text-white"
                />
                <div className="hidden lg:block text-secondary font-semibold">
                  010 90355 994
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-5/6 h-10 lg:h-16 mb-2">
            <div className="flex justify-between items-center">
              <button>
                <div className="flex gap-4 items-center text-white font-semibold">
                  <img
                    src={menu}
                    alt="Menu"
                    width={20}
                    height={20}
                    className="invert"
                  />
                  <div>Shop By Category</div>
                </div>
              </button>
              <div className="hidden lg:block relative w-5/12">
                <input
                  type="text"
                  name="search"
                  placeholder="Type Here..."
                  className="h-12 w-full bg-white/10 rounded-3xl focus:outline-none text-slate-200 ltr:pl-5 rtl:pr-5 placeholder:font-semibold"
                />
                <button className="absolute ltr:right-1 rtl:left-1 top-1/2 translate-y-[-50%] py-2 px-5 rounded-3xl bg-primary">
                  <div className="flex items-center gap-2 text-white">
                    <p>Search</p>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-4 items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="1x"
                    className="text-white"
                  />
                  <div className="hidden md:block text-secondary font-semibold">
                    Login / Sign up
                  </div>
                </div>
                <div className="w-px h-4 bg-secondary"></div>
                <div className="flex items-center gap-4 text-white">
                  <button>
                    <div className="relative">
                      <img
                        src={cart}
                        alt="Cart"
                        width={30}
                        height={30}
                        className="invert"
                      />
                      <div className="w-4 h-4 bg-primary rounded-full flex justify-center items-center text-[10px] absolute -bottom-1 -right-1">
                        12
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center">
          <div className="relative w-5/6 mb-5">
            <input
              type="text"
              name="search"
              placeholder="Type Here..."
              className="h-12 w-full bg-white/10 rounded-3xl focus:outline-none text-slate-200 pl-5 placeholder:font-semibold"
            />
            <button className="absolute right-1 top-1/2 translate-y-[-50%] py-2 px-5 rounded-3xl bg-primary">
              <div className="flex items-center gap-2 text-white">
                <p>Search</p>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="fixed top-0 left-0 h-screen w-screen z-10 bg-white/90">
          <div className="relative top-2 left-1/2 -translate-x-2">
            <button
              className="h-10 w-10 border-[1px] border-black rounded-full flex justify-center items-center font-bold text-3xl"
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="h-full flex justify-center items-center">
            <ul className="flex flex-col justify-center items-center gap-6 font-bold text-lg">
              {pages.map((page) => {
                let str = page.toLowerCase();
                str = str === "home" ? "" : str;
                if (str === current) {
                  return (
                    <li className="text-secondary" key={page}>
                      {page}
                    </li>
                  );
                } else {
                  return (
                    <li
                      className="text-black"
                      key={page}
                      onClick={() => setOpen(false)}
                    >
                      <Link to={"/" + str}>{page}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
