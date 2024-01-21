const initialState = {
    tasks: [],
    filter: 'all',
    sortBy: 'default',
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { ...action.payload, id: state.tasks.length + 1 }],
        };
  
      case 'UPDATE_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
  
      case 'UPDATE_SORT':
        return {
          ...state,
          sortBy: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default Reducer;