import React from "react";
import "../Tables/tableHeader.scss";
const RowHeader = ({ handleSort }) => {
  return (
    <tr className="tableHeader">
      <td data-type="name" onClick={handleSort}>
        NAME
      </td>
      <td data-type="type" onClick={handleSort}>
        TYPE
      </td>
      <td data-type="status" onClick={handleSort}>
        STATUS
      </td>
      <td data-type="siteId" onClick={handleSort}>
        SITE
      </td>
    </tr>
  );
};

export default RowHeader;
