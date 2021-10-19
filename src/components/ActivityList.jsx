import React, { useState } from "react";

//Components:
import ActivityItem from "./ActivityItem.jsx";
import CallDetail from "./CallDetail.jsx";

const ActivityList = (props) => {
  // Set a view state that defaults to the Acitvity List
  const [view, setView] = useState("LIST");
  const { calls } = props;
  return (
    <div className="callContainer">
      {view === "LIST" &&
        calls.map((call) => (
          <ActivityItem
            key={call.id}
            call={call}
            view={view}
            setView={setView}
          />
        ))}
      {view !== "LIST" && <CallDetail view={view} setView={setView} />}
    </div>
  );
};

export default ActivityList;
