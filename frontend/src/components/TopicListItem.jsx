import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = () => {
  return (
    <div className="topis-list__span">
      <div className="topic-list__item">
        {sampleDataForTopicListItem.label}
      </div>
    </div>
  );
};

export default TopicListItem;
