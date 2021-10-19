import React, { useState, useEffect } from "react";
import ActivityList from "./ActivityList.jsx";
import axios from "axios";

const Main = () => {
  // Set a call state that contains the response from our Calls API
  const [calls, setCalls] = useState([]);
  const [archive, setArchive] = useState([]);

  function getCallData() {
    axios.get(`https://aircall-job.herokuapp.com/activities`).then((res) => {
      const callData = res.data.filter((item) => !item.is_archived);
      console.log("Calls:", callData);
      setCalls(callData);
    });
  }
  function getArchiveData() {
    axios.get(`https://aircall-job.herokuapp.com/activities`).then((res) => {
      const archiveData = res.data.filter((item) => item.is_archived);
      console.log("Archive:", archiveData);
      setArchive(archiveData);
    });
  }

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
  // When Main component loads, request from API
  useEffect(() => {
    getCallData();
    getArchiveData();
  }, []);

  return (
    <div className="mainContainer">
      <ActivityList
        calls={calls}
        getArchiveData={getArchiveData}
        getCallData={getCallData}
      />
    </div>
  );
};

export default Main;
