import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Book from "./components/Book.jsx";
import AddBook from "./components/AddBook.jsx";
import "./components/AddBook.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
