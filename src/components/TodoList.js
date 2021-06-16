import React from "react";
import { useSelector } from "react-redux";

import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos); // array of todo objects [ {}, {} ]
    
  
  return ( 
    <ul>
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} todo={todoItem.todo} id={todoItem.id} completed={todoItem.completed}/>
      ))}
    </ul>
  );
};

export default TodoList;
