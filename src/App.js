import React from "react";
import "./style.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function App() {
  return (
    <div>
      <hr />
      <h1>Todo App</h1>

      <hr />
      <TodoInput />
      <TodoList />
    </div>
  );
}
