import React from "react";
import ReactDOM from "react-dom";
import ActivityList from "./components/ActivityList.jsx";

import Header from "./components/Header.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        {/* Parsed Activites will go here */}
        <ActivityList />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
