import React, { useState, useEffect } from "react";
import style from './style.module.scss'
import KidImg from '../../assets/kid.png'

const BookPage = () => {
  const [book, setBook] = useState({});

  useEffect(() => {
    fetchRandomBook();
  }, []);

  const fetchRandomBook = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:art+random:true`
    );
    const data = await res.json();
    const randomBook = data.items[Math.floor(Math.random() * data.items.length)];
    setBook(randomBook);
  };

  return (
    <div className={style.bookHeader} >
        
        <div className={style.row1}>
      {book.volumeInfo ? (
        <>
          <h2>Find Your Book</h2>
          <h2>{book.volumeInfo.title}</h2>
          <p>Author: {book.volumeInfo.authors[0]}</p>
          <img src={book.volumeInfo.imageLinks.thumbnail}alt={book.volumeInfo.title} />
          <p class={ style.bookDes}>{book.volumeInfo.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchRandomBook}>Next Book</button>
      </div>
      <div className={style.row2}>
<<<<<<< HEAD
            <h1 class={style.titleHeader}> A room without book is like a body without a soul.</h1>
            <img className={style.img} src={KidImg} alt="kids-image" />
=======
            <h1> A room without book is like<br/> a body without a soul.</h1>
            <img className={style.imgKids} src={KidImg} alt="kids-image" />
>>>>>>> 657f8112aa14da749953e3b0fa5c4c669e7379a0

        </div>
    </div>
  );
};

export default BookPage;






