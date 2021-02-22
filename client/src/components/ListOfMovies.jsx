import React from 'react';

const SingleMovie = (props) => {
  const movies = props.allTheMovies;
  console.log('movies: ', movies);
  const oneMovie = movies.map((film, index) => {
    <li key={index}>{film.title}</li>
  })

  return(
    <ul>
      {oneMovie}
    </ul>
  )
}

export default SingleMovie;