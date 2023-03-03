import React from 'react';

const AddMovie = ({buildLibrary}) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
  }, [text])

  return (
    <div>
      <input type='text' onChange={(e) => setText(e.target.value)}></input>
      <input type='button' value='Add Movie' onClick={() => buildLibrary(text)} ></input>
    </div>
  )
}

export default AddMovie;