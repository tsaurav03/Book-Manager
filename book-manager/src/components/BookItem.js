import React from "react";

function BookItem({ book, deleteBook }) {
  return (
    <li>
      <span>
        {book.id} - {book.name} by {book.author}, ${book.price}
      </span>
      <button onClick={() => deleteBook(book.id)}>Delete</button>
    </li>
  );
}

export default BookItem;
