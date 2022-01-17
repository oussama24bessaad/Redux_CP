import React, { useEffect, useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTodo, toggleTodo } from "../redux/actions/todosActions";

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [updated, setUpdated] = useState("");
  const [cheked, setCheked] = useState(false);
  useEffect(() => {
    setCheked(todo.isDone);
  }, [todo]);
  
  return (
    <div className="d-flex justify-content-between align-items-center">
      {editable ? (
        <InputGroup>
          <FormControl
            value={updated}
            placeholder={todo.description}
            onChange={(e) => {
              setUpdated(e.target.value);
            }}
          />
        </InputGroup>
      ) : (
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
                      value={updated}

            type="checkbox"
            label={todo.description}
            id={todo.id}
            onChange={() => {
              dispatch(toggleTodo(todo.id));
            }}
            checked={cheked}
          />

        </Form.Group>
      )}
      <Button
        variant={editable ? "secondary" : "primary"}
        onClick={() => {
          editable && dispatch(editTodo({ ...todo, description: updated }));
          setEditable(!editable);
          setUpdated("");
        }}
      >
        {editable ? "Update" : "Edit"}
      </Button>
    </div>
  );
};

export default Task;
