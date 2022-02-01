import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataList } from "../hooks/getData";
import { useSitesList } from "../hooks/getDataSites";
import { statusColor, cutString } from "../utils/setting";

import "../layout/main.scss";

const TamplateResalt = ({ title }) => {
  const handleClickBack = () => {
    history("/");
  };
  const history = useNavigate();
  const params = useParams();
  const testId = Number(params.testId);
  const { data } = useDataList();
  const { dataSite } = useSitesList();
  //
  const item = data.find((e) => e.id === testId);
  const site = dataSite.find((e) => e.id === item.siteId);
  const url = cutString(site.url);

  return (
    <>
      <div className="mainBlock">
        <div className="mainDashboard">
          <h1>{title}</h1>
          <p>Spring promotion</p>
          <div className="aboutFinalize">
            <span>NAME: {item.name}</span>
            <span>TYPE: {item.type}</span>
            <span className={statusColor[item.status]}>
              STATUS: {item.status}
            </span>
            <span>SITE: {url}</span>
          </div>

          <div className="arrowBack" onClick={handleClickBack}>
            Back
          </div>
        </div>
      </div>
    </>
  );
};

export default TamplateResalt;
