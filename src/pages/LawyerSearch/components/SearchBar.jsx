function SearchBar({ searchTerm, onSearchChange, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by lawyer name..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;