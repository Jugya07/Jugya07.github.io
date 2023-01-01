import React, { useEffect } from "react";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer";
import { useResultContext } from "./contexts/ResultContextProvider";
import { Handles } from "./components/Handles/Handles";
import { Contact } from "./components/Contact/Contact";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Education } from "./components/EducationDiv/Education";
import PropagateLoader from "react-spinners/PropagateLoader";

const App = () => {
  const { darkT, preLoad, setPreLoad } = useResultContext();
  useEffect(() => {
    setPreLoad(true);
    setTimeout(() => {
      setPreLoad(false);
    }, 3000);
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
    <div className={darkT ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-primary dark:text-white text-primary relative">
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Contact />
        <Handles />
        <Footer />
      </div>
    </div>
  );
};

export default App;
