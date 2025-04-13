export function BooksNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("In the handleSubmit function in the BooksNew");
    const form = event.target
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  }

  return (
    <div>
      <h1>Add Book to Library</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <br></br>
        <div>
          Author: <input name="author" type="text" />
        </div>
        <br></br>
        <div>
          Genre: <input name="genre" type="text" />
        </div>
        <br></br>
        <div>
          Page Number: <input name="pages" type="text" />
        </div>
        <br></br>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <br></br>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}