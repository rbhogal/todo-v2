import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // receives action
      const newTodo = {
        todo: action.payload,
        id: Date.now(),
        completed: false,
      };
      state.push(newTodo); // push the todo object to the state array and saves it there, any components that rely on the state get updated with new state

      // This is the same thing, but object is not assigned to a variable
      // state.push({
      //     todo: action.payload,
      //     id: Date.now(),
      //     completed: false
      // })
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;

      const todoItem = document.getElementById(state[index].id);

      state[index].completed
        ? todoItem.classList.add("completed")
        : todoItem.classList.remove("completed");
    },
    deleteTodo: (state, action) => {
      return (state = state.filter((todo) => todo.id !== action.payload.id));
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
