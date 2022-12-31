import React, { useState, useEffect } from "react";
import { useResultContext } from "../../contexts/ResultContextProvider";
import "../../global.css";
export const LoopAnimate = () => {
  const { darkT } = useResultContext();
  const array = [
    "Web developer",
    "Undergraduate in CSE",
    "Music Lover",
    "Learner",
  ];

  const [text, setText] = useState(array[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % array.length),
      3000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setText(array[index]);
  }, [index]);

  return (
    <p className="text-gray-200 dark:text-primary">
      <span
        data-text={text}
        className={`animate ${
          darkT ? "animate1" : "animate2"
        } border-1 ml-4 md:ml-4 relative pr-1`}
      >
        {text}
      </span>
    </p>
  );
};
