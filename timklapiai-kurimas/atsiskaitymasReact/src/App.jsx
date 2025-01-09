import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Book from "./components/Book";
import AddBook from "./components/AddBook";
import "./components/AddBook.css";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/books`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const handleUpdateStatus = (bookId) => {
    fetch(`http://localhost:5000/books/${bookId}`, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((updatedBook) => {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book._id === updatedBook._id
              ? { ...book, reserved: updatedBook.reserved }
              : book
          )
        );
      });
  };

  //   .catch((error) => {
  //     console.error('Error updating book status:', error);

  // });

  return (
    <div className="app">
      <h1>Bibliotekos Knygos</h1>
      <div className="book-list">
        {books.map((book) => (
          <Book
            key={book._id}
            book={book}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
