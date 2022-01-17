import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer";

const rootReducers = combineReducers({
  todos: todosReducer,
  filterReducer,
});
export default rootReducers;
