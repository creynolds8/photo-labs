import React, { useState, useReducer } from "react";

import photos from "mocks/photos";

export default function useApplicationData() {
  const reducer = function (state, action) {
    switch (action.type) {
      case "toggle-fave":
          if (state.favPhotos.includes(action.payload)) {
            return {
              ...state,
              favPhotos: state.favPhotos.filter((id) => id !== action.payload),
            };
          }
          return { ...state, favPhotos: [...state.favPhotos, action.payload] };
        default:
          return state;
    }
  };

  const [state, updateToFavPhotoIds] = useReducer(reducer, { favPhotos: [] });
  const [modal, setModal] = useState({ open: false, photo: null });
  const setPhotoSelected = (clickedPhoto) => {
    const foundPhoto = photos.find((photo) => photo.id === clickedPhoto.id);
    setModal({ open: true, photo: foundPhoto });
  };
  const onClosePhotoDetailsModal = () => {
    setModal({ open: false, photo: null });
  };

  return {
    state,
    modal,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
}
