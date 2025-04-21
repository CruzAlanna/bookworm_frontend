import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';

export function Header() {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header>
      <div className="logo">
        <div className="book" style={{ backgroundColor: '#FF6347' }}>B</div>
        <div className="book" style={{ backgroundColor: '#FFD700' }}>O</div>
        <div className="book" style={{ backgroundColor: '#4682B4' }}>O</div>
        <div className="book" style={{ backgroundColor: '#32CD32' }}>K</div>
        <div className="book" style={{ backgroundColor: '#EE82EE' }}>W</div>
        <div className="book" style={{ backgroundColor: '#FFA500' }}>O</div>
        <div className="book" style={{ backgroundColor: '#DC143C' }}>R</div>
        <div className="book" style={{ backgroundColor: '#8A2BE2' }}>M</div>
      </div>

      <nav style={{ background: '#eee', padding: '10px', marginBottom: '20px' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0, alignItems: 'center' }}>
          <Link to="/">About</Link> | {""}
          {auth ? (
            <>
              <li><Link to="/dashboard">Library</Link> | {""}</li>
              <li><Link to="/users">BookClub</Link> | {""}</li>
              <li><Link to="/meetings">Meetings</Link></li>
              <li style={{ marginLeft: 'auto' }}><span>Welcome, {auth.name || auth.email}!</span></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li style={{ marginLeft: 'auto' }}><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}