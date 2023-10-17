"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

import Image from "next/image";

const testimonialData = [
  {
    message:
      "DeviceDrop, you've got my respect, man. Your device rental service is off the charts. It's like you've laid the smackdown on tech problems, and I can't thank you enough. Keep on electrifying, DeviceDrop! - Dwayne Johnson",
    avatar: "/images1/TheRock.jpg",
    name: "Dwayne Johnsen",
    job: "Actor",
  },
  {
    message:
      "DeviceDrop has been a lifesaver for me on countless occasions. Their quick and reliable device rental service has made my missions a whole lot easier.  Thanks, DeviceDrop, for always having my back! - John Wick",
    avatar: "/images1/JohnWick.jpg",
    name: "John Wick",
    job: "...",
  },
  {
    message:
      "DeviceDrop's device rental service? It's smooth, like a perfectly executed heist. They've got it down, no fuss, no mess. I can't help but give them a nod for making my life easier. Thanks, DeviceDrop, for keeping it cool. - Ryan Gosling",
    avatar: "/images1/RyanGosling.jpg",
    name: "Ryan Gosling",
    job: "Driver",
  },
];

export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[675px] lg:h-[625px] xl:h-[575px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center">
                <FaQuoteLeft className="mb-6 text-7xl text-accent" />
                <div className="mb-12 max-w-[874px] text-2xl font-medium xl:text-4xl">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={128}
                  height={128}
                  alt=""
                  className="mb-4 rounded-full"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
