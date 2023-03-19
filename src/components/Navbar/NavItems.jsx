import React, { useEffect } from "react";
import { useResultContext } from "../../contextAPI/ResultContextProvider";

export const NavItems = ({ name }) => {
  const { homeSec, aboutSec, skillSec, contactSec, setShowNav } =
    useResultContext();
  let reference = aboutSec;
  switch (name) {
    case "Home":
      reference = homeSec;
      break;
    case "About":
      reference = aboutSec;
      break;
    case "Skills":
      reference = skillSec;
      break;
    case "Contact":
      reference = contactSec;
      break;
    default:
  }

  const scrollTo = () => {
    if (reference != aboutSec) {
      reference.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      reference.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setShowNav(false);
  };
  return (
    <div
      onClick={scrollTo}
      className="pb-4 lg:pb-0 lg:w-fit text-center text-md md:text-2xl lg:text-base"
    >
      <p
        className={`w-fit m-auto py-1 px-3 text-primary rounded dark:text-white text-black hover:dark:text-secondary hover:text-red-500 cursor-pointer transition hover:duration-300`}
      >
        {name}
      </p>
    </div>
  );
};
