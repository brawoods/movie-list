import React from 'react';

const AddMovie = ({newMovieText, setMovieText, handleAdd}) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
  }, [text])

  return (
    <div>
      <input type='text' value={newMovieText} onChange={(e) => setMovieText(e.target.value)}></input>
      <input type='button' value='Add' onClick={handleAdd} ></input>
    </div>
  )
}

export default AddMovie;