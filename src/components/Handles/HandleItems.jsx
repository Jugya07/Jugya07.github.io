import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HandleItems = ({ href, ic }) => {
  return (
    <a
      className="  dark:hover:text-secondary dark:hover:border-yellow  hover:text-red-500  m-2 lg:m-0 md:p-3 md:px-4 md:border md:border-gray-400  md:hover:border-red-500  rounded-full hover:duration-500"
      href={href}
      target={"_blank"}
    >
      <FontAwesomeIcon icon={ic} size="1x" />
    </a>
  );
};
