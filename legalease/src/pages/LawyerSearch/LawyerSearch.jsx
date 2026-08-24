import { useState } from "react";
import lawyers from "../../data/lawyers.js";
import SearchBar from "./components/SearchBar.jsx";
import LawyerFilters from "./components/LawyerFilters.jsx";
import LawyerCard from "./components/LawyerCard.jsx";
import "./LawyerSearch.css";

function LawyerSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");

  // Filtering logic: start with all lawyers, then narrow down
  // step by step based on the current search text and filter.
  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesSearch = lawyer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesArea =
      selectedArea === "all" || lawyer.practiceArea === selectedArea;

    return matchesSearch && matchesArea;
  });

  return (
    <div className="section lawyer-search-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Find a Lawyer</p>
          <h2>Search our network of lawyers</h2>
        </div>

        <div className="search-controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <LawyerFilters
            selectedArea={selectedArea}
            onAreaChange={setSelectedArea}
          />
        </div>

        <p className="results-count">
          {filteredLawyers.length} lawyer
          {filteredLawyers.length !== 1 ? "s" : ""} found
        </p>

        {}
        {filteredLawyers.length === 0 ? (
          <p className="no-results">
            No lawyers match your search. Try a different name or practice area.
          </p>
        ) : (
          <div className="lawyer-grid">
            {filteredLawyers.map((lawyer) => (
              <LawyerCard lawyer={lawyer} key={lawyer.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LawyerSearch;
