import React from "react";
import ArchiveItem from "./ArchiveItem.jsx";

const ArchiveList = (props) => {
  const { archive, setArchive, setView } = props;
  return (
    <div className="callContainer">
      {archive.map((archiveCall) => (
        <ArchiveItem
          key={archiveCall.id}
          archiveCall={archiveCall}
          setView={setView}
        />
      ))}
    </div>
  );
};

export default ArchiveList;
