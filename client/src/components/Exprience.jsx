import React from "react";
import Title from "../ui/Title";
import { FaRegDotCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Exprience = () => {
  return (
    <div className="h-auto">
      <div className="lg:mt-24 mt-32 text-center mb-12">
        <Title text={"QUALITY"} texttwo={"EDUCATION & EXPERICENCE"} />
      </div>
      <div className="flex items-start h-full w-full max-w-5xl mx-auto lg:flex-row flex-col">
        <div className="lg:w-2/3 w-full flex flex-col ">
          <div>
            <h1 className="leading-[34px] text-[28px] font-small lg:text-start text-center">
              My Education
            </h1>
          </div>
          <div className="relative border-primary border-l-[1px] mt-8">
            <div className="absolute left-[-8px] top-4">
              <FaRegDotCircle className="title text-primary" />
            </div>
            <div className="flex flex-col gap-8">
              <motion.div
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, staggerChildren: 0.5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pl-4"
              >
                <h1>BUSINESS ADMINISTRATION / BUSINESS MANAGEMENT</h1>
                <p className="flex items-center justify-between text-lightgray">
                  <strong className="text-seconday">ANADOLU UNIVERSITY</strong>
                  2021 - 2024
                </p>
                <p className="text-lightgray font-small text-[16px] leading-[24px]">
                  I studied business management subjects during my university
                  education and gained basic knowledge and skills in this field.
                  Additionally, during the periods I worked as an intern, I had
                  the opportunity to manage daily operations of businesses and
                  develop my communication and teamwork skills. These
                  experiences further motivated me to be successful in the field
                  of business management.
                </p>
              </motion.div>
              <div className="absolute left-[-8px] top-44">
                <FaRegDotCircle className="title text-primary" />
              </div>
              <motion.div
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.2, staggerChildren: 0.5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pl-4"
              >
                <h1> BUSINESS MANAGEMENT</h1>
                <p className="flex items-center justify-between text-lightgray">
                  <strong className="text-seconday">GIRESUN UNIVERSITY</strong>
                  2019 - 2021
                </p>
                <p className="text-lightgray font-small text-[16px] leading-[24px]">
                  While studying at this university, I developed myself in the
                  field of business administration. I gained a lot of new
                  information about projects, teamwork, and supply-demand
                  curves.
                </p>
              </motion.div>
              <div className="absolute left-[-8px] top-[350px]">
                <FaRegDotCircle className="title text-primary" />
              </div>
              <motion.div
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 1.7, staggerChildren: 0.5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pl-4"
              >
                <h1>Department of Electricity and Electronics</h1>
                <p className="flex items-center justify-between text-lightgray">
                  <strong className="text-seconday">
                    Industrial Vocational High School
                  </strong>
                  2011 - 2015
                </p>
                <p className="text-lightgray font-small text-[16px] leading-[24px]">
                  I studied in the Electrical and Electronics Department at high
                  school, specializing in Electrical Installations and Panel
                  Assembly.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 lg:pl-4 w-full pl-0">
          <div>
            <h1 className="leading-[34px] text-[28px] font-small lg:text-start text-center mt-8 lg:mt-0">
              My Exprience
            </h1>
          </div>
          <div className="relative border-primary border-l-[1px] mt-8">
            <div className="absolute left-[-8px] top-4">
              <FaRegDotCircle className="title text-primary" />
            </div>
            <div className="flex flex-col gap-8">
              <motion.div
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, staggerChildren: 0.5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pl-4"
              >
                <h1>Account Budget Implementation</h1>
                <p className="flex items-center justify-between text-lightgray">
                  <strong className="text-seconday">
                    Account Budget Implementation-Github
                  </strong>
                  2023
                </p>
                <p className="text-lightgray font-small text-[16px] leading-[24px]">
                  In this project, the user can view their accounts monthly,
                  including market receipts, bills, payments, rent expenses, and
                  monthly income and expenses, allowing for budget control in
                  the system. I used Firebase for the backend and React for the
                  frontend.
                </p>
              </motion.div>
              <div className="absolute left-[-8px] top-44">
                <FaRegDotCircle className="title text-primary" />
              </div>
              <motion.div
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.2, staggerChildren: 0.5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pl-4"
              >
                <h1>Blog App</h1>
                <p className="flex items-center justify-between text-lightgray">
                  <strong className="text-seconday">Blog App-Github</strong>2023
                </p>
                <p className="text-lightgray font-small text-[16px] leading-[24px]">
                  In this project, I created a blog application where users can
                  comment and engage in discussions. It includes features such
                  as adding categories, posts, comments, and more. I used Prisma
                  with MongoDB for the backend and TypeScript with Next.js for
                  the frontend.
                </p>
              </motion.div>
              <div className="absolute left-[-8px] top-[350px]">
                <FaRegDotCircle className="title text-primary" />
              </div>
              <motion.div
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 1.7, staggerChildren: 0.5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pl-4"
              >
                <h1>Job Application</h1>
                <p className="flex items-center justify-between text-lightgray">
                  <strong className="text-seconday">
                    Job Application-Github
                  </strong>
                  2024
                </p>
                <p className="text-lightgray font-small text-[16px] leading-[24px]">
                  In this project, I created a LinkedIn-style application where
                  employers can log in, post job listings, and users can apply
                  for jobs. I used Firebase for the backend and React for the
                  frontend.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
