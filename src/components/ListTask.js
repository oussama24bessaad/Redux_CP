import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

import selector from "../selector";
import Task from "./Task";

const ListTask = () => {
  const { todos, filterReducer } = useSelector((state) => state);
  const todosFilter = selector(todos, filterReducer);
  return (
    <div>
      <ListGroup>
        {todosFilter.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <Task todo={todo} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListTask;
