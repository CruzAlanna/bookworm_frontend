import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BooksNew } from "./BooksNew";
import { BooksPage } from "./BooksPage";

export function Header2() {
  return (
    <Router>
      <header>
        <div>
          {/* Navigation Links */}
          <nav>
            <Link to="/Library" style={{ marginLeft: '10px' }}>Library</Link>
            <Link to="/AddBookToLibrary" style={{ marginLeft: '10px' }}>Add a Book to the Library</Link>
          </nav>

          {/* Route Definitions */}
          <Routes>
            <Route path="/Library" element={<BooksPage />} />
            <Route path="/AddBookToLibrary" element={<BooksNew />} />
          </Routes>
        </div>
      </header>
    </Router>
  )
}