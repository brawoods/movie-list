import React from 'react';
import AppHeader from './AppHeader.jsx';
import MovieList from './MovieList.jsx';
import Movie from './Movie.jsx';
import Search from './Search.jsx';

const App = (props) => {
  const [movies, setMovies] = React.useState([ {title: 'Mean Girls'}, {title: 'Hackers'}, {title: 'The Grey'}, {title: 'Sunshine'}, {title: 'Ex Machina'}, ]);

  const searchMovies = movies.filter((movie, index, movies) => {
    // movies[index].title == /*e.target.value*/
    console.log('movies in search: ', movies[index].title);
  })

  const searchHandler = (item, cb) => {
    cb(item);
  };

    // filter
    // if title == movies[0].title
      // return movies[0].title
  }
  // React.useEffect((e) => {
  //   console.log('useEffect message: ', e.target.value);
  // });

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