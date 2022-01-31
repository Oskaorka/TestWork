import React, { useState } from "react";
import { useSitesList } from "../hooks/getDataSites";
import PropTypes from "prop-types";
import "./rowStyle.scss";
const RowTable = ({ name, type, status, siteId }) => {
  const { dataSite } = useSitesList();
  const [btnClick, setBtnClick] = useState("btnResult");

  const handleClick = () => {
    setBtnClick(btnClick === "btnResult" ? "btnFinalize" : "btnResult");
  };
  const getSite = dataSite.find((item) => item.id === siteId);
  const url = getSite.url.replace(/https:|http:|www.|\/\//gi, "");
  const colorArray = {
    1: "red",
    2: "bloo",
    3: "fiolent",
  };
  const statusColor = {
    ONLINE: "green",
    PAUSED: "orange",
    DRAFT: "black",
    STOPPED: "redStatus",
  };
  return (
    <tr className="rowStyle">
      <td className={colorArray[siteId]}>{name}</td>
      <td>{type}</td>
      <td className={statusColor[status]}>{status}</td>
      <td>{url}</td>
      <td>
        <button onClick={handleClick} className={btnClick}>
          Result
        </button>
      </td>
    </tr>
  );
};
RowTable.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  status: PropTypes.string,
  siteId: PropTypes.number,
};
export default RowTable;
