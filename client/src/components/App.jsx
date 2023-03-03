import React from 'react';
import AppHeader from './AppHeader.jsx';
import MovieList from './MovieList.jsx';
import Movie from './Movie.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

const App = (props) => {
  let movieLibrary = [ {title: 'Mean Girls'}, {title: 'Hackers'}, {title: 'The Grey'}, {title: 'Sunshine'}, {title: 'Ex Machina'}];
  const [movies, setMovies] = React.useState(movieLibrary);

  const filterMovies = (param) => {
    if (param === '') {
      setMovies(movieLibrary);
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

  const addToLibrary = (movieTitle) => {
    // create a new movie object
    let newMovie = {title: movieTitle};
    movieLibrary.push(newMovie);
    // filterMovies('');
      // add title property given title
    // push new movie object to movieLibrary
  }

  const handleSearch = (param) => {
    // TODO handle if no searchParam given
    if (!param) {
      filterMovies('');
    } else {
      filterMovies(param);
    }
  };

  const handleAdd = (title) => {
    // given movie title
    if (title) {
      addToLibrary(title);
    }
    // invoke addToLibrary
    // console.log('handle Add clicked');
  }

  return (
    <div>
      <div>Hello, I am the App!</div>
      <div>
        <AppHeader />
      </div>
      <div>
        <AddMovie buildLibrary={handleAdd}/>
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