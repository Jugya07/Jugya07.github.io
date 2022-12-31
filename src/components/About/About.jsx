import React from "react";
import { useResultContext } from "../../contexts/ResultContextProvider";

import "../../global.css";
export const About = () => {
  const { aboutSec } = useResultContext();
  return (
    <div className="p-7 font-bold md:mx-14 lg:mx-40 lg:my-14" ref={aboutSec}>
      <h1 className="title text-3xl md:text-5xl pb-5 text-center">About Me</h1>
      <p className="text-left md:text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. <br /> <br />
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  );
};
