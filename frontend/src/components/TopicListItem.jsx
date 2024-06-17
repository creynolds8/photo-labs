import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, dispatch }) => {
  return (
    <div className="topic-list__item">
      <span
        onClick={() =>
          dispatch({ type: "get-photos-by-topic", payload: topic.id })
        }>
        {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;
