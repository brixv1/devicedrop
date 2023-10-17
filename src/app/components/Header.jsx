"use client";

import { useContext, useEffect, useState } from "react";

import Image from "next/image";

import { Link } from "react-scroll";

import SearchMobile from "./SearchMobile";

import { useMediaQuery } from "react-responsive";

import { BiMenuAltRight, BiX } from "react-icons/bi";

import { SearchContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white py-2 shadow-md" : "bg-transparent py-4 shadow-none"
      } fixed z-20 mx-auto w-full max-w-[1920px] transition-all duration-300`}
    >
      <div className="mx-auto flex flex-col xl:container xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-center justify-between px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons1/logo.svg"} width={194} height={64} alt="" />
          </Link>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>

        <nav
          className={`${
            nav ? "max-h-max px-4 py-8 xl:px-0 xl:py-0" : "max-h-0 xl:max-h-max"
          } flex w-full flex-col gap-y-6 overflow-hidden bg-white text-center text-sm font-bold uppercase transition-all duration-150 xl:h-max xl:w-max xl:flex-row xl:gap-x-8 xl:bg-transparent xl:pb-0 xl:text-left xl:text-[15px] xl:font-medium xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="devices"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Devices
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonial"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>
          <Link
            className="btn btn-primary btn-sm mx-auto max-w-[164px] xl:hidden"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all devices
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
