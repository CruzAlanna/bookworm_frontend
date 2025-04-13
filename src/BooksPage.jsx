import axios from "axios";
import { useState, useEffect } from "react";
import { BooksIndex } from "./BooksIndex";
import { BooksNew } from "./BooksNew";
import { BooksShow } from "./BooksShow";
import { Modal } from './Modal';

export function BooksPage() {
  
  const [books, setBooks] = useState([]);
  const [isBookShowVisible, setIsBookShowVisible] = useState(false);
  const [currentBook, setCurrentBook] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/api/v1/books")
    .then((response) => {
      console.log(response.data);
      setBooks(response.data);
    })
  };


  const handleCreate = (params, successCallback) => {
    console.log("In the handleCreate function");
    axios.post("http://localhost:3000/api/v1/books", params)
    .then((response) => {
      setBooks([...books, response.data]);
      successCallback();
    })
  };

  const handleShow = (book) => {
    console.log("In the handleShow function");
    console.log(book);
    setIsBookShowVisible(true);
    setCurrentBook(book);
  };

  const handleUpdate = (book, params, successCallback) => {
    console.log("In the handleUpdate", params);
    axios.patch(`http://localhost:3000/api/v1/books/${book.id}`, params)
    .then((response) => {
      console.log(response.data);
      setBooks(books.map(book => book.id === response.data.id ? response.data : book));
      successCallback();
      setIsBookShowVisible(false);
    })
  };

  const handleDestroy = (book) => {
    console.log("In the handleDestroy function")
    console.log(book);
    axios.delete(`http://localhost:3000/api/v1/books/${book.id}`)
    .then(() => {
      setBooks(books.filter((b) => b.id !== book.id));
      setIsBookShowVisible(false);
    })
  };

  
  useEffect(handleIndex, []);

  return (
    <main>
      <BooksIndex books={books} onShow={handleShow} />
      <Modal show={isBookShowVisible} onClose={() => setIsBookShowVisible(false)}>
        <BooksShow book={currentBook} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
      </Modal>
      <BooksNew onCreate={handleCreate} />
    </main>
  )
}