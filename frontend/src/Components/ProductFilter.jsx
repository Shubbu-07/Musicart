import React, { useState } from "react";
import "../Style.css";
import { FaTh, FaBars } from "react-icons/fa";

const ProductFliter = () => {
  const [viewMode, setViewMode] = useState("grid");

  const [filters, setFilters] = useState({
    type: "",
    company: "",
    color: "",
    price: "",
    sort: "",
  });

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    console.log(`View mode set to: ${mode}`);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    console.log(`Filter updated: ${name} = ${value}`);
  };

  return (
    <div className="product-filter">
      <div className="view-icons">
        <FaTh
          className={`icon ${viewMode === "grid" ? "active" : ""}`}
          onClick={() => handleViewModeChange("grid")}
        />
        <FaBars
          className={`icon ${viewMode === "list" ? "active" : ""}`}
          onClick={() => handleViewModeChange("list")}
        />
      </div>
      <div className="dropdowns">
        <select name="type" onChange={handleFilterChange} value={filters.type}>
          <option value="">Headphone type</option>
          <option value="in-ear">In-Ear</option>
          <option value="over-ear">Over-Ear</option>
          <option value="on-ear">On-Ear</option>
        </select>
        <select
          name="company"
          onChange={handleFilterChange}
          value={filters.company}
        >
          <option value="">Company</option>
          <option value="sony">Sony</option>
          <option value="bose">Bose</option>
          <option value="sennheiser">Sennheiser</option>
        </select>
        <select
          name="color"
          onChange={handleFilterChange}
          value={filters.color}
        >
          <option value="">Color</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
        </select>
        <select
          name="price"
          onChange={handleFilterChange}
          value={filters.price}
        >
          <option value="">Price</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>
      <div className="sort-filter">
        <label htmlFor="sort">Sort by:</label>
        <select name="sort" onChange={handleFilterChange} value={filters.sort}>
          <option value="">Filter</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFliter;
