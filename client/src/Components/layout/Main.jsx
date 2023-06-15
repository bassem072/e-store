import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

export default function Main({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="h-full flex justify-center my-16">{children}</div>
      <Footer />
    </div>
  );
}
