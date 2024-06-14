import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, isFavPhoto, dispatch, handleImageClick }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton isFavPhoto={isFavPhoto} handleClick={() => dispatch({payload: photo.id, type: "toggle-fav"})}/>
      <img className="photo-list__image" src={photo.urls.regular} alt="" onClick={() => handleImageClick(photo)} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="" />
        <div className="photo-list__user-info">
          <div>{photo.user.name}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
