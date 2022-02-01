import React, { useEffect, useState } from "react";
import { useDataList } from "../../hooks/getData";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import PropTypes from "prop-types";

import "./tableStyle.scss";

const Table = ({ searchQuery, resetValue }) => {
  const { data } = useDataList();
  const [valueSort, setvalueSort] = useState("");
  const [stateSort, setStateSort] = useState(true);
  const initialState = { data };
  const [getData, setData] = useState(initialState);
  const filtered = getData.data.filter((e) => {
    if (e.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
      return e;
    }
  });
  useEffect(() => {
    if (data.length > filtered.length) {
      setData({ data: filtered });
    }
  }, [data.length, filtered.length]);
  function hadleChange() {
    setData(initialState);
    resetValue("");
  }
  function sortBy(a, b) {
    if (!stateSort) {
      if (a[valueSort] < b[valueSort]) {
        return -1;
      }
      if (a[valueSort] > b[valueSort]) {
        return 1;
      }
      return 0;
    }
    if (stateSort) {
      if (a[valueSort] > b[valueSort]) {
        return -1;
      }
      if (a[valueSort] < b[valueSort]) {
        return 1;
      }
      return 0;
    }
  }
  const handleSort = (e) => {
    stateSort ? setStateSort(false) : setStateSort(true);
    setvalueSort(e.target.dataset.type);
  };
  useEffect(() => {}, [getData.data]);

  return (
    <>
      {getData.data.length > 0 ? (
        <table className="table">
          <TableHeader handleSort={handleSort} />
          <TableBody filteredQuery={getData.data.sort(sortBy)} />
        </table>
      ) : (
        <div className="block-notResult">
          <h2>Your search did not match any results.</h2>
          <button onClick={hadleChange}>Reset</button>
        </div>
      )}
    </>
  );
};
Table.propTypes = {
  searchQuery: PropTypes.string,
  resetValue: PropTypes.func,
};
export default Table;
