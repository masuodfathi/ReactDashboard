import React from "react";
import TaskCard from "./TaskCard";
import Filters from "./Filters";
import Task from './Task';

const TaskList = ({ tasks, updateTask }) => {
  return (
    <div className="task-list-container">
      <Filters />
      {tasks.map((task) => (
        <Task key={task.id} {...task} updateTask={updateTask} />
      ))}
    </div>
  );
};
export default TaskList;
