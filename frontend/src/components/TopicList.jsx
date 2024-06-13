import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const topicComponents = props.topics.map(topic => <TopicListItem key={topic.id} topic={topic} />)
  return (
    <div className="top-nav-bar__topic-list">
      {topicComponents}
    </div>
  );
};

export default TopicList;
