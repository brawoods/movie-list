import React from 'react';

const Movie = ({ movie }) => {
  // console.log(movie);

  return (
    <div>
      <div>
        {/* Movie details will go here */}
        {movie.title}
      </div>
    </div>
  );
};

export default Movie;