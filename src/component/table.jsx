// import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import { useDataList } from "../hooks/getData";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import "./tableStyle.scss";

const Table = ({ searchQuery }) => {
  const { data } = useDataList();
  // const [test, setTest] = useState();
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (!isLoading) {
  //     setTest(data);
  //     setLoading(true);
  //   }
  //   filt();
  //   console.log("is");
  // }, []);

  // function filt() {
  //   if (isLoading) {
  //     setTest(
  //       test.filter((e) => {
  //         if (e.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
  //           return e;
  //         }
  //       })
  //     );
  //   }
  // }
  const filtered = data.filter((e) => {
    if (e.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
      return e;
    }
  }); // useEffect(() => {
  //   if (isLoading) {
  //     console.log("yes");
  //     console.log(test);
  //   }
  // }, [filt]);

  // useEffect(() => {}, [isLoading, test]);

  useEffect(() => {
    hadleChange();
  }, []);
  function hadleChange() {}

  return (
    <>
      {/* <div>{console.log(test)}</div> */}
      {filtered.length > 0 ? (
        <table className="table">
          <TableHeader />
          <TableBody filteredQuery={filtered} />
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

export default Table;
