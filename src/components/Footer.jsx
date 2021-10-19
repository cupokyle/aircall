import React from "react";
import { HiArchive } from "react-icons/hi";
import { GrList, GrTty } from "react-icons/gr";

const Footer = (props) => {
  const { view, setView } = props;

  function goToArchive() {
    setView("ARCHIVE");
  }

  return (
    <footer>
      <div className="footerButtons">
        <button>
          <GrList />
        </button>
        {view === "LIST" && (
          <button class="midButton">
            <GrTty />
          </button>
        )}
        <button onClick={goToArchive}>
          <HiArchive />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
