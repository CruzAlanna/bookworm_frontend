import "./App.css";
import { Header } from "./Header";
import { BooksPage } from "./BooksPage";
import { MeetingsPage } from "./MeetingsPage";
import { UsersPage } from "./UsersPage";
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
