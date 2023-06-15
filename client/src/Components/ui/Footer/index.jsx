import { faBehance, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="h-fit pt-40 bg-[#1F1F21] rounded-t-[60px] flex justify-center pb-10">
      <div className="w-full flex flex-col items-center gap-10">
        <div className="w-5/6 grid grid-flow-row-dense grid-cols-1 2xl:grid-cols-4 gap-8">
          <div className="flex flex-col gap-6">
            <div className="w-fit text-[#31c9c0] text-xl font-semibold px-4 mr-3 border-[3px] border-[#31c9c0] rounded-3xl">
              E-STORE
            </div>
            <div className="text-lg text-slate-400 font-medium leading-6 max-h-[4.5rem] overflow-ellipsis overflow-hidden">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some formed humour.
            </div>
          </div>
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-y-6">
            <div className="flex flex-col gap-6">
              <div className="text-white font-bold">Meet E-STORE</div>
              <div className="flex flex-col gap-3 text-slate-400 text-lg font-semibold">
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-all duration-500"
                >
                  Blog
                </Link>
                <Link
                  to="/about"
                  className="hover:text-primary transition-all duration-500"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  Features
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-all duration-500"
                >
                  Contact us
                </Link>
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  Our Ecosystem
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-white font-bold">Quick Link</div>
              <div className="flex flex-col gap-3 text-slate-400 text-lg font-semibold">
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  News
                </Link>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-all duration-500"
                >
                  Article
                </Link>
                <Link
                  to="/about"
                  className="hover:text-primary transition-all duration-500"
                >
                  Help Center
                </Link>
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-all duration-500"
                >
                  License
                </Link>
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  Freebies
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-white font-bold">Category Link</div>
              <div className="flex flex-col gap-3 text-slate-400 text-lg font-semibold">
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  Graphics
                </Link>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-all duration-500"
                >
                  Video
                </Link>
                <Link
                  to="/about"
                  className="hover:text-primary transition-all duration-500"
                >
                  Presentation
                </Link>
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  Photos
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-all duration-500"
                >
                  Fonts
                </Link>
                <Link
                  to="/"
                  className="hover:text-primary transition-all duration-500"
                >
                  Web Templates
                </Link>
              </div>
            </div>
          </div>
          <div className="h-fit xl:h-full flex flex-col gap-3 2xl:gap-0 justify-between">
            <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-0 2xl:justify-between">
              <div className="text-white text-lg font-bold">Follow Us</div>
              <div className="flex gap-8 text-secondary text-xl">
                <button>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover:text-primary transition-all duration-500"
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faBehance}
                    className="hover:text-primary transition-all duration-500"
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-primary transition-all duration-500"
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="hover:text-primary transition-all duration-500"
                  />
                </button>
                <button>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="hover:text-primary transition-all duration-500"
                  />
                </button>
              </div>
            </div>
            <div className="h-0.5 w-full bg-secondary"></div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="text-white text-lg font-bold">Subscribe</div>
                <div className="text-secondary text-[17px] font-semibold">
                  Send me tips, trends, freebies, updates & offers.
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="search"
                  placeholder="Email Address"
                  className="h-[72px] w-full bg-white/10 rounded-full focus:outline-none text-slate-200 ltr:pl-10 rtl:pr-10 placeholder:font-medium placeholder:text-lg placeholder:text-white/30"
                />
                <button className="absolute h-14 ltr:right-2 rtl:left-2 top-1/2 translate-y-[-50%] px-10 rounded-full bg-primary ">
                  <div className="flex items-center gap-2 text-white text-lg font-semibold">
                    <p>Subscribe</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-slate-600"></div>
        <div className="w-5/6 flex flex-col gap-4 2xl:gap-0 2xl:flex-row lg:justify-between">
          <div className="text-white/40 text-lg font-medium">
            © 2023 Electronic Store - E-Store Powered By Bassem Elsayed Team.
            All rights reserved.
          </div>
          <div className="flex gap-3">
            <div className="text-white/40 text-lg font-medium">
              Term And Conditions
            </div>
            <div className="h-full w-0.5 bg-white/40"></div>
            <div className="text-white/40 text-lg font-medium">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
