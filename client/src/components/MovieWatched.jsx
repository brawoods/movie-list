import React from 'react';

const Watched = ({watchStatus}) => {

  if (watchStatus) {
    return <>Watched</>
  } else {
    return <>Not Watched</>
  }

};

export default Watched;