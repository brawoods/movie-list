import React from 'react';

const Search = () => {

  return (
    <div>
      <div>Search</div>
      <input type='text' onChange={(e) => console.log(e.target.value)}></input>
      <input type='button' value='Search'></input>
    </div>
  )
};

export default Search;