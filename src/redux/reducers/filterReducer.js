import { SET_FILTER } from "../actionTypes/actionTypes";
import { VISIBILITY_FILTER } from "../../constantsFilter";

const initialState = VISIBILITY_FILTER.ALL;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }

    default: {
      return state;
    }
  }
};

export default filterReducer;
