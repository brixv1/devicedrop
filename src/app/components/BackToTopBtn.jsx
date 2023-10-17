"use client";

import React, { useEffect, useState } from "react";

import { FaChevronUp } from "react-icons/fa";

import { Link } from "react-scroll";

export default function BackToTopBtn() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && "hidden"
      } fixed bottom-11 right-16 z-10 flex h-12 w-12 cursor-pointer items-center justify-center border-2 border-white bg-accent text-white hover:bg-accent-hover`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
}
