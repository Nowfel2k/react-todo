import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

import { ListGroup, Button } from "react-bootstrap";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleDelete = id =>
    dispatch({
      type: "DELETE_TODO",
      payload: id
    });

  const handleEdit = id => {
    const label = prompt("Edit todo: ");
    return dispatch({
      type: "EDIT_TODO",
      payload: {
        id,
        label
      }
    });
  };

  if (!todos || todos.length === 0) return "";

  return (
    <ul class="list-group">
      {todos.map(todo => (
        <>
          <li class="list-group-item todo__item">
            {todo?.label}

            <div>
              <Button variant="warning" onClick={() => handleEdit(todo.id)}>
                <i class="fas fa-pen" />
              </Button>
              {"  "}
              <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                <i class="far fa-trash-alt" />
              </Button>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
}
