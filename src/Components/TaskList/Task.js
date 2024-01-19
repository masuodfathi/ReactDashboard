import React, { useState } from 'react';

const Task = ({ id, title, description, dueDate, completed, updateTask }) => {
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);
  const [localDueDate, setLocalDueDate] = useState(dueDate);
  const [localCompleted, setLocalCompleted] = useState(completed);

  const handleUpdateTask = () => {
    updateTask({
      id,
      title: localTitle,
      description: localDescription,
      dueDate: localDueDate,
      completed: localCompleted,
    });
  };

  return (
    <div className="task-card">
      {/* ... (rest of the Task component remains the same) */}
      <button onClick={handleUpdateTask}>Update Task</button>
    </div>
  );
};

export default Task;