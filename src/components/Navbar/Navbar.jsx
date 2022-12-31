import React, { useState, useEffect } from "react";
import { NavItems } from "./NavItems";
import { useResultContext } from "../../contexts/ResultContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../../global.css";

export const Navbar = () => {
  const { darkT, setDark, showNav, setShowNav } = useResultContext();
  const [showName, setShowName] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowName(true);
      } else {
        setShowName(false);
      }
    });
  }, []);
  return (
    <div className="p-3 lg:p-5 dark:bg-secondary1 bg-gray-300 lg:dark:bg-transparent lg:bg-transparent mx-0 lg:mx-10 lg:pb-3 flex justify-between relative z-20 sticky top-0">
      <div className="hidden lg:block absolute top-0 w-full h-5 dark:bg-primary bg-gray-200"></div>
      <div
        onClick={() => setShowNav(!showNav)}
        className="lg:hidden h-10 flex flex-col justify-center"
      >
        <div
          className={`${showNav ? "bar active " : "bar bg-black dark:bg-white"} 
              before:bg-black dark:before:bg-white after:bg-black dark:after:bg-white`}
        ></div>
      </div>
      {showName && (
        <h1 className="name text-2xl pt-1 dark:text-primary text-gray-200 lg:hidden">
          Jugya K. Gogoi
        </h1>
      )}
      <div
        className={`${
          showNav ? "absolute left-0 top-full w-full" : " absolute -left-96"
        }
         duration-300 h-screen  lg:h-fit  lg:static lg:flex  lg:justify-center lg:items-center lg:space-x-5 lg:w-screen bg-gray-300 dark:bg-secondary1 lg:p-4 lg:rounded-full`}
      >
        <NavItems name="Home" />
        <NavItems name="About" />
        <NavItems name="Skills" />
        <a
          href="https://github.com/Jugya07"
          target={"_blank"}
          className="pb-4 lg:pb-0 lg:w-fit text-center text-md md:text-2xl lg:text-base "
        >
          <p className="mb-4 lg:mb-0 w-fit m-auto py-1 px-3 text-primary rounded dark:text-white text-black hover:dark:text-secondary hover:text-red-500 cursor-pointer">
            Projects
          </p>
        </a>
        <NavItems name="Contact" />
        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1O16QmPk8CN2c2EZ7x7rgJ4SInsPnqb7_/view?usp=sharing"
            target={"_blank"}
            download
            type="button"
            className="mt-3 lg:m-0 lg:absolute right-24 top-8 w-fit border border-gray-400  hover:text-red-500 dark:hover:text-secondary hover:border-red-500 dark:hover:border-secondary text-sm font-bold p-2 rounded-full dark:bg-secondary2"
          >
            Download Resume&nbsp;&nbsp;
            <FontAwesomeIcon icon={faDownload} size="1x" />
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          setDark(!darkT);
        }}
        className="px-3 lg:absolute bg-gray-400 right-10 top-9 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] lg:py-1 lg:px-2 rounded-full"
      >
        {darkT ? "☀︎" : "🌙"}
      </button>
    </div>
  );
};
