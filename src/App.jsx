import "./App.css";
import { Header } from "./Header";
import React from 'react';
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <hr></hr>
      <main>
        <Outlet />
      </main>
      <hr></hr>
      <Footer />
    </div>
  )
}

export default App;
