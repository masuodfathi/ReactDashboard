export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const updateFilter = (filter) => ({
    type: 'UPDATE_FILTER',
    payload: filter,
  });
  
  export const updateSort = (sortBy) => ({
    type: 'UPDATE_SORT',
    payload: sortBy,
  });