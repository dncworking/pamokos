import React, { useState } from "react";

const AddBook = ({ onAddBook }) => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (newBook.title.length < 3 || newBook.title.length > 100) {
      newErrors.title = "Pavadinimas turi būti nuo 3 iki 100 simbolių";
    }

    if (!/^[A-Za-z\s]+$/.test(newBook.author)) {
      newErrors.author = "Autorius gali turėti tik raides ir tarpus";
    }

    if (newBook.category.trim() === "") {
      newErrors.category = "Kategorija yra privaloma";
    }

    if (isNaN(newBook.price) || newBook.price <= 0) {
      newErrors.price = "Kaina turi būti teigiamas skaičius";
    }

    if (!newBook.cover.trim().startsWith("http")) {
      newErrors.cover = "Viršelis turi būti teisinga URL nuoroda";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      })
        .then((response) => response.json())
        .then((addedBook) => {
          onAddBook(addedBook);
          setNewBook({
            title: "",
            author: "",
            category: "",
            price: "",
            cover: "",
          });
        })
        .catch((error) => console.error("Error adding book:", error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registruoti naują knygą</h2>

      <div>
        <label>Pavadinimas</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleChange}
          placeholder="Pavadinimas"
          required
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div>
        <label>Autorius</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleChange}
          placeholder="Autorius"
          required
        />
        {errors.author && <span className="error">{errors.author}</span>}
      </div>

      <div>
        <label>Kategorija</label>
        <input
          type="text"
          name="category"
          value={newBook.category}
          onChange={handleChange}
          placeholder="Kategorija"
          required
        />
        {errors.category && <span className="error">{errors.category}</span>}
      </div>

      <div>
        <label>Kaina</label>
        <input
          type="number"
          name="price"
          value={newBook.price}
          onChange={handleChange}
          placeholder="Kaina"
          required
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>

      <div>
        <label>Viršelis (URL)</label>
        <input
          type="text"
          name="cover"
          value={newBook.cover}
          onChange={handleChange}
          placeholder="Viršelio nuoroda"
          required
        />
        {errors.cover && <span className="error">{errors.cover}</span>}
      </div>

      <button type="submit">Pridėti knygą</button>
    </form>
  );
};

export default AddBook;
