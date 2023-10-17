"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

const devices = [
  {
    type: "Apple",
    name: "MacBook Air",
    price: 5,
    image: "/images1/MacBookAir.png",
  },
  {
    type: "Google",
    name: "Google Pixel",
    price: 2,
    image: "/images1/GooglePixel.png",
  },
  {
    type: "Apple",
    name: "Apple Watch",
    price: 1,
    image: "/images1/AppleWatch.png",
  },
  {
    type: "Lenovo",
    name: "Lenovo Legion Pro",
    price: 4,
    image: "/images1/LenovoLegionPro.png",
  },
];

export default function deviceSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {devices.map((device, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="mx-auto max-w-[385px] sm:mx-0">
                <Image src={device.image} width={380} height={284} alt="" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] uppercase text-secondary">
                      {device.type}
                    </div>
                    <h3 className="text-lg font-bold uppercase">
                      {device.name}
                    </h3>
                    <div className=" font-semibold uppercase text-accent">
                      {device.price}$/day
                    </div>
                  </div>

                  <div className="flex h-max gap-x-2 text-accent">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>

                <div className="mb-10 flex w-max gap-x-3 xl:gap-x-4"></div>
                <button className="btn btn-accent btn-lg">See details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
