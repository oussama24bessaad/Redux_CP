import { VISIBILITY_FILTER } from "./constantsFilter";

const selector = (store, visibilityFilter) => {
  switch (visibilityFilter) {
    case VISIBILITY_FILTER.DONE:
      return store.todos.filter((todo) => todo.isDone === true);
    case VISIBILITY_FILTER.NOTYET:
      return store.todos.filter((todo) => todo.isDone === false);
    default:
      return store.todos;
  }
};

export default selector;
