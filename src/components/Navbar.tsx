"use client";

import { useState } from "react";
import LogoIcon from "@/app/assets/logo-icon.svg";
import Image from "next/image";

const navLinks = ["Home", "Features", "How it works", "Blog", "Resources", "About Us"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-5 md:px-12.5 py-8 md:py-[50px]">
        <div className="flex items-center gap-2">
          <Image src={LogoIcon} alt="logo" />
          <span className="text-white font-bold text-3xl">Habitus</span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-lg font-medium hover:text-white/80 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-white text-[#111827] text-base font-semibold px-5 md:px-[33px] py-[8px] rounded-full hover:bg-white/90 transition-colors">
            Log In
          </button>
          <button
            className="flex md:hidden flex-col justify-center gap-[5px] w-8 h-8"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-orange z-50 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-8 right-8 text-white"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-2xl font-medium hover:text-white/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-white text-[#111827] text-base font-semibold px-8 py-3 rounded-full mt-4">
            Log In
          </button>
        </div>
      )}
    </>
  );
}
