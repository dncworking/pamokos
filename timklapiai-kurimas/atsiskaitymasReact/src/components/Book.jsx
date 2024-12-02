import React from "react";
import Imgaebook from "../assets/Book.jpg";
const Book = ({ book, onUpdateStatus }) => {
  return (
    <div className="book">
      <img src={Imgaebook} alt="Image of the book artist. Mark pryor" />
      <h3>Book artist</h3>
      <p>Mark Pryor</p>
      <button onClick={() => onUpdateStatus(book._id)}>
        {book.reserced ? "Grąžinti" : "Išduoi skaitytojui"}
      </button>
    </div>
  );
};
export default Book;
