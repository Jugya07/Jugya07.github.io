import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useResultContext } from "../../contextAPI/ResultContextProvider";

export const Contact = () => {
  const { loading, setLoading, contactSec } = useResultContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const { name, email, message } = data;
    try {
      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        "service_norsap4",
        "template_yypv0sn",
        templateParams,
        "tz9wocBORuqO1Rwj0"
      );
      reset();
      setLoading(false);
      console.log(loading);
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="lg:px-40 border-t pt-5 lg:mt-7 lg:pt-20 border-yellow"
      ref={contactSec}
    >
      <h1 className="title text-3xl md:text-5xl pl-4 pb-4 text-center">
        Contact
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center flex-col px-7  lg:w-fit md:mx-10 lg:m-auto">
          <label className="flex flex-col mb-3">
            NAME:
            <input
              className="mt-1 p-4 md:pl-6 lg:w-96 rounded-lg border dark:bg-primary dark:border-secondary appearance-none"
              type={"text"}
              name="name"
              placeholder={"Your Name"}
              {...register("name", {
                required: { value: true, message: "Please enter your name" },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
            />
          </label>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
          <label className=" flex flex-col  mb-3">
            EMAIL:
            <input
              className="mt-1 p-4 md:pl-6 rounded-lg border dark:bg-primary lg:w-96 dark:border-secondary"
              type={"email"}
              name="email"
              placeholder={"Your Email"}
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
          </label>
          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
          <label className="flex flex-col  mb-3">
            SUBJECT:
            <textarea
              className=" mt-1 p-4 md:pl-6 md:h-40 lg:w-96 rounded-lg border dark:bg-primary dark:border-secondary "
              name="message"
              placeholder="Your message here..."
              {...register("message", {
                required: true,
              })}
            />
          </label>
          <button
            className="p-3 lg:mb-8 border w-fit rounded-full lg:m-5 border-gray-400 dark:border-secondary dark:hover:text-secondary hover:text-red-500 hover:border-red-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
