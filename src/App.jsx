import "./App.css";
import { Header } from "./Header";
import { BooksPage } from "./BooksPage";
import { MeetingsPage } from "./MeetingsPage";
import { Footer } from "./Footer";

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <BooksPage />
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <MeetingsPage />
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <Footer />
    </div>
  )
}

export default App;
