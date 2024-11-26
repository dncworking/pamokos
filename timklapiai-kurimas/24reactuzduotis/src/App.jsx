import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
// import { BrowserRouter, Route } from "react-router";
import { NavLink, Routes, Route } from "react-router";
// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav> */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
