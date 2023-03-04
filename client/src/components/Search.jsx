import React from 'react';
// import App from './App.jsx';

const Search = ({searchText, setSearchText, searchHandler}) => {
  return (
    <div>
      <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
      <input type='button' value='Search' onClick={searchHandler} ></input>
    </div>
  )
};

export default Search;