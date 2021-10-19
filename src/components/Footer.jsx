import React from "react";
import { HiArchive, HiOutlineIdentification } from "react-icons/hi";
import { GrTty } from "react-icons/gr";

const Footer = (props) => {
  const { view, setView } = props;
  return (
    <footer>
      <div className="footerButtons">
        <button>
          <HiOutlineIdentification size={55} />
        </button>
        {view === "LIST" && (
          <button class="midButton">
            <GrTty size={75} />
          </button>
        )}
        <button>
          <HiArchive size={55} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
