import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-outer">
      <div className="about-body">
          <h1>Welcome to BookWorm!</h1>
          <h3>-A social media platform for book lovers-</h3>
          <br></br>
        <div className="message">
          <h4>Become a part of our BookClub, where members can add books to the Library, recommend books, write reviews, and connect with other readers through online meetings to discuss your favorite books!</h4>
        </div>
        <br></br>
        <nav className="about-nav">
          <h3>Join our BookClub by clicking the link below!</h3>
          <button><Link to="/users" className="bookclub-button">Join BookClub</Link></button>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
};

export default About;