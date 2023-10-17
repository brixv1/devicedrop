"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched customer satisfaction and excellence
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mx-auto mb-2 max-w-[680px] text-center"
        >
          We stand out from the competition by our unwavering commitment to
          providing exceptional services. Every interaction with us is designed
          to exceed your expectations, starting from the moment you engage with
          us.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mb-6 hidden justify-center md:flex xl:mb-2"
        >
          <Image src={"/images1/Why.svg"} width={800} height={350} alt="" />
        </motion.div>
      </div>
    </section>
  );
}
