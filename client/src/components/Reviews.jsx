import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Spinner from "./Spinner";
import { Rating } from "../ui/Rating";
import { GetUserActions, ReviewsActions } from "../redux/actions/UserActions";
const Reviews = () => {
  const [loading, setloading] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.ReviewsPost);
  console.log(posts);
  const onHoverRating = (index) => {
    setHoverRating(index);
  };

  const onSaveRating = (index) => {
    setRating(index);
  };
  //!reactk hook form start
  const schema = z.object({
    comment: z.string().min(10).max(1000),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) }, { trim: true });
  const userNick = user?.nickname;
  const userEmail = user?.email;

  const submitData = async (data) => {
    setloading(true);
    try {
      await dispatch(ReviewsActions(rating, userNick, userEmail, data));
      setloading(false);
      setRating(0);
      reset();
    } catch (error) {
      setloading(false);
      setRating(0);
      reset();
    }
  };

  //!reactk hook form finish

  useEffect(() => {
    dispatch(GetUserActions());
  }, []);
  return (
    <section className="h-auto mb-12 mt-24">
      <Title text={"REVİEW"} texttwo={"REVİEWS"} />
      <div className="flex items-start lg:justify-center justify-start h-full w-full max-w-6xl mx-auto lg:flex-row flex-col">
        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col gap-8 lg:w-2/3 w-full p-12 lg:p-0"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4"></div>
          <span className="flex items-center justify-center">
            <Rating
              value={rating}
              onHoverRating={onHoverRating}
              onSaveRating={onSaveRating}
              color={"#ffc107"}
            />
          </span>
          <div className="flex flex-col items-start gap-4">
            <textarea
              placeholder="Comment"
              name="comment"
              {...register("comment")}
              className="form-control !h-[150px] resize-none"
            ></textarea>
            {errors.comment && (
              <span className="font-small text-red">
                {errors.comment.message}
              </span>
            )}
          </div>
          <div>
            <Button
              type={"submit"}
              disabled={loading}
              text={
                loading ? (
                  <div className="flex items-center gap-2">
                    <Spinner />
                    Loading...
                  </div>
                ) : (
                  "Send Message"
                )
              }
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reviews;
