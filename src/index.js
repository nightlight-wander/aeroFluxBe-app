import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AllDataProvider } from "./context/AllDataContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AllDataProvider>
        <App />
      </AllDataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
