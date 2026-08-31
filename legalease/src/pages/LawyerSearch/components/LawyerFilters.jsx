import practiceAreas from "../../../data/practiceAreas.js";

function LawyerFilters({ selectedArea, onAreaChange }) {
  return (
    <select
      className="lawyer-filter"
      value={selectedArea}
      onChange={(event) => onAreaChange(event.target.value)}
    >
      <option value="all">All Practice Areas</option>

      {practiceAreas.map((area) => (
        <option value={area.name} key={area.id}>
          {area.name}
        </option>
      ))}
    </select>
  );
}

export default LawyerFilters;