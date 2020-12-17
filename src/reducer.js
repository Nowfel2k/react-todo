const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload.label.length === 0) return todo; // edge case 
          if (todo.id === action.payload.id)
            return { id: todo.id, label: action.payload.label };
          return todo;
        })
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
