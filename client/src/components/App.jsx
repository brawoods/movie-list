import React from 'react';
import AppHeader from './AppHeader.jsx';
import MovieList from './MovieList.jsx';
import Movie from './Movie.jsx';
import Search from './Search.jsx';

const App = (props) => {
  const [movies, setMovies] = React.useState([ {title: 'Mean Girls'}, {title: 'Hackers'}, {title: 'The Grey'}, {title: 'Sunshine'}, {title: 'Ex Machina'}, ]);


  return (
    <div>
      <div>Hello, I am the App!</div>
      <div>
        <AppHeader />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}


export default App;