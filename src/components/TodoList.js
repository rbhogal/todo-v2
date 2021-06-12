import React from "react";
import { useSelector } from "react-redux";

import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos); // array of todo objects [ {}, {} ]
    
  
  return ( 
    <div>
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} todo={todoItem.todo} />
      ))}
    </div>
  );
};

export default TodoList;
