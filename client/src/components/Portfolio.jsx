import React, { useEffect, useRef, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { GetAboutPortfolio } from "../redux/actions/PortfolioActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import moment from "moment";
import Spinner from "./Spinner";
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
const Portfolio = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(30);
  const { posts } = useSelector((state) => state.portfolioPost);
  const [dataIndex, setDataIndex] = useState(posts);
  useEffect(() => {
    setDataIndex(posts);
  }, [posts]);
  //! new portföy
  const isPostAddedWithinLast7Days = (createdAt) => {
    const postDate = moment(createdAt);
    const currentDate = moment();
    const differenceInDays = currentDate.diff(postDate, "days");
    return differenceInDays <= 7;
  };

  const uniqueCategories = [...new Set(posts.flatMap((item) => item.category))];

  const handleClick = (category) => {
    if (category === "ALL") {
      setDataIndex(posts);
    } else if (category) {
      const data = posts.filter((item) => item.category.includes(category));
      setDataIndex(data);
    }
  };

  useEffect(() => {
    dispatch(GetAboutPortfolio());
  }, []);

  //time


  return (
    <section className="h-auto mt-24">
      <motion.div
        ref={ref}
        variants={variants}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        className="mb-12 text-center"
      >
        <Title text={"GALLERY"} texttwo={"MY PORTFOLIO"} />
      </motion.div>
      {loading ? (
        <div className="flex items-center justify-center font-title gap-4">
          <h1>Wait while the data is loading</h1>
          <Spinner />
        </div>
      ) : (
        <div className="flex items-center  justify-center h-full w-full max-w-6xl mx-auto  flex-col">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button onClick={() => handleClick("ALL")} text={"ALL"} />
            {uniqueCategories.map((cat, index) => (
              <Button onClick={() => handleClick(cat)} key={index} text={cat} />
            ))}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:h-[700px]  overflow-auto">
            {dataIndex.map((item) => (
              <motion.div
                key={item._id}
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full overflow-hidden relative image-hover"
              >
                <div className="relative">
                  <img
                    src={item.image.url}
                    alt="image"
                    loading="lazy"
                    className="w-full object-cover h-[30vh]"
                  />
                  <Link
                    target="_blank"
                    to={item.link}
                    className="absolute cursor-pointer z-[999] left-1/2 lg:top-1/2 md:top-24 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-seconday w-full flex items-center gap-2 justify-center text-white font-small uppercase px-4 py-2 rounded-md flex-col text-center"
                  >
                    {item.title}
                    <AiFillGithub size={25} />
                  </Link>
                </div>
                {isPostAddedWithinLast7Days(item.createdAt) && (
                  <div className="absolute  bg-primary font-title text-red uppercase p-2  top-0 right-0">
                    NEW PROJECT
                  </div>
                )}
                <div className="bg-primary p-1 flex items-center gap-2 justify-center">
                  <span className="font-title text-[16px] text-seconday">
                    {moment(item.createdAt).format("LL")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
