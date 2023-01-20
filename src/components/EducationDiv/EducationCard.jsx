import React from "react";
import "../../global.css";
export const EducationCard = ({ school, year, description }) => {
  return (
    <div className="md:w-2/5 pt-5 md:p-5 text-center">
      <h1 className="skillTitle text-lg md:text-2xl">{school}</h1>
      <p className="dark:text-secondary text-red-500">{year}</p>
      <p className="pb-4 md:p-4">{description}</p>
    </div>
  );
};
