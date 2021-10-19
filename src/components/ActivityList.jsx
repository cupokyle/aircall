import React, { useState } from "react";
import axios from "axios";

//Components:
import ActivityItem from "./ActivityItem.jsx";
import CallDetail from "./CallDetail.jsx";

const ActivityList = (props) => {
  // Set a view state that defaults to the Acitvity List
  const [view, setView] = useState("LIST");
  const { calls, getCallData, getArchiveData } = props;

  //Using view state, I archive a call and return to list screen
  function archiveCall() {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${view.id}`, {
        is_archived: true,
      })
      .then((res) => {
        getCallData();
        getArchiveData();
      });
  }
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
      {view !== "LIST" && (
        <CallDetail view={view} setView={setView} archiveCall={archiveCall} />
      )}
    </div>
  );
};

export default ActivityList;
