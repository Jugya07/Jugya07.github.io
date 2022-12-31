import React from "react";
import { EducationCard } from "./EducationCard";
import { education } from "../../contents/education";

export const Education = () => {
  return (
    <div className="border-t border-gray-400  px-7 md:px-10 lg:px-32">
      <h1 className="title text-3xl md:text-5xl mt-8 lg:mt-16 md:pb-10 text-center">
        Education
      </h1>
      <div className="flex flex-col md:flex-row">
        {education.map((edu) => (
          <EducationCard
            key={edu.key}
            school={edu.school}
            year={edu.year}
            description={edu.description}
          />
        ))}
      </div>
    </div>
  );
};
