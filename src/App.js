import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router,Route,Routes, Link } from 'react-router-dom';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import EditTodo from './Components/EditTodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="addtodo" element={<AddTodo />}>     
        </Route>
         <Route path="edittodo" element={<EditTodo />}>     
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
