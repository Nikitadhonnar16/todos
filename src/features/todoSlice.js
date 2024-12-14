import { createSlice } from "@reduxjs/toolkit";

export const todoSlice= createSlice({
  name: 'todo',
    initialState: {
        todos: JSON.parse(localStorage.getItem('todos'))||[],
        error: null,
        loading:null,
        todos:[]
  },
  reducers: {
    addTodos: (state, action) => {
      console.log("payload", action.payload);
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos))
    
    }
  }
    // extraReducers: (builder) => {
        
    // }
})

export const {addTodos  } = todoSlice.actions

export default todoSlice.reducer