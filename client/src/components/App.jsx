import React from 'react';
import AppHeader from './AppHeader.jsx';
import MovieList from './MovieList.jsx';
import Movie from './Movie.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
// import movieLibrary from './MovieLibrary.jsx';

const App = (props) => {
  let movieLibrary = [ {title: 'Mean Girls'}, {title: 'Hackers'}, {title: 'The Grey'}, {title: 'Sunshine'}, {title: 'Ex Machina'} ];
  const [movies, setMovies] = React.useState(movieLibrary);
  const [searchText, setSearchText] = React.useState('');

  // React.useEffect(() => {
  // }, [searchText])

  const handleSearch = () => {
    // TODO handle if no searchParam given
    if (!searchText) {
      filterMovies();
    }
    filterMovies(searchText);
    setSearchText('');

  };

  const filterMovies = (param) => {
    if (param) {
      setMovies(
        movies.filter((movie, index) => {
          if (movies[index].title === param) {
            // console.log('filtered movie: ' + movies[index].title);
            return movie;
          }
        })
      )
    } else {
      setMovies(movieLibrary);
    }

  };

  const addToLibrary = (movieTitle) => {
    // create a new movie object
    let newMovie = [{title: movieTitle}];
    // console.log(`tried to add ${newMovie[0].title} to library`);
    setMovies(movies.concat(newMovie));
  }



  const handleAdd = (param) => {
    // given movie title
    if (param) {
      addToLibrary(param);
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
        <Search searchText={searchText} setSearchText={setSearchText} searchHandler={handleSearch}/>
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