import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResultContextProvider>
      <Router>
        <App />
      </Router>
    </ResultContextProvider>
  </React.StrictMode>
);
