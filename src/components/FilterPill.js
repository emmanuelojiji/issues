import React from "react";
import "./FilterPill.scss";

const FilterPill = ({ text, onMouseOver, onMouseLeave }) => {
  return (
    <div
      className="filter-pill"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </div>
  );
};

export default FilterPill;
