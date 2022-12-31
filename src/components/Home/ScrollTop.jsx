import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollTop = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="top-to-btm dark:bg-primary dark:text-secondary text-red-500"
      onClick={goToTop}
    >
      <FontAwesomeIcon
        icon={faAngleUp}
        className="i-style rounded-full"
        size="3x"
      />
    </button>
  );
};
