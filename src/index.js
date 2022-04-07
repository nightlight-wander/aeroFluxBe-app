import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AllDataProvider } from "./context/AllDataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AllDataProvider>
      <App />
    </AllDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
