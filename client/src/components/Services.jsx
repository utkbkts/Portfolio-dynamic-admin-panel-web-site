import React, { useRef } from "react";
import Title from "../ui/Title";
import { GrPersonalComputer } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { GiSpiderWeb } from "react-icons/gi";
import { TbBrandWebflow } from "react-icons/tb";
import { AiTwotoneHtml5 } from "react-icons/ai";
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

const Services = () => {
  const ref = useRef(null);
  return (
    <section className="h-auto mb-4">
      <motion.div
        ref={ref}
        variants={variants}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        className="mb-12 lg:mt-0 mt-[10rem]"
      >
        <Title text={"SERVICE"} texttwo={"MY SERVICES"} />
      </motion.div>
      <div className="flex items-center justify-start h-full w-full max-w-6xl mx-auto lg:flex-row flex-col">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          <motion.div
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, staggerChildren: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center pb-4 gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-primary">
                <GrPersonalComputer size={30} className="text-white" />
              </div>
              <div>
                <h1 className="font-title leading-[24px] text-[24px] text-[#343a40]">
                  Web Design
                </h1>
              </div>
            </div>
            <p className="font-small text-paragraf text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              harum illo laborum nesciunt nostrum voluptates dolor enim facilis
              nam optio pariatur mollitia iste, officiis eveniet reiciendis
              expedita dolorem culpa. Minima.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.2, staggerChildren: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center pb-4 gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-primary">
                <TbBrandWebflow size={30} className="text-white" />
              </div>
              <div>
                <h1 className="font-title leading-[24px] text-[24px] text-[#343a40]">
                  Web Development
                </h1>
              </div>
            </div>
            <p className="font-small text-paragraf text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              harum illo laborum nesciunt nostrum voluptates dolor enim facilis
              nam optio pariatur mollitia iste, officiis eveniet reiciendis
              expedita dolorem culpa. Minima.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1.7, staggerChildren: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center pb-4 gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-primary">
                <GiSpiderWeb size={30} className="text-white" />
              </div>
              <div>
                <h1 className="font-title leading-[24px] text-[24px] text-[#343a40]">
                  Full-Stack Dev.
                </h1>
              </div>
            </div>
            <p className="font-small text-paragraf text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              harum illo laborum nesciunt nostrum voluptates dolor enim facilis
              nam optio pariatur mollitia iste, officiis eveniet reiciendis
              expedita dolorem culpa. Minima.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 2, staggerChildren: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center pb-4 gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-primary">
                <AiTwotoneHtml5 size={30} className="text-white" />
              </div>
              <div>
                <h1 className="font-title leading-[24px] text-[24px] text-[#343a40]">
                  Front End Dev.
                </h1>
              </div>
            </div>
            <p className="font-small text-paragraf text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              harum illo laborum nesciunt nostrum voluptates dolor enim facilis
              nam optio pariatur mollitia iste, officiis eveniet reiciendis
              expedita dolorem culpa. Minima.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            transition={{ delay: 2.5, duration: 2.5, staggerChildren: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center pb-4 gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-primary">
                <CiSearch size={30} className="text-white" />
              </div>
              <div>
                <h1 className="font-title leading-[24px] text-[24px] text-[#343a40]">
                  SEO{" "}
                </h1>
              </div>
            </div>
            <p className="font-small text-paragraf text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              harum illo laborum nesciunt nostrum voluptates dolor enim facilis
              nam optio pariatur mollitia iste, officiis eveniet reiciendis
              expedita dolorem culpa. Minima.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            transition={{ delay: 3, duration: 3, staggerChildren: 0.5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center justify-center pb-4 gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-primary">
                <IoCreateOutline size={30} className="text-white" />
              </div>
              <div>
                <h1 className="font-title leading-[24px] text-[24px] text-[#343a40]">
                  Content Creating
                </h1>
              </div>
            </div>
            <p className="font-small text-paragraf text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              harum illo laborum nesciunt nostrum voluptates dolor enim facilis
              nam optio pariatur mollitia iste, officiis eveniet reiciendis
              expedita dolorem culpa. Minima.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
