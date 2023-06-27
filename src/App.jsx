import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./global.css";
import {
  Home,
  Navbar,
  Handles,
  Contact,
  About,
  Skills,
  Education,
} from "./components";
import { useResultContext } from "./contextAPI/ResultContextProvider";

const App = () => {
  const { darkT, preLoad, setPreLoad } = useResultContext();
  useEffect(() => {
    setPreLoad(true);
    setTimeout(() => {
      setPreLoad(false);
    }, 3000);
    const cursor = document.querySelector(".cursor");
    window.addEventListener("pointermove", (event) => {
      const { clientX, clientY } = event;
      cursor.animate(
        {
          left: `${clientX - 20}px`,
          top: `${clientY - 20}px`,
        },
        {
          duration: 200,
          fill: "forwards",
        }
      );
    });
  }, []);

  return preLoad ? (
    <div className="flex justify-center h-screen items-center bg-primary ">
      <PropagateLoader
        color="#36d7b7"
        loading={preLoad}
        size={15}
        data-testid="loader"
      />
    </div>
  ) : (
    <>
      {/* <div className={darkT && "cursor"}></div> */}
      <div className={darkT ? "dark main" : "main"}>
        <div className="bg-gray-200 dark:bg-primary dark:text-white text-primary relative">
          <Navbar />
          <Home />
          <Fade bottom distance="10%">
            <About />
            <Education />
            <Skills />
            <Contact />
          </Fade>
          <Handles />
        </div>
      </div>
    </>
  );
};

export default App;
