import React, { useContext, useEffect, useRef } from "react";
import Title from "../ui/Title";
import logo from "../assets/ben.jpg";
import { motion, useInView } from "framer-motion";
import { GetAboutPost } from "../redux/actions/AboutActions";
import { useDispatch, useSelector } from "react-redux";
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
const variants2 = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
      delay: 0.5,
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { postsAbout } = useSelector((state) => state.aboutPost);
  useEffect(() => {
    dispatch(GetAboutPost());
  }, []);
  return (
    <section className="h-auto">
      <>
        <motion.div
          ref={ref}
          variants={variants}
          viewport={{ once: true }}
          initial="initial"
          whileInView={"animate"}
        >
          <Title text={"ABOUT"} texttwo={"ABOUT"} />
        </motion.div>
        {postsAbout.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-start h-full w-full max-w-6xl mx-auto lg:flex-row flex-col"
          >
            <motion.div
              ref={ref}
              variants={variants2}
              viewport={{ once: true }}
              initial="initial"
              whileInView={"animate"}
              className="lg:w-1/2 w-full flex lg:items-start relative items-center justify-center h-full mb-12 md:mt-0"
            >
              <img
                src={item.selectedFile}
                alt="image"
                className="w-[300px] h-[445px] rounded-md object-cover bg-orange-500"
              />
            </motion.div>
            <div className="lg:w-2/3 w-full h-full flex flex-col lg:items-start items-center justify-center lg:justify-start gap-8">
              <div className="flex flex-col items-center lg:items-start gap-4">
                <motion.h1
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1, staggerChildren: 0.5 }}
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="font-title text-seconday title-2 whitespace-nowrap"
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1, staggerChildren: 0.5 }}
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-lightgray lg:text-start text-center font-small leading-[24px]"
                >
                  {item.paragraph}
                </motion.p>
              </div>
              <motion.div
                ref={ref}
                variants={variants}
                viewport={{ once: true }}
                initial="initial"
                whileInView={"animate"}
              >
                <div className="bg-[#e9eaeb] w-auto border-b-2 border-b-blue py-2 px-4 rounded-md">
                  <h1>INFORMATION</h1>
                </div>
                <div className="lg:w-[800px] w-full border border-[#e9eaeb] rounded-md flex md:flex-row flex-col">
                  <div className="lg:w-[800px] w-full">
                    <div className="py-4 border border-[#e9eaeb] px-4 flex items-center lg:flex-row flex-col justify-between oven">
                      <span>Name</span>
                      <span>{item.name}</span>
                    </div>
                    <div className="py-4 border border-[#e9eaeb] px-4 flex lg:flex-row flex-col items-center justify-between oven">
                      <span>Birthday</span>
                      <span>{item.birthday}</span>
                    </div>
                    <div className="py-4 border border-[#e9eaeb] px-4 flex lg:flex-row flex-col items-center justify-between oven">
                      <span>Exprience</span>
                      <span>{item.experience}+</span>
                    </div>
                    <div className="py-4 border border-[#e9eaeb] px-4 flex lg:flex-row flex-col items-center justify-between oven">
                      <span>Project Finished</span>
                      <span>{item.projectFinished}+</span>
                    </div>
                  </div>
                  <div className="lg:w-[800px] w-full">
                    <div className="py-4 border border-[#e9eaeb] px-4 flex lg:flex-row flex-col items-center justify-between oven">
                      <span>Education Level</span>
                      <span>{item.educationLevel}</span>
                    </div>
                    <div className="py-4 border border-[#e9eaeb] px-4 flex lg:flex-row flex-col items-center justify-between oven">
                      <span>Phone</span>
                      <span>+9{item.phone}</span>
                    </div>{" "}
                    <div className="py-4 border border-[#e9eaeb] px-4 flex lg:flex-row flex-col items-center justify-between oven">
                      <span>Email</span>
                      <span>{item.email}</span>
                    </div>
                    <div className="py-4 border border-[#e9eaeb] px-4 flex lg:flex-row flex-col items-center justify-between oven">
                      <span>Freelance</span>
                      <span>{item.freelance}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </>
    </section>
  );
};

export default About;
