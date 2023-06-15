import React, { useState } from "react";
import { Helmet } from "react-helmet";
import mainImage from "../assets/images/auth/main-image.jpeg";
import Login from "../Components/ui/Auth/Login";
import Register from "../Components/ui/Auth/Register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <section className="relative w-full h-screen flex">
        <div className="absolute top-0 left-0 lg:relative w-full lg:w-1/2 h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-tr before:from-[#e91e63] before:to-primary before:z-[1] before:mix-blend-screen before:opacity-40">
          <img
            src={mainImage}
            alt="Main"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Register setIsLogin={setIsLogin} />
        )}
      </section>
    </>
  );
}
