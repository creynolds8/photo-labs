import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoComponents = props.photos.map(photo => <PhotoListItem key={photo.id} photo={photo}/>)
  return (
    <ul className="photo-list">
      { photoComponents }
    </ul>
  );
};

export default PhotoList;
