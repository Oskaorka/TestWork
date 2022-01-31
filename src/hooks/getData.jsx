import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import dataService from "../service/dataService";

const DataListContext = React.createContext();

export const useDataList = () => {
  return useContext(DataListContext);
};

export const DataListProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getExecutor();
  }, []);
  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);
  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }
  async function getExecutor() {
    try {
      const content = await dataService.getTests();
      // console.log(content);
      setData(content);
      setLoading(false);
      // console.log(isLoading);
    } catch (error) {
      errorCatcher(error);
    }
  }
  return (
    <DataListContext.Provider value={{ isLoading, data }}>
      {!isLoading ? children : "Loadidng..."}
    </DataListContext.Provider>
  );
};
DataListProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
