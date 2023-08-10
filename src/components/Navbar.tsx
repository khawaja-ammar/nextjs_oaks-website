"use client";

import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useState, ReactNode } from "react";
import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";

const NavLeft = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Products",
    link: "/products",
  },
];

const NavRight = [
  {
    name: "Custom",
    link: "/customorder",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  // {
  //   name: "Blog",
  //   link: "/blog",
  // },
];

export default function Navbar({ children }: { children: ReactNode }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`fixed top-0 h-screen w-60 border border-black bg-primary duration-300 ${
          sidebarActive ? "left-0" : "left-[-15rem]"
        }`}
      >
        <MdOutlineClose
          className="relative left-48 top-5 cursor-pointer text-2xl text-black"
          onClick={() => setSidebarActive(false)}
        />
        <ul className="flex list-none flex-col items-center gap-10 pt-24">
          <li
            className={`${pathname === "/" && "text-white"}`}
            onClick={() => setSidebarActive(false)}
          >
            <Link key={-1} href="/">
              Home
            </Link>
          </li>
          {[...NavLeft, ...NavRight].map((item, i) => {
            return (
              <li
                key={i}
                className={`${pathname === item.link && "text-white"}`}
                onClick={() => setSidebarActive(false)}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={`relative duration-300  ${
          sidebarActive ? "left-[15rem]" : "left-0"
        }`}
      >
        {/* NOTE: Main Navbar Grid */}
        <div className="bg-primary text-white">
          <nav className="navPadding">
            <div className="grid list-none grid-cols-1 grid-rows-1 content-center items-center justify-center gap-5 lg:grid-cols-3">
              <MdMenu
                className="absolute cursor-pointer text-2xl text-white lg:hidden"
                onClick={() => setSidebarActive((prev) => !prev)}
              />
              <ul className="hidden items-center justify-center gap-16 lg:flex">
                {NavLeft.map((item, i) => {
                  return (
                    <li key={i} className="hover:cursor-pointer">
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>

              <div className="self-center justify-self-center">
                <Link href="/">
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo.svg"
                      width="120px"
                      height="75px"
                      alt="Oaks Logo"
                    />
                    {/* </div> */}
                  </div>
                </Link>
              </div>

              <ul className="hidden items-center justify-center gap-16 lg:flex">
                {NavRight.map((item, i) => {
                  return (
                    <li key={i} className="hover:cursor-pointer">
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>

        {children}
      </div>
    </>
  );
}
