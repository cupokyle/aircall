import React from "react";

//Components:
import ActivityItem from "./ActivityItem.jsx";

const ActivityList = (props) => {
  const { calls } = props;
  return (
    <div>
      <h3>I'm the ActivityList</h3>
      <ul>
        {calls.map((call) => (
          <ActivityItem key={call.id} call={call} />
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
