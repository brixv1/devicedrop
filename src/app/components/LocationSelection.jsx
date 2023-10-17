"use client";

import React, { useState } from "react";

import { Menu } from "@headlessui/react";

import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  "1234 Elm Street, USA",
  "5678 Maple Avenue, Canada",
  "9012 Oak Road, UK",
];

export default function LocationSelection() {
  const [location, setLocation] = useState("Select Location");

  return (
    <Menu as="div" className="flex h-full w-full xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn flex h-full w-full flex-col items-center justify-center xl:items-start xl:pl-8">
          <div className="flex h-16 w-full justify-center xl:h-full  xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col items-center gap-y-2 xl:flex-row xl:gap-x-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
                <div className="text-[15px] font-bold uppercase">
                  Select Pick-Up Location
                </div>
              </div>
              <div className="text-center text-[13px] font-medium uppercase text-secondary xl:ml-6 xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>

        <Menu.Items className="drodown-menu absolute -top-56 left-1/2 z-10 w-full max-w-[332px] -translate-x-1/2 transform rounded-[10px] bg-white py-6 text-center text-sm shadow-lg xl:left-[24%] xl:top-[90px] xl:-translate-x-0 xl:text-left">
          {locations.map((location, index) => {
            return (
              <div
                onClick={() => setLocation(location)}
                key={index}
                className="cursor-pointer py-4 text-[13px] uppercase hover:bg-gray-50 xl:pl-10"
              >
                {location}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}
