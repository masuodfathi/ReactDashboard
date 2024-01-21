import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../Redux/Actions';

const Filter = ({ filter, onFilterChange }) => {

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    // Call the Redux action to update the filter criteria
    onFilterChange(filterValue);
  };

  return (
    <div className="filter mt-4 mb-3">
      <h2>Filter</h2>
      <label htmlFor="filterSelect" className="form-label">Select Status:</label>
      <select id="filterSelect" value={filter} onChange={handleFilterChange} className="form-select">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filter) => dispatch(updateFilter(filter)),
});

export default connect(null, mapDispatchToProps)(Filter);