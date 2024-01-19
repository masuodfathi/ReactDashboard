import './App.css';
import React, { useState } from 'react';
import TaskList from './Components/TaskList/TaskList';
import Sidebar from './Components/SideBar/Sidebar';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description of Task 1', dueDate: '2024-01-31', completed: false },
    // Add more tasks as needed
  ]);

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <TaskList tasks={tasks} updateTask={updateTask} />
    </div>
  );
}

export default App;
