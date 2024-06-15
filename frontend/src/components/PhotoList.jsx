import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, state, dispatch }) => {
  const photoComponents = photos.map(photo => {
    const select = state.favPhotos.includes(photo.id);
    return (<PhotoListItem
    key={photo.id}
    photo={photo}
    isFavPhoto={select}
    dispatch={dispatch}
    />)})
  return (
    <ul className="photo-list">
      { photoComponents }
    </ul>
  );
};

export default PhotoList;
