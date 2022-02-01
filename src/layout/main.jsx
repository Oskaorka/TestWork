import React, { useState } from "react";
import SearchPanel from "../component/searchPanel/searchPanel";
import Table from "../component/Tables/table";
import "./main.scss";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };
  return (
    <div className="mainBlock">
      <div className="mainDashboard">
        <h1>Dashboard</h1>
        <SearchPanel
          type="text"
          name="searchQuery"
          placeholder="What test are you looking for?"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        <Table searchQuery={searchQuery} resetValue={setSearchQuery} />
      </div>
    </div>
  );
};

export default Main;
