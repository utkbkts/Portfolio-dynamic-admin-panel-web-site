import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { GetBlogPost } from "../redux/actions/BlogActions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Autoplay, Navigation]);
const Blog = () => {
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
  console.log(postsBlog);

  return (
    <section className="h-auto mt-24 mb-24 overflow-hidden">
      <div className="text-center mb-12">
        <Title text={"LATEST BLOG"} texttwo={"BLOG"} />
      </div>
      <div className="w-full">
        <div className="w-full">
          <Swiper
            className="swiper"
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            modules={[Pagination]}
            breakpoints={{
              // Ekran genişliği 320 ye kadar
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // Ekran genişliği 768px ye kadar
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // Ekran genişliği 1024px ye kadar
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // Ekran genişliği 1440px ye kadar
              1440: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <div className="swiper-wrapper">
              {postsBlog.map((item) => (
                <SwiperSlide key={item._id} className="swiper-slide">
                  <div className="flex flex-col shadow-md p-2 rounded-md border-primary border  transition-all duration-300 ease-in-out h-[500px] w-full">
                    <div className="relative  overflow-hidden  w-full">
                      <div className=" relative  overflow-hidden w-full">
                        <img
                          src={item.image.url}
                          alt="image"
                          className=" h-[300px] rounded-md object-cover w-full"
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
                    <div className="flex flex-col gap-4  w-full">
                      <p className="font-title text-seconday text-[1.2rem] text-center mt-6 border-b-2">
                        {item.title}
                      </p>
                      <div className="flex lg:items-start items-center justify-center text-center font-small uppercase">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
