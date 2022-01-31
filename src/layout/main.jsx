import React, { useState } from "react";
import SearchPanel from "../component/searchPanel";
import Table from "../component/table";
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
        <Table searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Main;
