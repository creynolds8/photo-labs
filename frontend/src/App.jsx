import React from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import ErrorMessage from "components/ErrorMessage";

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
        />
        {state.modal.open && (
          <PhotoDetailsModal
          photo={state.modal.photo}
          state={state}
          dispatch={dispatch}
          />
          )}
        {state.error && <ErrorMessage error={state.error} />}
    </div>
  );
};

export default App;
