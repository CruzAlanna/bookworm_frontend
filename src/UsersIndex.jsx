export function UsersIndex({ users, onShow }) {
  return (
    <div> 
      <h1>BookClub Members</h1>
      <hr></hr>
      <br></br>
      <div className="user">
        {users.map((user, index) => (
          <div key={index}>
            <div className="library-card">
              <h3>LIBRARY CARD</h3>
              <div className="card-content">
                <h2>Username: {user.name}</h2>
                <button onClick={() => onShow(user) }>View Profile</button>
                <br></br>
                <br></br>
              </div>
              <div className="barcode">
                ||| |||| ||||| |||| || ||||| || ||||
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}