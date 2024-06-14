import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({select, handleClick}) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={handleClick}>
          <FavIcon selected={select}/>
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;