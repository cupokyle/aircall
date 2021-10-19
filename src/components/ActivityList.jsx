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
          <li key={call.id}>{call.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
