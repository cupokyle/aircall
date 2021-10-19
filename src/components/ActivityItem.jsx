import React from "react";

const ActivityItem = (props) => {
  const { call } = props;
  return (
    <div className="activityItem">
      <div>I'm an activity</div>
      {call && call.id}
    </div>
  );
};

export default ActivityItem;
