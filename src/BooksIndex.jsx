export function BooksIndex({ books, onShow }) {
  return (
    <div> 
      <h1>Library Database ({books.length} books)</h1>
      <hr></hr>
      <br></br>
      <div class="shelf">
        {books.map((book) => (
          <div key={book.id}>
            <div class="book-card">
              <h2>{book.title} by {book.author}</h2>
              <h4>{book.genre}</h4>
              <button onClick={() => onShow(book) }>Book Details</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Fix issue with container! Group together for the books and meetings in the MeetingsIndex