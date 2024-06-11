"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav
        className={`absolute top-0 z-40 flex w-full flex-col space-y-2 rounded-md bg-gradient-to-r from-[#0C0E23] to-[#04071D] px-3 py-2 text-white opacity-80 md:hidden`}
      >
        <div className="flex items-center justify-between">
          <span className="text-white">&lt;useKhalid /&gt;</span>
          <button onClick={toggleNavbar} className="text-lg font-bold">
            {isOpen ? (
              <RiCloseLargeLine className="h-7 w-7 text-white" />
            ) : (
              <RiMenu3Line className="h-7 w-7 text-white" />
            )}{" "}
          </button>
        </div>

        <div
          className={`flex overflow-hidden  ${isOpen ? "max-h-[1000px]" : "max-h-0"} flex-col items-center space-y-3`}
        >
          <Link href={"#about"}>About</Link>
          <Link href={"#contact"}>Contact</Link>
          <Link href={"#blog"}>Blog</Link>
          <Link href={"#project"}>Project</Link>
        </div>
      </nav>

      {/* destop navigation */}
      <nav className="absolute top-0 z-40 hidden w-full items-center justify-around bg-gradient-to-r from-[#0C0E23] to-[#04071D] px-2 py-4 opacity-80 md:flex">
        <div>
          <span className="text-white">&lt;useKhalid /&gt;</span>
        </div>
        <div className="flex items-center space-x-3 text-white">
          <Link href={"#about"}>About</Link>
          <Link href={"#contact"}>Contact</Link>
          <Link href={"#blog"}>Blog</Link>
          <Link href={"#project"}>Project</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
