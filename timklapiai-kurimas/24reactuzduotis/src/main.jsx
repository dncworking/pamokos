import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
// import { Routes } from "react-router";
// import { Route } from "react-router";
import About from "./components/About.jsx";

// const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      <App />
      {/* </Routes> */}
    </StrictMode>
  </BrowserRouter>
);
