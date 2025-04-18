export function MeetingsIndex({ meetings, onShow }) {
  return (
    <div> 
      <h1>Book Club Meetings ({meetings.length} Meetings Scheduled)</h1>
      <hr></hr>
      <br></br>
      <div className="meeting">
        {meetings.map((meeting) => (
          <div key={meeting.id}>
            <div className="meeting-card">
              <h2>Meeting | Id: #{meeting.id}</h2>
              <h3>Date: {meeting.date}</h3>
              <h4>Time: {meeting.time}</h4>
              {/* add attributes for meeting like description and genre */}
              <button onClick={() => onShow(meeting) }>Meeting Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}