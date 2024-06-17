import React from "react";

import "../styles/PhotoDetailsModal.scss";

import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ photo, state, dispatch }) => {
  const similarPhotosArray = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => dispatch({ type: "close-modal" })}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          isFavPhoto={state.favPhotos.includes(photo.id)}
          handleClick={() =>
            dispatch({ payload: photo.id, type: "toggle-fav" })
          }
        />
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          onError={() =>
            dispatch({
              payload:
                "Network response was not ok: Photo failed to load. Check your network connnection.",
              type: "handle-error",
            })
          }
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
        <h3>Similar Photos</h3>
      </div>
      <PhotoList
        key={photo.id}
        photos={similarPhotosArray}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default PhotoDetailsModal;
