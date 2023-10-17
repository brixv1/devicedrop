"use client";

import React, { useState } from "react";

import { Menu } from "@headlessui/react";

import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

// react date range css
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Menu as="div" className="flex h-full w-full xl:flex-row">
      <div className="relative flex-1">
        {/* btn */}
        <Menu.Button className="dropdown-btn flex h-full w-full flex-col items-center justify-center  xl:pl-8">
          <div className="flex flex-col items-center gap-y-2 xl:flex-row xl:gap-x-2 xl:gap-y-0">
            <FaCalendarAlt className="text-accent" />
            <div className="text-[15px] font-bold uppercase">Select Date</div>
          </div>
          <div className="flex items-center gap-x-3 xl:ml-6">
            <div className="text-[13px] font-medium text-secondary">
              {format(date[0].startDate, "dd/MM/yyy")}
            </div>
            <FaArrowRightLong className="text-[12px] text-accent" />
            <div className="text-[13px] font-medium text-secondary">
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd/MM/yyyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd/MM/yyyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>

        {/* menu */}
        <Menu.Items className="drodown-menu absolute -top-96 left-1/2 z-50 -translate-x-1/2 transform overflow-hidden rounded-[10px] shadow-lg xl:left-[24%] xl:top-[90px] xl:-translate-x-0">
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#22c55e"]}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
}
