import React, { useState } from 'react';

const Filters = () => {
  // State for selected filter values
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');

  // Handler for status filter change
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    // You can perform additional actions based on the selected status
  };

  // Handler for priority filter change
  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
    // You can perform additional actions based on the selected priority
  };

  return (
    <div className="filters">
      <label>
        Status:
        <select value={selectedStatus} onChange={handleStatusChange}>
          <option value="All">All</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </label>

      <label>
        Priority:
        <select value={selectedPriority} onChange={handlePriorityChange}>
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;