import { Link } from "react-router";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>

      <Link to="/about">
        <button>Go to About Page</button>
      </Link>
    </div>
  );
}
