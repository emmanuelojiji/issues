import React from "react";
import "./FilterPill.scss";

const FilterPill = ({
  text,
  onMouseOver,
  onMouseLeave,
  onClick,
  background,
  state
}) => {
  return (
    <div
      className={`filter-pill ${state}`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ background: background }}
    >
      {text}
    </div>
  );
};

export default FilterPill;
