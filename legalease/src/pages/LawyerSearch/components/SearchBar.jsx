
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by lawyer name..."
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}

export default SearchBar;
