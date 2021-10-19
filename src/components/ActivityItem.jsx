import React from "react";
import { FaBeer } from "react-icons/fa";

const ActivityItem = (props) => {
  const { call } = props;
  return (
    <div className="activityItem">
      <div className="archiveButton">
        <FaBeer />
      </div>
      <div className="mainInfo">
        {call && call.call_type}
        {call && call.direction}
      </div>
      <div className="timeInfo">{call && Date(call.created_at)}</div>
    </div>
  );
};

export default ActivityItem;
