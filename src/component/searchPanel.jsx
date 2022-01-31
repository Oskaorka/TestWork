import React from "react";
import PropTypes from "prop-types";
import "./searchPanel.scss";
const SearchPanel = ({ type, name, placeholder, value, onChange }) => {
  return (
    <>
      <form className="searchPanel" action="searchQuery">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </form>
    </>
  );
};
SearchPanel.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default SearchPanel;
