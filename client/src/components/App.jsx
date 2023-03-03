import React from 'react';
import AppHeader from './AppHeader.jsx';
import MovieList from './MovieList.jsx';
import Movie from './Movie.jsx';
import Search from './Search.jsx';

const App = (props) => {
  let movieData = [ {title: 'Mean Girls'}, {title: 'Hackers'}, {title: 'The Grey'}, {title: 'Sunshine'}, {title: 'Ex Machina'}];
  const [movies, setMovies] = React.useState(movieData);

  const filterMovies = (param) => {
    if (param === '') {
      setMovies(movieData);
    } else {
      setMovies(
        movies.filter((movie, index) => {
          if (movies[index].title === param) {
            console.log('filtered movie: ' + movies[index].title);
            return movie;
          }
        })
      )
    }
  };

  const handleSearch = (param) => {
    // TODO handle if no searchParam given
    if (!param) {
      console.log('no param given');
      filterMovies('');
    } else {
      console.log('param given: ', param);
      filterMovies(param);
    }
  };

  return (
    <div>
      <div>Hello, I am the App!</div>
      <div>
        <AppHeader />
      </div>
      <div>
        <Search searchHandler={handleSearch}/>
      </div>
      <div>
        <MovieList movies={movies}/>
      </div>
    </div>
  );
  }
  // React.useEffect((e) => {
  //   console.log('useEffect message: ', e.target.value);
  // });



export default App;