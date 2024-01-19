import React from 'react';

const TaskCard = ({ title, description }) => {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Additional details and actions */}
    </div>
  );
};

export default TaskCard;