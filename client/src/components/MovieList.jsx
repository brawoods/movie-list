import React from 'react';
import Movie from './Movie.jsx';

const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map((movie) => {
        return <Movie key={movie.title} movie={movie} />
      })}
    </div>
  );
};

export default MovieList;

      {/* <div>
        <span>Mean Girls</span>
      </div>
      <div>
        <span>Hackers</span>
      </div>
      <div>
        <span>The Grey</span>
      </div>
      <div>
        <span>Sunshine</span>
      </div>
      <div>
        <span>Ex Machina</span>
      </div> */}
