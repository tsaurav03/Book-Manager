import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css"; // Import the CSS file

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="App">
      <h1>Book Manager</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
