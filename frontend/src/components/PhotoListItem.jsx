import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={`${photo.imageSource}`} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={`${photo.profile}`} alt=""/>
        <div className="photo-list__user-info">
          <div className="photo-list__user-details">{photo.username}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
