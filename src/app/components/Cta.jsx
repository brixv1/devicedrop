"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

export default function Cta() {
  return (
    <section
      className="bg-[#b2b7c2]/10py-24 flex items-end overflow-hidden py-24 pb-0 xl:py-48"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          <div className="mb-12 flex-1 text-center md:mb-0 md:text-left xl:ml-24">
            <div className="order-2 mx-auto max-w-[620px] xl:order-none">
              <motion.h2
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2 text-5xl"
              >
                Download our App now and enjoy you're device tomorrow
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-10 text-lg"
              >
                Download the DeviceDrop app now and enjoy the best device rental
                service available. With quick and reliable rentals, you'll never
                be without the device you need. Try it today!
              </motion.p>

              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex justify-center gap-x-3 md:justify-start"
              >
                <button className="btn-cta">
                  <Image
                    src={"/icons1/appstore-btn.svg"}
                    width={160}
                    height={45}
                    alt=""
                  />
                </button>
                <button className="btn-cta">
                  <Image
                    src={"/icons1/playstore-btn.svg"}
                    width={160}
                    height={45}
                    alt=""
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
