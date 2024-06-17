import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ state, dispatch }) => {
  return (
    <div className="home-route">
      <TopNavigation
        viewMode={state.viewMode}
        topics={state.topicData}
        select={state.favPhotos.length > 0}
        dispatch={dispatch}
      />
      <PhotoList photos={state.photoData} state={state} dispatch={dispatch} />
    </div>
  );
};

export default HomeRoute;
