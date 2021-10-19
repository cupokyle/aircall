import React from "react";

const CallDetail = (props) => {
  const { view, setView } = props;

  // Use state to return to main list
  function returnHome() {
    setView("LIST");
  }

  return (
    <div className="callContainer">
      <button onClick={returnHome}>Back</button>
    </div>
  );
};

export default CallDetail;
