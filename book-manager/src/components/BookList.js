import React from "react";
import BookItem from "./BookItem";

function BookList({ books, deleteBook }) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.id} book={book} deleteBook={deleteBook} />
      ))}
    </ul>
  );
}

export default BookList;
