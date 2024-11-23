import React from "react";
import Child from "./Child";

export default function Parent() {
  const items = ["React", "Javascript", "CSS"];
  return (
    <div>
      <h1>Items List</h1>
      {/* Pass the items array as a prop to the Child component */}
      {<Child items={items} />}
    </div>
  );
}
