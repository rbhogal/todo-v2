import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice"; // reducer function

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);

    dispatch(
      addTodo(
        // reducer
        value // action payload?
      )
    );

    document.getElementById("input").value = "";
  };

  return (
    <div>
      <form className="ui massive fluid input box-shadow" onSubmit={onSubmit}>
        <input
          id="input"
          type="text"
          placeholder="What do you need to do?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
