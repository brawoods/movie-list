import React from 'react';
// import AppHeader from './AppHeader.jsx';

const App = ({ AppHeader }) => {
  return (
    <><div>
      <div>Hell, I am the App!</div>
      <div>
        <h2 clasName='title'>
          AppHeader goes here
        </h2>
      </div>
      <div>MovieList goes here
        <div className='list'>

        </div>
      </div>
      <div>Movie will go here
        <div className='movie'>

        </div>
      </div>
    </div>

    </>

  );
}


export default App;