import React, { useState, useReducer } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";

import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const reducer = function(state, action) {
  if (action.type === 'toggle-fav') {
    if (state.favPhotos.includes(action.payload)) {
      return {...state, favPhotos: state.favPhotos.filter(id => id !== action.payload)}
    }
    return {...state, favPhotos: [...state.favPhotos, action.payload]}
  }
}

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, {favPhotos: []})
  const [modal, setModal] = useState({open: false, photo: null});
  const handleImageClick = (clickedPhoto) => {
    const foundPhoto = photos.find((photo) => photo.id === clickedPhoto.id)
    setModal({open: true, photo: foundPhoto});
  };
  const handleCloseModal = () => {
    setModal({open: false, photo: null})
  }
  return (
    <div className="photo-list">
      <HomeRoute
        state={state}
        dispatch={dispatch}
        topics={topics}
        photos={photos}
        handleImageClick={handleImageClick}
      />
      {modal.open && <PhotoDetailsModal photo={modal.photo} handleCloseModal={handleCloseModal} handleImageClick={handleImageClick}
      state={state}
      dispatch={dispatch}
      />}
    </div>
  );
};

export default App;
