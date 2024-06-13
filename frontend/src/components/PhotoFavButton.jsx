import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [ select, setSelect ] = useState(false)
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={() => setSelect(prev => !prev)}>
          <FavIcon selected={select}/>
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;