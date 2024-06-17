import React from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import ErrorMessage from "components/ErrorMessage";

const App = () => {
  const { state, dispatch } = useApplicationData();

  return (
    <div className="photo-list">
      {state.error && <ErrorMessage error={state.error} />}
      {!state.error && <HomeRoute state={state} dispatch={dispatch} />}
      {!state.error && state.modal.open && (
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
