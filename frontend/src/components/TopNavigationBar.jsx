import React from "react";

import "../styles/TopNavigationBar.scss";

import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ select, topics, dispatch }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} dispatch={dispatch} />
      <FavBadge isFavPhotoExist={select} />
    </div>
  );
};

export default TopNavigation;
