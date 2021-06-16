import React from "react";
import { useDispatch } from "react-redux";

import "./TodoItem.css";
import { toggleComplete, deleteTodo } from "../features/todoSlice";

const TodoItem = ({ todo, id, completed }) => {
  const dispatch = useDispatch();

  const handleCompletedClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li className="TodoList">
      <input
        onChange={handleCompletedClick}
        type="checkbox"
        id="checkbox"
        checked={completed}
      ></input>
      <h1 id={id} className="list-item">
        {todo}
      </h1>
      <div className="flex-container">
        <input
          onClick={handleDeleteClick}
          type="button"
          value="DEL"
          id="delete"
        />
      </div>
    </li>
  );
};

export default TodoItem;
