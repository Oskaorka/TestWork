import React from "react";
import "./tableHeader.scss";
const RowHeader = () => {
  return (
    <tr className="tableHeader">
      <td>NAME</td>
      <td>TYPE</td>
      <td>STATUS</td>
      <td>SITE</td>
    </tr>
  );
};

export default RowHeader;
