import React from "react";
import { useSitesList } from "../../hooks/getDataSites";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { statusColor, cutString, colorMark } from "../../utils/setting";
import "./rowStyle.scss";

const RowTable = ({ id, name, type, status, siteId }) => {
  const { dataSite } = useSitesList();
  const history = useNavigate();

  const handleClick = (e) => {
    if (e.target.className === "btnFinalize") {
      return history(`finalize/${id}`);
    }
    if (e.target.className === "btnResult") {
      return history(`results/${id}`);
    }
  };

  const getSi = dataSite.find((item) => item.id === siteId);
  const site = cutString(getSi.url);

  const textBtn = status === "DRAFT" ? "Finalize" : "Results";
  const colorBtn = textBtn === "Finalize" ? "btnFinalize" : "btnResult";

  return (
    <tr className="rowStyle">
      <td className={colorMark[siteId]}>{name}</td>
      <td>{type}</td>
      <td className={statusColor[status]}>{status}</td>
      <td>{site}</td>
      <td>
        <button onClick={handleClick} className={colorBtn}>
          {textBtn}
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
  id: PropTypes.number,
};
export default RowTable;
