import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

import Header from "./components/Header.jsx";

const App = () => {
  const [view, setView] = useState("LIST");
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Main view={view} setView={setView} />
      </div>
      <Footer view={view} setView={setView} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
