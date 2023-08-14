import React, { useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const HandleItems = ({ href, ic }) => {
  const ref = useRef(null);
  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3",
    });
    console.log(ref.current);
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current?.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };
    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };
    ref.current?.addEventListener("mousemove", mouseMove);
    ref.current?.addEventListener("mouseleave", mouseLeave);
    return () => {
      ref.current?.removeEventListener("mousemove", mouseMove);
      ref.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);
  return (
    <a
      ref={ref}
      className="dark:hover:text-secondary dark:hover:border-yellow  hover:text-red-500  m-2 lg:m-0 md:p-3 md:px-4 md:border md:border-gray-400  md:hover:border-red-500  rounded-full hover:duration-500 "
      href={href}
      target={"_blank"}
    >
      <FontAwesomeIcon icon={ic} size="1x" />
    </a>
  );
};
