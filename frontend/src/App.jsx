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
    dispatch,
  } = useApplicationData();

  return (
    <div className="photo-list">
      <HomeRoute
        state={state}
        dispatch={dispatch}
        topics={topics}
        photos={photos}
      />
      {state.modal.open && (
        <PhotoDetailsModal
          photo={state.modal.photo}
          state={state}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default App;
