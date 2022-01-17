import { ADD_TODO, EDIT_TODO, TOGGLE_TODO } from "../actionTypes/actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      description: "Fullstack",
      isDone: false,
    },
    {
      id: 2,
      description: "Devops",
      isDone: false,
    },
    {
      id: 3,
      description: "IA",
      isDone: false,
    },
  ],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, description } = action.payload;
      return { todos: [...state.todos, { id, description, isDone: false }] };
    }
    case EDIT_TODO: {
      let newTodos = [];
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.payload.id) {
          newTodos[i] = action.payload;
        } else {
          newTodos[i] = state.todos[i];
        }
      }
      return { todos: newTodos };
    }
    case TOGGLE_TODO: {
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isDone: !todo.isDone }
            : todo
        ),
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
