import React from "react";
import Filters from "./Filters";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="search-tasks">
          <input
            className="search"
            type="text"
            name="search"
            placeholder="Search Tasks"
          />
        </div>

        <Filters />
      </div>
    </div>
  );
};

export default Sidebar;
