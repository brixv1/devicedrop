"use client";

import { useContext } from "react";

import Search from "./Search";

import { SearchContext } from "../context/search";

import Image from "next/image";

import { motion, easeInOut } from "framer-motion";

import { fadeIn } from "/variants";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen bg-[#b2b7c2]/10 xl:h-[90vh]" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex h-full flex-col items-center justify-center xl:flex-row xl:justify-start">
          {/* text */}
          <div className="mt-16 text-center xl:mt-0 xl:max-w-xl xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Best <span className="text-accent">Device</span> Deals
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description mx-auto mb-6 max-w-[550px] xl:mx-0 xl:mb-10"
            >
              Rent the perfect device for any occasion with our wide selection
              of affordable and reliable rentals.
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex justify-center gap-x-3 xl:justify-start"
            >
              {/* btn appstore */}
              <button className="btn-cta">
                <Image
                  src={"/icons1/appstore-btn.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
              {/* btn google  */}
              <button className="btn-cta">
                <Image
                  src={"/icons1/playstore-btn.svg"}
                  width={132}
                  height={36}
                  alt=""
                />
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative h-full max-h-[50vh] w-full md:max-w-[70vw] xl:absolute xl:-right-[100px] xl:top-48 xl:max-h-[542px] xl:max-w-[860px] min-[1680px]:right-[120px]"
          >
            <Image
              src={"/images1/Hero.svg"}
              fill
              alt=""
              style={{ objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[65px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="mx-auto -mt-12 w-full max-w-[1300px]">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}
