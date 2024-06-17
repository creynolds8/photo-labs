import React from "react";

import "../styles/PhotoFavButton.scss";

import FavIcon from "./FavIcon";

function PhotoFavButton({ isFavPhoto, handleClick }) {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={handleClick}>
          <FavIcon selected={isFavPhoto} />
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;
