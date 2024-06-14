import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoListItem from "components/PhotoListItem";


const PhotoDetailsModal = ({ photo, handleCloseModal }) => {
  const similarPhotosArray = Object.values(photo.similar_photos)
  const similarPhotoComponents = similarPhotosArray.map(photo => {
  return <PhotoListItem key={photo.id} photo={photo} />
  })

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleCloseModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton />
      <img
        className="photo-details-modal__image"
        src={photo.urls.regular}
      />
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
          />
          <div className="photo-details-modal__photographer-info">
            {photo.user.name}
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        {similarPhotoComponents}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
