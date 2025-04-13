export function BooksIndex({ books, onShow }) {
  return (
    <div> 
      <h1>Library Database ({books.length} books)</h1>
      <br></br>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title} by {book.author}</h2>
          <h4>{book.genre}</h4>
          <button onClick={() => onShow(book) }>Book Details</button>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}