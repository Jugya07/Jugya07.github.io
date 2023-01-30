import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useResultContext } from "../../contextAPI/ResultContextProvider";
import "../../global.css";
export const ScrollButton = () => {
  const { aboutSec } = useResultContext();
  const scrollDown = () => {
    aboutSec.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <button className="dark:text-secondary text-red-500">
      <FontAwesomeIcon
        icon={faAngleDown}
        className="icon-style dark:bg-primary"
        onClick={scrollDown}
      />
    </button>
  );
};
// export default ScrollButton;
