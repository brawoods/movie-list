import React from 'react';
import AppHeader from './AppHeader.jsx';
import MovieList from './MovieList.jsx';
import Movie from './Movie.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
// import movieLibrary from './MovieLibrary.jsx';

const App = (props) => {
  let testData = [ {title: 'Mean Girls', watched: true}, {title: 'Hackers', watched: true}, {title: 'The Grey', watched: false}, {title: 'Sunshine', watched: false}, {title: 'Ex Machina', watched: false} ];
  const [movies, setMovies] = React.useState(testData);
  const [searchText, setSearchText] = React.useState('');
  const [newMovieText, setMovieText] = React.useState('');

  // React.useEffect(() => {
  // }, [searchText])

  const searchHandler = () => {
    // TODO handle if no searchParam given
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
      setMovies(testData);
    }

  };

  const addToLibrary = (movieTitle) => {
    // create a new movie object
    let newMovie = [{title: movieTitle}];
    // console.log(`tried to add ${newMovie[0].title} to library`);
    setMovies(movies.concat(newMovie));
  }



  const handleAdd = () => {
    // given movie title
    addToLibrary(newMovieText);
    setMovieText('');
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
        <AddMovie newMovieText={newMovieText} setMovieText={setMovieText} handleAdd={handleAdd}/>
      </div>
      <div>
        <Search searchText={searchText} setSearchText={setSearchText} searchHandler={searchHandler}/>
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