import React from "react";

const FilterBar = ({ categories, handleCategoryChange }) => {
  return (
    <div className="filter-bar">
      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
