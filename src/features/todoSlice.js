import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    error: null,
    loading: null,
  },
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    DeleteTodo: (state, action) => {
      const deleteData = state.todos.filter((cur) => cur.id !== action.payload);
      state.todos = deleteData;
      localStorage.setItem('todos', JSON.stringify(deleteData));
    },

    EditTodos: (state, action) => {
      const { id, updatedTodo } = action.payload; 
      const index = state.todos.findIndex((todo) => todo.id === id);
      
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...updatedTodo };
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    }
  }
});

export const { addTodos, DeleteTodo, EditTodos } = todoSlice.actions;

export default todoSlice.reducer;
