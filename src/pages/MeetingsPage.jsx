import axios from "axios";
import { useState, useEffect } from "react";
import { MeetingsIndex } from "../MeetingsIndex";
import { MeetingsNew } from "../MeetingsNew";
import { MeetingsShow } from "../MeetingsShow";
import { Modal } from '../Modal';

export function MeetingsPage() {
  
  const [meetings, setMeetings] = useState([]);
  const [isMeetingShowVisible, setIsMeetingShowVisible] = useState(false);
  const [currentMeeting, setCurrentMeeting] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/api/v1/meetings")
    .then((response) => {
      console.log(response.data);
      setMeetings(response.data);
    })
  };


  const handleCreate = (params, successCallback) => {
    console.log("In the handleCreate function");
    axios.post("http://localhost:3000/api/v1/meetings", params)
    .then((response) => {
      setMeetings([...meetings, response.data]);
      successCallback();
    })
  };

  const handleShow = (meeting) => {
    console.log("In the handleShow function");
    console.log(meeting);
    setIsMeetingShowVisible(true);
    setCurrentMeeting(meeting);
  };

  const handleUpdate = (meeting, params, successCallback) => {
    console.log("In the handleUpdate", params);
    axios.patch(`http://localhost:3000/api/v1/meetings/${meeting.id}`, params)
    .then((response) => {
      console.log(response.data);
      setMeetings(meetings.map(meeting => meeting.id === response.data.id ? response.data : meeting));
      successCallback();
      setIsMeetingShowVisible(false);
    })
  };

  const handleDestroy = (meeting) => {
    console.log("In the handleDestroy function")
    console.log(meeting);
    axios.delete(`http://localhost:3000/api/v1/meetings/${meeting.id}`)
    .then(() => {
      setMeetings(meetings.filter((m) => m.id !== meeting.id));
      setIsMeetingShowVisible(false);
    })
  };

  
  useEffect(handleIndex, []);

  return (
    <main>
      <div className="meetings-body">
        <MeetingsIndex meetings={meetings} onShow={handleShow} />
        <Modal show={isMeetingShowVisible} onClose={() => setIsMeetingShowVisible(false)}>
          <MeetingsShow meeting={currentMeeting} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
        </Modal>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <MeetingsNew onCreate={handleCreate} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </main>
  )
}