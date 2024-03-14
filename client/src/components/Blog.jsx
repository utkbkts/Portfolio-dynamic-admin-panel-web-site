import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { GetBlogPost } from "../redux/actions/BlogActions";
const Blog = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const dispatch = useDispatch();
  const { postsBlog } = useSelector((state) => state.BlogPost);
  useEffect(() => {
    dispatch(GetBlogPost());
  }, []);

  //!new post
  const CreatedHandle = (createdat) => {
    const postDate = new Date(createdat);
    const currentDate = new Date();
    const diffInDays = (currentDate - postDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7;
  };
  return (
    <section className="h-auto mt-24 mb-24 overflow-hidden">
      <div className="text-center mb-12">
        <Title text={"LATEST BLOG"} texttwo={"BLOG"} />
      </div>
      <div>
        <div>
          <Slider {...settings}>
            {postsBlog.map((item) => (
              <div
                key={item._id}
                className="flex flex-col shadow-md p-2 rounded-md border-primary border  transition-all duration-300 ease-in-out h-[500px]"
              >
                <div className="relative  overflow-hidden w-full ">
                  <div className="w-full relative  overflow-hidden ">
                    <img
                      src={item.image.url}
                      alt="image"
                      className=" w-full h-[300px] rounded-md object-cover"
                    />
                    {!CreatedHandle(item.createdAt) && (
                      <div className="absolute  bg-primary font-title text-red uppercase p-2  top-0 right-0">
                        NEW PROJECT
                      </div>
                    )}
                  </div>
                  <div className="bg-primary  flex-col rounded-full w-24 h-24 flex items-center justify-center absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <span className="font-title text-[16px] text-white text-center">
                      {moment(item.createdAt).format("LL")}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 lg:w-[400px] w-full">
                  <p className="font-title text-seconday text-[1.2rem] text-center mt-6 border-b-2">
                    {item.title}
                  </p>
                  <div className="flex lg:items-start items-center justify-center text-center font-small uppercase">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Blog;
