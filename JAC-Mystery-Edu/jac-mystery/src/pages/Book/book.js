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
          <p>{book.volumeInfo.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchRandomBook}>Next Book</button>
      </div>
      <div className={style.row2}>
            <h1> A room without book is like<br/> a body without a soul.</h1>
            <img className={style.imgKids} src={KidImg} alt="kids-image" />

        </div>
    </div>
  );
};

export default BookPage;


// import React, { useState, useEffect } from "react";
// import style from './style.module.scss'
// import KidImg from '../../assets/kid.png'

// const BookPage = () => {
//   const [book, setBook] = useState({});

//   useEffect(() => {
//     fetchRandomBook();
//   }, []);

//   const fetchRandomBook = async () => {
//     const res = await fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=subject:art+random:true`
//     );
//     const data = await res.json();
//     const randomBook = data.items[Math.floor(Math.random() * data.items.length)];
//     setBook(randomBook);
//   };

//   return (
//     <div className={style.header} >
        
//         <div className={style.row1}>
//       {book.volumeInfo ? (
//         <>
//           <h2>Find Your Book</h2>
//           <h2>{book.volumeInfo.title}</h2>
//           <p>Author: {book.volumeInfo.authors[0]}</p>
//           <img src={book.volumeInfo.imageLinks.thumbnail}alt={book.volumeInfo.title} />
//           <p>{book.volumeInfo.description}</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//       <button onClick={fetchRandomBook}>Next Book</button>
//       </div>
//       <div className={style.row2}>
//             <h1> A room without book is like<br/> a body without a soul.</h1>
//             <img className={style.img} src={KidImg} alt="kids-image" />

//         </div>
//     </div>
//   );
// };





// import React, { useState, useEffect } from 'react';

// function ArtBook({e762ad1c-bce9-4637-8d36-bc90edd26968}) {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://api.harvardartmuseum.org/v1/books/random?apikey=${e762ad1c-bce9-4637-8d36-bc90edd26968}`)
//       .then(res => res.json())
//       .then(data => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, [e762ad1c-bce9-4637-8d36-bc90edd26968]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{book.author_name}</h2>
//       <h3>{book.title}</h3>
//       <p>{book.description}</p>
//       <img src={book.image_url} alt={book.title} />
//       <button onClick={() => window.location.reload()}>Next Book</button>
//     </div>
//   );
// }

// export default BookPage;

// import React, { useState, useEffect } from 'react';

// const BookPage = () => {
//   const [book, setBook] = useState({});
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     fetch(`https://api.harvard.edu/v2/items?fields=title,author,description,thumbnail_url&q=kid+art+book&start=${index}`)
//       .then(response => response.json())
//       .then(data => setBook(data.records[0]))
//       .catch(error => console.error(error));
//   }, [index]);

//   return (
//     <div>
//       {book && (
//         <>
//           <h1>{book.title}</h1>
//           <h2>{book.author}</h2>
//           <p>{book.description}</p>
//           <img src={book.thumbnail_url} alt={book.title} />
//           <button onClick={() => setIndex(index + 1)}>Next Book</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default BookPage;


