import React from "react";
// import { Link } from "react-router-dom";
import Home from "./Home";
import { Link } from "react-router";

export default function About() {
  return (
    <div>
      <h1>About Us</h1>

      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}
