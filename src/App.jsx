import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

import Header from "./components/Header.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
