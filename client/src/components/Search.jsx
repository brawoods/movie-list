import React from 'react';
// import App from './App.jsx';

const Search = ({searchText, searchHandler}) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
  }, [text])

  return (
    <div>
      <input type='text' onChange={(e) => setText(e.target.value)}></input>
      <input type='button' value='Search' onClick={() => {
        searchHandler(text);
        setText();
      }} ></input>
    </div>
  )
};

export default Search;