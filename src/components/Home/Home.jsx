import React, { useState, useEffect } from "react";
import { ScrollButton, ScrollTop } from "../../components";
import { useResultContext } from "../../contextAPI/ResultContextProvider";
import Typed from "react-typed";
import "../../global.css";

export const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showDownBtn, setShowDownBtn] = useState(true);
  const { homeSec } = useResultContext();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
      if (window.scrollY < 350) {
        setShowDownBtn(true);
      } else {
        setShowDownBtn(false);
      }
    });
  }, []);
  return (
    <div
      className="pt-4 lg:pt-10 lg:pb-10 border-b border-yellow flex flex-col"
      ref={homeSec}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center lg:mb-10">
        <div className="w-52 lg:w-64 m-auto rounded-full shadow-xl shadow-gray-400 dark:shadow-xl dark:shadow-gray-600 duration-500 overflow-hidden">
          <img src="/images/dp.png" alt="DP" className="w-52 lg:w-64" />
        </div>
        <div className="w-fit pt-5 lg:pt-10 m-auto lg:mr-auto lg:m-0">
          <h1 className="text-center name text-3xl md:text-5xl lg:text-6xl p-3 text-primary dark:text-white ">
            I am Jugya K. Gogoi
          </h1>
          <Typed
            className="font-bold md:text-2xl dark:text-secondary text-red-500"
            strings={[
              "Web developer",
              "Undergraduate in CSE",
              "Cloud Enthusiast",
              "Learner",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          >
            <input disabled className="bg-transparent ml-3" />
          </Typed>
        </div>
      </div>
      <p className=" p-5 lg:pt-10 font-bold md:mx-14 lg:mx-40 text-center tracking-wide">
        Hello! I am an undergraduate student with a keen interest for Web
        Development. I like to explore new technologies and develop Web
        Applications. I am looking for opportunities to work on and learn new
        things.
      </p>
      <p className="w-fit mx-auto md:text-2xl dark:text-secondary text-red-500">
        Explore me !
      </p>
      <div className={` w-fit m-auto my-5 md:my-10 h-10 z-10`}>
        {showDownBtn && <ScrollButton />}
      </div>

      <div className="hidden lg:block lg:fixed lg:bottom-10 lg:right-6 lg:z-30">
        {showTopBtn && <ScrollTop />}
      </div>
    </div>
  );
};
