import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

export default function TodoInput() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = e => setNewTodo(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    // edge case
    if (newTodo === "" || !newTodo.replace(/\s/g, "")) {
      setNewTodo("");
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.ceil(Math.random() * 99999),
        label: newTodo
      }
    });

    setNewTodo("");
  };

  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">TODO</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="todo__input"
          onChange={handleChange}
          value={newTodo}
          type="text"
          placeholder="Enter your task"
          aria-label="todo"
          aria-describedby="basic-addon1"
        />
        <Button onClick={handleSubmit} type="submit">
          <i class="fas fa-plus" />
        </Button>
      </InputGroup>
    </Form>
  );
}
