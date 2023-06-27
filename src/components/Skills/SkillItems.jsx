import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faC } from "@fortawesome/free-solid-svg-icons";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import "../../global.css";

export const SkillItems = ({ index, name, about, ic }) => {
  console.log(index);
  switch (ic) {
    case "faJs":
      ic = faJs;
      break;
    case "faReact":
      ic = faReact;
      break;
    case "faNodeJs":
      ic = faNodeJs;
      break;
    case "faDatabase":
      ic = faDatabase;
      break;
    case "faC":
      ic = faC;
      break;
    default:
  }
  return (
    <div className="md:w-2/5 md:m-5 flex flex-col flex-wrap text-center pb-7 md:p-5">
      <FontAwesomeIcon
        icon={ic}
        size="3x"
        className="dark:text-secondary text-red-500"
      />
      <h2 className="skillTitle md:p-3">{name}</h2>
      <p>{about}</p>
      {index == "6" && (
        <a
          className="link dark:text-secondary text-red-500 "
          href="https://leetcode.com/crjugya123/"
          target={"_blank"}
        >
          LeetCode
        </a>
      )}
    </div>
  );
};
