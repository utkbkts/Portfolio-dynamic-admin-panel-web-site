import React, { useRef, useState } from "react";
import Title from "../ui/Title";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
      delay: 0.5,
    },
  },
};

const Skills = () => {
  const ref = useRef(null);
  return (
    <section className="h-screen mt-24">
      <motion.div
        ref={ref}
        variants={variants}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
      >
        <Title text={"SKILLS"} texttwo={"MY SKILLS"} />
      </motion.div>

      <div className="flex items-start justify-center h-full w-full max-w-6xl mx-auto lg:flex-row flex-col gap-12">
        <div className="flex items-center flex-col lg:w-1/2 w-full p-4 lg:p-0 justify-center gap-4">
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>HTML</span>
              <span>99%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-yellow transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>CSS</span>
              <span>99%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-red transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>JAVASCRIPT</span>
              <span>95%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-primary transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>MONGODB</span>
              <span>95%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 2, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-blue transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>FIREBASE</span>
              <span>95%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 2.2, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-yellow transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col lg:w-1/2 w-full p-4 lg:p-0 justify-center gap-4">
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>REACT</span>
              <span>95%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 2.4, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-red transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>NEXTJS</span>
              <span>95%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 2.4, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-blue transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>NODE.JS</span>
              <span>90%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 2.8, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-yellow transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>TYPESCRIPT</span>
              <span>95%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 3, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-red transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="flex justify-between items-center">
              <span>EXPRESS.JS</span>
              <span>85%</span>
            </p>
            <div className="flex h-[1rem] overflow-hidden text-[.75rem] bg-[#e9ecef]  rounded-md">
              <motion.div
                initial={{ width: "0%" }}
                viewport={{ once: true }}
                transition={{ delay: 3.2, duration: 4, staggerChildren: 0.5 }}
                whileInView={{ width: "95%" }}
                className="w-[95%] bg-blue transition-all duration-300 rounded-md"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
