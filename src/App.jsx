import React from "react";
import ReactDOM from "react-dom";
import ActivityItem from "./components/ActivityItem.jsx";

import Header from "./components/Header.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        {/* ActivityList will go here */}
        <ActivityItem />
        <ActivityItem />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
