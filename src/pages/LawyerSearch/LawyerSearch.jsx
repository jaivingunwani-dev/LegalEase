import { useState } from "react";
import lawyers from "../../data/lawyers.js";
import SearchBar from "./components/SearchBar.jsx";
import LawyerFilters from "./components/LawyerFilters.jsx";
import CityFilter from "./components/CityFilter.jsx";
import LawyerCard from "./components/LawyerCard.jsx";
import "./LawyerSearch.css";

function LawyerSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");

  const [searchedTerm, setSearchedTerm] = useState("");
  const [searchedArea, setSearchedArea] = useState("all");
  const [searchedCity, setSearchedCity] = useState("all");

  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesName = lawyer.name
      .toLowerCase()
      .includes(searchedTerm.toLowerCase());

    const matchesArea =
      searchedArea === "all" ||
      lawyer.practiceArea === searchedArea;

    const matchesCity =
      searchedCity === "all" ||
      lawyer.location === searchedCity;

    return matchesName && matchesArea && matchesCity;
  });

  function handleSearch() {
    setSearchedTerm(searchTerm.trim());
    setSearchedArea(selectedArea);
    setSearchedCity(selectedCity);
  }

  return (
    <div className="section lawyer-search-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Find a Lawyer</p>
          <h2>Search our network of lawyers</h2>
        </div>

        <div className="search-controls">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearch={handleSearch}
          />

          <LawyerFilters
            selectedArea={selectedArea}
            onAreaChange={setSelectedArea}
          />

          <CityFilter
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
          />
        </div>

        <p className="results-count">
          {filteredLawyers.length} lawyer
          {filteredLawyers.length !== 1 ? "s" : ""} found
        </p>

        {filteredLawyers.length === 0 ? (
          <p className="no-results">
            No lawyers match your search. Try different search options.
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