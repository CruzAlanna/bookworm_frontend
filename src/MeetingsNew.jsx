export function MeetingsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("In the handleSubmit function in the MeetingsNew");
    const form = event.target
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  }

  return (
    <div>
      <h1>Organize A Meeting</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Date: <input name="date" type="text" />
        </div>
        <br></br>
        <div>
          Time: <input name="time" type="text" />
        </div>
        <br></br>
        <div>
          Topic of Discussion: <input name="selected_book" type="text" />
        </div>
        <br></br>
        <div>
          Genre: <input name="genre" type="text" />
        </div>
        <br></br>
        <button type="submit">Add Meeting</button>
      </form>
    </div>
  );
}