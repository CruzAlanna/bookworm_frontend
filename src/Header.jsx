import { Link } from 'react-router-dom';

export function Header() {
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
      <nav>
        <Link to="/about">About</Link> | {""}
        <Link to="/users">BookClub</Link> | {""}
        <Link to="/">Library</Link> | {""}
        <Link to="/meetings">Meetings</Link>
      </nav>
      
    </header>
  )
}