import React from 'react';
import Watched from './MovieWatched.jsx';

const Movie = ({ movie }) => {
  // console.log(movie.watched);

  return (
    <div>
      <div>
        {/* Movie details will go here */}
        {movie.title}
      </div>
      <div>
        <Watched watchStatus={movie.watched}/>
      </div>
    </div>
  );
};

export default Movie;