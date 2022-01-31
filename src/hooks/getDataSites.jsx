import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import dataService from "../service/dataService";

const DataSitesContext = React.createContext();

export const useSitesList = () => {
  return useContext(DataSitesContext);
};

export const DataSitesProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [dataSite, setDataSite] = useState([]);
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
      const content = await dataService.getSites();
      // console.log(content);
      setDataSite(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }
  return (
    <DataSitesContext.Provider value={{ isLoading, dataSite }}>
      {!isLoading ? children : "Loadidng..."}
    </DataSitesContext.Provider>
  );
};
DataSitesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
