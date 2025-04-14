export function MeetingsShow({ meeting, onUpdate, onDestroy }) {

  const handleSubmit = (event) => {
    console.log("In the handleSubmit function");
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(meeting, params, successCallback);
  };

  return (
    <div>
      <h1>Meeting {meeting.id} Details:</h1>
      <h3>Date: {meeting.date} - Time: {meeting.time}</h3>
      <p>Discussion Topic: {meeting.selected_book} - Genre of Book: {meeting.genre}</p>
      <hr></hr>
      <h4>Update This Meeting:</h4>
      <form onSubmit={handleSubmit}>
        <div>
            Date: <input defaultValue={meeting.date} name="date" type="text" />
          </div>
          <br></br>
          <div>
            Time: <input defaultValue={meeting.time} name="time" type="text" />
          </div>
          <br></br>
          <div>
            Discussion Topic: <input defaultValue={meeting.selected_book} name="selected_book" type="text" />
          </div>
          <br></br>
          <div>
            Genre: <input defaultValue={meeting.genre} name="genre" type="text" />
          </div>
          <br></br>
        <button type="submit">Update</button>
      </form>
      <h4>Remove Meeting From Schedule</h4>
      <button onClick={() => onDestroy(meeting)}>Remove</button>
    </div>
  )
}