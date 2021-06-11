import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        todo: action.payload,
        id: Date.now(),
        completed: false,
      };
      state.push(newTodo);

      // This is the same thing, but object is not assigned to a variable
      // state.push({
      //     todo: action.payload,
      //     id: Date.now(),
      //     completed: false
      // })
    },
  },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;