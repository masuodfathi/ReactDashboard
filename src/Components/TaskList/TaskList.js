import React from 'react';
import { connect } from 'react-redux';
import { updateSort } from '../../Redux/Actions';


const TaskList = ({ tasks, sortBy, onSortUpdate }) => {
  const handleSort = (e) => {
    const sortByValue = e.target.value;
    // Call the Redux action to update the sort criteria
    onSortUpdate(sortByValue);
  };

  React.useEffect(() => {
    // Implement sorting logic when sortBy changes
    let sorted;

    switch (sortBy) {
      case 'default':
        sorted = [...tasks];
        break;
      case 'dueDate':
        sorted = [...tasks].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
        break;
      case 'title':
        sorted = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        sorted = tasks;
    }

    // Update the tasks array with the sorted tasks
    onSortUpdate(sorted);
  }, [sortBy, tasks, onSortUpdate]);

  const handleDragStart = (e, taskId) => {
    // Set the data to be transferred during drag-and-drop
    e.dataTransfer.setData('text/plain', taskId.toString());
  };

  const handleDragOver = (e) => {
    // Prevent the default behavior to enable dropping
    e.preventDefault();
  };

  const handleDrop = (e) => {
    // Prevent the default behavior to enable dropping
    e.preventDefault();

    // Get the dragged task's ID from the data transfer
    const draggedTaskId = parseInt(e.dataTransfer.getData('text/plain'), 10);

    // Find the index of the dragged task
    const draggedTaskIndex = tasks.findIndex((task) => task.id === draggedTaskId);

    // Determine the drop index based on the mouse position
    const dropIndex = tasks.length;
    const mouseY = e.clientY;
    const tasksRect = e.target.getBoundingClientRect();
    const averageTaskHeight = tasksRect.height / tasks.length;
    const relativeMouseY = mouseY - tasksRect.top;
    const newDropIndex = Math.floor(relativeMouseY / averageTaskHeight);

    // Ensure the drop index is within bounds
    const finalDropIndex = Math.min(Math.max(newDropIndex, 0), dropIndex);

    // Update the tasks array with the reordered task
    const updatedTasks = [...tasks];
    const [draggedTask] = updatedTasks.splice(draggedTaskIndex, 1);
    updatedTasks.splice(finalDropIndex, 0, draggedTask);

    // Call the Redux action to update the tasks with the new order
    onSortUpdate(updatedTasks);
  };

  return (
    <div className="task-list" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2 className="mt-4 mb-3">Task List</h2>
      {/* Task sorting options */}
      <div className="mb-3">
        <label htmlFor="sortSelect" className="form-label">Sort By:</label>
        <select id="sortSelect" className="form-select" value={sortBy} onChange={handleSort}>
          <option value="default">Default</option>
          <option value="dueDate">Due Date</option>
          <option value="title">Title</option>
        </select>
      </div>
      {/* Render sorted and filtered task cards with drag-and-drop */}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="mb-3"
          draggable
          onDragStart={(e) => handleDragStart(e, task.id)}
        >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.description}</p>
              <div className="d-flex justify-content-between">
                <span>Due: {task.dueDate}</span>
                <span>Status: {task.completed ? 'Completed' : 'Pending'}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  sortBy: state.sortBy,
});

const mapDispatchToProps = (dispatch) => ({
  onSortUpdate: (tasks) => dispatch(updateSort(tasks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);