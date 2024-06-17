import React from "react";

import "../styles/TopNavigationBar.scss";

import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import ToggleViewModeButton from "./ToggleViewModeButton";

const TopNavigation = ({ viewMode, select, topics, dispatch }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} dispatch={dispatch} />
      <div className="button">
        <ToggleViewModeButton viewMode={viewMode} dispatch={dispatch} />
        <FavBadge isFavPhotoExist={select} />
      </div>
    </div>
  );
};

export default TopNavigation;
