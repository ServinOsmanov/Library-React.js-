import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data.js'


function BookList() {
  let result = Data.map((data, index) => {
    return(
      <div className="cover">
        <p className="author">
          <Link to={`/${Data[index].books[0].Author}`}>{Data[index].books[0].Author}</Link>
        </p>
      
        <p className="title" key={data.books[0].Title}>
          <Link to={`/TitlePage/${data.books[0].Title}`}>{Data[index].books[0].Title}</Link>
        </p>
      </div>
    )
  })
 
  return <div> {result} </div>;
}

export default BookList;

