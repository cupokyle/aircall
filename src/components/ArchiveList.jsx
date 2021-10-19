import React from "react";
import ArchiveItem from "./ArchiveItem.jsx";

const ArchiveList = (props) => {
  const { archive, setArchive } = props;
  return (
    <div className="callContainer">
      {archive.map((archiveCall) => (
        <ArchiveItem key={archiveCall.id} archiveCall={archiveCall} />
      ))}
    </div>
  );
};

export default ArchiveList;
