import React, { useState, useReducer } from "react";

import "./App.scss";

import photos from "mocks/photos";
import topics from "mocks/topics";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    modal,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="photo-list">
      <HomeRoute
        state={state}
        dispatch={updateToFavPhotoIds}
        topics={topics}
        photos={photos}
        handleImageClick={setPhotoSelected}
      />
      {modal.open && (
        <PhotoDetailsModal
          photo={modal.photo}
          handleCloseModal={onClosePhotoDetailsModal}
          handleImageClick={setPhotoSelected}
          state={state}
          dispatch={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
