import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Fade from "react-reveal/Fade";
// import PropagateLoader from "react-spinners/PropagateLoader";
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
import { DotLoader } from "react-spinners";

const App = () => {
  const { darkT, preLoad, setPreLoad } = useResultContext();
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setPreLoad(true);
    setTimeout(() => {
      setPreLoad(false);
    }, 3000);
    // const cursor = document.querySelector(".cursor");
    // window.addEventListener("pointermove", (event) => {
    //   const { clientX, clientY } = event;
    //   cursor.animate(
    //     {
    //       left: `${clientX - 20}px`,
    //       top: `${clientY - 20}px`,
    //     },
    //     {
    //       duration: 200,
    //       fill: "forwards",
    //     }
    //   );
    // });
  }, []);

  return preLoad ? (
    <div className="flex justify-center h-screen items-center bg-primary ">
      <DotLoader
        color="#36d7b7"
        loading={preLoad}
        size={55}
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
