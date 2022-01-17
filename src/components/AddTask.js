import React, { useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todosActions";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          value={task}
          placeholder="Add A Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          onClick={() => {
            dispatch(addTodo(task));
            setTask("");
          }}
        >
         Add
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddTask;
