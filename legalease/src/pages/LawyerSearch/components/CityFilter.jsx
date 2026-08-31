import lawyers from "../../../data/lawyers.js";

function CityFilter({ selectedCity, onCityChange }) {
  const cities = [
    ...new Set(lawyers.map((lawyer) => lawyer.location)),
  ].sort();

  return (
    <select
      className="lawyer-filter city-filter"
      value={selectedCity}
      onChange={(event) => onCityChange(event.target.value)}
    >
      <option value="all">All Cities</option>

      {cities.map((city) => (
        <option value={city} key={city}>
          {city}
        </option>
      ))}
    </select>
  );
}

export default CityFilter;