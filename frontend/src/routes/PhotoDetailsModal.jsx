import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
  photo,
  handleCloseModal,
  state,
  dispatch,
  handleImageClick,
}) => {
  const similarPhotosArray = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleCloseModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton />
        <img className="photo-details-modal__image" src={photo.urls.full} />
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
      </div>
      <PhotoList
        photos={similarPhotosArray}
        state={state}
        dispatch={dispatch}
        handleImageClick={handleImageClick}
      />
    </div>
  );
};

export default PhotoDetailsModal;
