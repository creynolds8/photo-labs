import React from "react";

import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, dispatch }) => {
  const topicComponents = topics.map((topic) => (
    <TopicListItem key={topic.id} topic={topic} dispatch={dispatch} />
  ));
  return (
    <div className="top-nav-bar__topic-list">
      {topicComponents}
    </div>
  );
};

export default TopicList;
