import React from "react";
import RowTable from "../Rows/rowTable";
import PropTypes from "prop-types";

const TableBody = ({ filteredQuery }) => {
  return (
    <>
      <tbody>
        {filteredQuery.map((e) => (
          <RowTable
            key={e.id}
            id={e.id}
            name={e.name}
            type={e.type}
            status={e.status}
            siteId={e.siteId}
          />
        ))}
      </tbody>
    </>
  );
};
TableBody.propTypes = {
  filteredQuery: PropTypes.array,
};
export default TableBody;
