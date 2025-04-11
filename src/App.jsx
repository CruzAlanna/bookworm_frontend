import axios from 'axios';
import { Header } from "./Header";
import { BooksPage } from "./BooksPage";
import { Footer } from "./Footer";

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <BooksPage />
      <Footer />
    </div>
  )
}

export default App;
