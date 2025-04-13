export function BooksShow({ book, onUpdate, onDestroy }) {

  const handleSubmit = (event) => {
    console.log("In the handleSubmit function");
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(book, params, successCallback);
  };

  return (
    <div>
      <h1>Book Details:</h1>
      <h2>{book.title} by {book.author}</h2>
      <h4>{book.genre}</h4>
      <p>{book.pages} pages</p>
      <p>{book.description}</p>
      <hr></hr>
      <h4>Update This Book:</h4>
      <form onSubmit={handleSubmit}>
        <div>
            Title: <input defaultValue={book.title} name="title" type="text" />
          </div>
          <br></br>
          <div>
            Author: <input defaultValue={book.author} name="author" type="text" />
          </div>
          <br></br>
          <div>
            Genre: <input defaultValue={book.genre} name="genre" type="text" />
          </div>
          <br></br>
          <div>
            Page Number: <input defaultValue={book.pages} name="pages" type="text" />
          </div>
          <br></br>
          <div>
            Description: <input defaultValue={book.description} name="description" type="text" />
          </div>
          <br></br>
        <button type="submit">Update</button>
      </form>
      <h4>Delete This Book:</h4>
      <button onClick={() => onDestroy(book)}>Remove This Book From Library</button>
    </div>
  )
}