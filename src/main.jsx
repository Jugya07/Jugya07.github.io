import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResultContextProvider } from "./contextAPI/ResultContextProvider";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </React.StrictMode>
);
