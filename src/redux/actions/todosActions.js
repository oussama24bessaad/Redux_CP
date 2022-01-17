import {
  ADD_TODO,
  EDIT_TODO,
  SET_FILTER,
  TOGGLE_TODO,
} from "../actionTypes/actionTypes";

export const addTodo = (description) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date(),
      description,
    },
  };
};
export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};
export const setFilter = (filter) => {
  return { type: SET_FILTER, payload: { filter } };
};
