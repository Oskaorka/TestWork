import React from "react";
import PropTypes from "prop-types";
import RowHeader from "../Rows/rowHeader";

const TableHeader = ({ handleSort }) => {
  return (
    <>
      <thead>
        <RowHeader handleSort={handleSort} />
      </thead>
    </>
  );
};
TableHeader.propTypes = {
  handleSort: PropTypes.func,
};
export default TableHeader;
