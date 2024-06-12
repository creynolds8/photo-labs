import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  /* Insert React */
  return <div>
    <img src={`${photo.imageSource}`} alt="" />
    <img src={`${photo.profile}`} alt="" />
    <p>{photo.username}</p>
    <p>{photo.location.city}, {photo.location.country}</p>
  </div>
};

export default PhotoListItem;
