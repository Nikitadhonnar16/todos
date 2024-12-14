import { createSlice } from "@reduxjs/toolkit";

export const todoSlice= createSlice({
  name: 'todo',
    initialState: {
        todos: JSON.parse(localStorage.getItem('todos'))||[],
        error: null,
        loading:null,
      
  },
  reducers: {
    addTodos: (state, action) => {
      console.log("payload", action.payload);
      console.log("todos state",state.todos);
      
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos))
    
    },

     DeleteTodo: (state, action) => {
            console.log("id", action.payload);
            console.log("###",state.todos);
            
      const deleteData=  state.todos.filter((cur, id) => (
          cur.id !== action.payload
      ))
       state.todos=deleteData
    console.log("delete",deleteData);
       localStorage.setItem('todos', JSON.stringify(deleteData))

    },
     EditTodo: (state, action) => {
       
    
    }
  }
    // extraReducers: (builder) => {
        
    // }
})

export const {addTodos, DeleteTodo,EditTodo  } = todoSlice.actions

export default todoSlice.reducer