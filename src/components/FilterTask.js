import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions/todosActions";
import { VISIBILITY_FILTER } from "../constantsFilter";

const FilterTask = () => {
  const dispatch = useDispatch();

  return (
    <Nav variant="tabs" defaultActiveKey={VISIBILITY_FILTER.ALL}>
      {Object.keys(VISIBILITY_FILTER).map((filterKey) => (
        <Nav.Item key={VISIBILITY_FILTER[filterKey]}>
          <Nav.Link
            eventKey={VISIBILITY_FILTER[filterKey]}
            onClick={() => dispatch(setFilter(VISIBILITY_FILTER[filterKey]))}
          >
            {VISIBILITY_FILTER[filterKey]}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default FilterTask;
