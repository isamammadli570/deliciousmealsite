import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ResponsiveNav from "./components/ResponsiveNav";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-stone-100">
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[300px] h-screen bg-stone-100 z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-stone-100 z-10 duration-300"
        }
      >
        {isOpen && <ResponsiveNav setIsOpen={setIsOpen} />}
      </div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <Category />
      <Footer />
    </div>
  );
}

export default AppLayout;
