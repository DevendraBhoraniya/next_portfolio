import { Home, About, Work } from "@/assets";
import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className="flex justify-between py-5 my-10 border rounded-full px-10" >
        <li>LOGO</li>
        <div className="sm:flex gap-8 hidden" >
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
        </div>
        <div className="flex gap-8 sm:hidden " >
            <Home />
            <About />
            <Work />
        </div>
      </ul>
    </>
  );
};

export default Navbar;
