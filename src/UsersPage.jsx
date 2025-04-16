import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";
import { UsersNew } from "./UsersNew";
import { UsersShow } from "./UsersShow";
import { Modal } from './Modal';

export function UsersPage() {
  
  const [users, setUsers] = useState([]);
  const [isUserShowVisible, setIsUserShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleIndex = () => {
    axios.get("http://localhost:3000/bookclub")
    .then((response) => {
      setUsers(response.data);
    })
  };


  const handleCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/signup", params)
    .then((response) => {
      setUsers([...users, response.data]);
      successCallback();
    })
  };

  const handleShow = (user) => {
    setIsUserShowVisible(true);
    setCurrentUser(user);
  };

  const handleUpdate = (user, params, successCallback) => {
    axios.patch(`http://localhost:3000/users/${user.id}`, params)
    .then((response) => {
      setUsers(users.map(user => user.id === response.data.id ? response.data : user));
      successCallback();
      setIsUserShowVisible(false);
    })
  };

  const handleDestroy = (user) => {
    axios.delete(`http://localhost:3000/users/${user.id}`)
    .then(() => {
      setUsers(users.filter((u) => u.id !== user.id));
      setIsUserShowVisible(false);
    })
  };

  
  useEffect(handleIndex, []);

  return (
    <main>
      <div className="users-body">
        <UsersIndex users={users} onShow={handleShow} />
        <Modal show={isUserShowVisible} onClose={() => setIsUserShowVisible(false)}>
          <UsersShow user={currentUser} onUpdateRecommendation={handleUpdate} onDestroy={handleDestroy}/>
        </Modal>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <UsersNew onCreate={handleCreate} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </main>
  )
}