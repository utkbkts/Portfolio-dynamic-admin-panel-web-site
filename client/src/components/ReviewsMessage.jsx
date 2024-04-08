import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Title from "../ui/Title";
import { useSelector } from "react-redux";
import avatar from "../assets/avatar.png";
import { Rating } from "../ui/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { GetUserActions } from "../redux/actions/UserActions";
const ReviewsMessage = () => {
  const { posts } = useSelector((state) => state.ReviewsPost);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserActions());
  }, []);
  return (
    <section className="h-auto mb-12 mt-24">
      <Title text={"COMMENTS"} texttwo={"COMMENTS"} />
      <div className="overflow-hidden ">
        <div className="flex items-center transition-all duration-500 justify-center h-full w-full max-w-6xl mx-auto px-4 md:px-0">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {posts?.map((item) => (
              <SwiperSlide>
                <div
                  key={item._id}
                  className="flex flex-col items-center justify-start pt-8 md:w-[400px] w-full border  relative h-[400px] rounded-md clippath"
                >
                  <div className="border-b-2 w-full flex flex-col items-center justify-center p-1 ">
                    <img src={avatar} alt="avatar" className="w-12 h-12" />
                    <span>{item.userNick}</span>
                    <Rating value={item.rating} color={"#ffc107"} />
                  </div>
                  <p className="text-center p-1 text-gray-600 pt-5 font-light">
                    &#10077;{item.comment}&#10078;
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewsMessage;
