import React from "react";

const SortDropdown = ({ handleSortChange }) => {
  return (
    <div className="sort-dropdown">
      <label>Sort by:</label>
      <select onChange={handleSortChange}>
        <option value="priceAsc">Price Low to High</option>
        <option value="priceDesc">Price High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
