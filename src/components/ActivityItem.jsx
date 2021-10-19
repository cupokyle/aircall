import React from "react";

const ActivityItem = (props) => {
  const { call } = props;
  return (
    <div className="activityItem">
      <div>I'm an activity</div>
      {call && call.id}
      {call && call.call_type}
      {call && call.direction}
      {call && call.duration}
      {call && call.from}
    </div>
  );
};

export default ActivityItem;
