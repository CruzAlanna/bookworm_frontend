export function MeetingsIndex({ meetings, onShow }) {
  return (
    <div> 
      <h1>Book Club Meetings ({meetings.length} Meetings Scheduled)</h1>
      <br></br>
      {meetings.map((meeting) => (
        <div key={meeting.id}>
          <h2>Meeting {meeting.id}</h2>
          <h4>Date: {meeting.date}</h4>
          <h4>Time: {meeting.time}</h4>
          <button onClick={() => onShow(meeting) }>Meeting Details</button>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}