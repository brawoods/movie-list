import React from 'react';
// import App from './App.jsx';

const Search = ({searchHandler}) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
  }, [text])


  return (
    <div>
      <input type='text' onChange={(e) => setText(e.target.value)}></input>
      <input type='button' value='Search' onClick={() => searchHandler(text)} ></input>
    </div>
  )
};

export default Search;