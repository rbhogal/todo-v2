import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todoSlice";

const TodoForm = () => {
    const [value, setValue] = useState()
    const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
        addTodo({
            title: value
        })
    )
  } 
    
  return (
    <div>
      <form className="ui massive fluid input box-shadow" onSubmit={onSubmit}>
        <input type="text" placeholder="What do you need to do?" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
    </div>
  );
};

export default TodoForm;
