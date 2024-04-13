import React, { useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Spinner from "./Spinner";
import { toast } from "react-hot-toast";
const Contact = () => {
  const [loading, setloading] = useState(false);
  //!reactk hook form start
  const schema = z.object({
    name: z.string().min(2).max(30),
    email: z.string().email(),
    subject: z.string().min(10).max(50),
    message: z.string().min(20).max(1000),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) }, { trim: true });

  const submitData = (data) => {
    setloading(true);
    DataFetch(data);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  //!reactk hook form finish

  //!form create fetch start

  async function DataFetch(data) {
    const res = await fetch(`https://api.utkubektasoglu.pro/message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.success === true) {
      toast.success(response.message);
    } else {
      toast.error(
        response.message + "You can send a message once with the same email"
      );
    }
  }

  //!form create fetch finish

  return (
    <section className="h-auto mb-12 mt-24">
      <Title text={"CONTACT"} texttwo={"CONTACT ME"} />
      <div className="flex items-start lg:justify-center justify-start h-full w-full max-w-6xl mx-auto lg:flex-row flex-col">
        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col gap-8 lg:w-2/3 w-full p-12 lg:p-0"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-1 items-start">
              <input
                type="text"
                className="form-control"
                name="name"
                {...register("name")}
                placeholder="Name..."
              />
              {errors.name && (
                <span className="font-small text-red">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1 items-start">
              <input
                type="email"
                className="form-control"
                name="email"
                {...register("email")}
                placeholder="Email..."
              />
              {errors.email && (
                <span className="font-small text-red">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <input
              type="text"
              placeholder="Subject..."
              className="form-control"
              {...register("subject")}
              name="subject"
            />
            {errors.subject && (
              <span className="font-small text-red">
                {errors.subject.message}
              </span>
            )}
            <textarea
              placeholder="You can send a message once with the same email..."
              name="message"
              {...register("message")}
              className="form-control !h-[150px] resize-none"
            ></textarea>
            {errors.message && (
              <span className="font-small text-red">
                {errors.message.message}
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

export default Contact;
