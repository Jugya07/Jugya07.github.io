import React from "react";
import { EducationCard } from "../../components";
import { education } from "../../utils";

export const Education = () => {
  return (
    <div id="heading" className="border-t border-yellow px-7 md:px-10 lg:px-32">
      <h1 className="title text-3xl md:text-5xl mt-8 lg:mt-16 md:pb-10 text-center">
        Education
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
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
