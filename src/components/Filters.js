import React from "react";

const Filters = () => {
  return (
    <div className="filters-wrapper">
      <div className="filter-header">
        <i className="fa-regular fa-calendar-check"></i>
        <p className="title"> Task priority</p>
      </div>

      <div className="filter-btn-list">
          <button className="btn">All</button>
          <button className="btn">High</button>
          <button className="btn">Medium</button>
          <button className="btn">Low</button>
      </div>
    </div>
  );
};

export default Filters;
