import React from "react";

//Components:
import ActivityItem from "./ActivityItem.jsx";

const ActivityList = (props) => {
  const { calls } = props;
  return (
    <div className="callContainer">
      {calls.map((call) => (
        <ActivityItem key={call.id} call={call} />
      ))}
    </div>
  );
};

export default ActivityList;
