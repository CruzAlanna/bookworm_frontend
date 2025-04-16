export function BooksIndex({ books, onShow }) {
  return (
    <div> 
      <h1>Library Database ({books.length} books)</h1>
      <hr></hr>
      <br></br>
      <div className="shelf">
        {books.map((book) => (
          <div key={book.id}>
            <div className="book-card">
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
              <br></br>
              <h4>{book.genre}</h4>
              <br></br>
              <br></br>
              <button onClick={() => onShow(book) }>Book Details</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}