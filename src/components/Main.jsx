import React, { useState, useEffect } from "react";
import ActivityList from "./ActivityList.jsx";
import axios from "axios";

const Main = () => {
  const [calls, setCalls] = useState([]);

  function getCallData() {
    axios.get(`https://aircall-job.herokuapp.com/activities`).then((res) => {
      const callData = res.data;
      console.log(callData);
      setCalls(callData);
    });
  }

  useEffect(() => {
    getCallData();
  }, []);

  return (
    <div className="mainContainer">
      <ActivityList calls={calls} />
    </div>
  );
};

export default Main;
