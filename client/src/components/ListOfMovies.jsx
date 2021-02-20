import React from 'react';

const MovieList = (props) => {
  const moviesToList = props.allTheMovies;

  const listedMovies = moviesToList.map((name, index) =>
    <li key={index}>
      {name.title}
    </li>
  );

  return(
    <ul>{listedMovies}</ul>
  )
}

export default MovieList;