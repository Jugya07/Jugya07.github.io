import React, { createContext, useContext, useState, useRef } from "react";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const aboutSec = useRef(null);
  const contactSec = useRef(null);
  const homeSec = useRef(null);
  const skillSec = useRef(null);
  const [darkT, setDark] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <ResultContext.Provider
      value={{
        darkT,
        setDark,
        loading,
        setLoading,
        aboutSec,
        contactSec,
        homeSec,
        skillSec,
        showNav,
        setShowNav,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
