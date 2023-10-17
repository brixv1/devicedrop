"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

export default function Brands() {
  return (
    <section className="flex flex-col justify-center bg-white xl:h-[200px] xl:pt-16">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-3 place-items-center gap-6 xl:flex xl:flex-wrap xl:justify-between xl:gap-x-6">
          <div>
            <Image
              src={"icons1/brands/apple.svg"}
              width={60}
              height={60}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"icons1/brands/google.svg"}
              width={60}
              height={60}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"icons1/brands/microsoft.svg"}
              width={60}
              height={60}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"icons1/brands/lenovo.svg"}
              width={60}
              height={60}
              alt=""
            />
          </div>
          <div>
            <Image
              src={"icons1/brands/samsung.svg"}
              width={60}
              height={60}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
