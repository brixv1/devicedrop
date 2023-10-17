"use client";

import Image from "next/image";

import {
  MdDevicesOther,
  MdOutlinePersonAddAlt,
  MdRocketLaunch,
} from "react-icons/md";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.15,
  });
  return (
    <section className="section flex items-center" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="mb-8 flex-1 xl:mb-0"
          >
            <Image
              className="rounded-[20px]"
              src={"/images1/About.svg"}
              width={500}
              height={400}
              alt=""
            />
          </motion.div>

          <div className="flex flex-1 items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Device renting simplified.
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Renting, selecting, and repairing made easy. Our convenient
                locations, wide range of Devices, and dependable repair services
                guarantee a smooth experience.
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-12 flex items-center gap-x-8"
              >
                <div className="flex w-[100px] flex-col">
                  <MdDevicesOther className="mb-2 text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={24} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="text-[13px] font-semibold uppercase text-secondary">
                    device <br /> types
                  </div>
                </div>

                <div className="flex w-[100px] flex-col">
                  <MdOutlinePersonAddAlt className="mb-2 text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={800} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="text-[13px] font-semibold uppercase text-secondary">
                    active <br /> customers
                  </div>
                </div>

                <div className="flex w-[100px] flex-col">
                  <MdRocketLaunch className="mb-2 text-5xl text-accent" />
                  <div className="mb-2 text-3xl font-black">
                    {inView ? (
                      <CountUp start={0} end={55} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="text-[13px] font-semibold uppercase text-secondary">
                    countries <br /> delivered
                  </div>
                </div>
              </motion.div>
              <motion.button
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="hidden h-16 w-full max-w-[184px] rounded-[10px] bg-accent text-[13px] font-medium uppercase tracking-[2px] text-white hover:bg-accent-hover xl:block"
              >
                See all devices
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
