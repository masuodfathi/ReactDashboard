import React from "react";
import { connect } from 'react-redux';
import { addTask } from '../../Redux/Actions';

const TaskForm = ({ onAddTask }) => {
    const [newTask, setNewTask] = React.useState({ title: '', description: '', dueDate: '', completed: false });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate form fields before adding the task
      if (newTask.title && newTask.dueDate) {
        // Call the callback function to add the new task
        onAddTask(newTask);
        // Clear the form fields
        setNewTask({ title: '', description: '', dueDate: '', completed: false });
      } else {
        alert('Please enter a title and due date for the task.');
      }
    };
  
    return (
        <form className="task-form mt-4 mb-3" onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">Title:</label>
          <input
            type="text"
            id="titleInput"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">Description:</label>
          <textarea
            id="descriptionInput"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDateInput" className="form-label">Due Date:</label>
          <input
            type="date"
            id="dueDateInput"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    );
  };
  const mapDispatchToProps = (dispatch) => ({
    onAddTask: (task) => dispatch(addTask(task)),
  });

  export default connect(null, mapDispatchToProps)(TaskForm);