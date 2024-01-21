import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-meta">
        <span>Due: {task.dueDate}</span>
        <span>Status: {task.completed ? 'Completed' : 'Pending'}</span>
      </div>
    </div>
  );
};

export default TaskCard;