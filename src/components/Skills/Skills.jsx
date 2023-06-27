import React from "react";
import { SkillItems } from "../../components";
import { webSkills } from "../../utils";
import { useResultContext } from "../../contextAPI/ResultContextProvider";

export const Skills = () => {
  const { skillSec } = useResultContext();
  return (
    <div
      className="px-7 mt-4 lg:px-40 lg:mt-7 lg:py-16 border-t border-yellow"
      ref={skillSec}
    >
      <h1 className="title text-3xl md:text-5xl pb-5 p-5 text-center">
        Skills
      </h1>
      <div className="flex lg:gap-4 flex-wrap flex-col md:flex-row justify-center ">
        {webSkills.map((skill) => (
          <SkillItems
            index={skill.key}
            name={skill.name}
            about={skill.about}
            ic={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};
