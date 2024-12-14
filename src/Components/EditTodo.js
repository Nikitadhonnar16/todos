import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../features/todoSlice';
import { useSelector } from 'react-redux';
const EditTodo = () => {
const [formData, setFormData]=useState({})

     const todos = useSelector((state) => state.app.todos[0])
  console.log("edittodos", todos);
  
//   useEffect(() =>
//   {
//      const filterData = todos.filter((cur, index) =>
//   {
//       cur.id==
//   }) 
// },[todos])


const dispatch = useDispatch();
  const handleChange = (event) => {
      const { id, value } = event.target;

    setFormData((prevalue) => {
      return {
        ...prevalue,              
        [id]: value
      }
    })
    }
       const HadleSubmit = () =>
       {
           console.log("NNN", formData);
           
       dispatch(addTodos(formData))
  }


  
  
  return (
    <div>         
          <form class="max-w-sm mx-auto">
        <h5>Edit To Do</h5>
        
        <div className='mt-7'>
      <label for="small-input" class="block mb-2 text-sm font-medium text-black-900 dark:text-black">SLno</label>
      <input value={formData.id} type="text" onChange={handleChange} id="id" class="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
              <div className='mt-7'>
      <label for="small-input" class="block mb-2 text-sm font-medium text-black-900 dark:text-black">Input :</label>
      <input type="text" value={formData.input} onChange={handleChange} id="input" class="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  <div class="mb-5">
      <label for="large-input" class="block mb-2 text-sm font-medium text-black-900 dark:text-black">Description :</label>
      <input type="text" value={formData.discription} id="discription" onChange={handleChange}  class="block w-full p-4 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  
    <div className=''>
      <label  class="block mb-2 text-sm font-medium text-black-900 dark:text-black">Due Date :</label>
      <input type="date" id="date" onChange={handleChange}  class="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>    </div>
              <div class="mb-5">
      <label for="large-input" class="block mb-2 text-sm font-medium text-black-900 dark:text-black">Tags :</label>
      <input type="text" id="tags" value={formData.tags} onChange={handleChange}  class="block w-full p-4 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
     <div class="mb-5">
      <label  class="block mb-2 text-sm font-medium text-white-900 dark:text-gray">Priority</label>
  <select id="Priority" value={formData.Priority} onChange={handleChange}  class="bg-white-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a priority</option>
    <option value="High">High</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
  </select>
              </div>
    <div class="mb-5">
      <label for="large-input" class="block mb-2 text-sm font-medium text-black-900 dark:text-black">Completed Flag :</label>
      <input type="text" onChange={handleChange}  id="flag" class="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              
<button onClick={HadleSubmit} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add Todo</button>
</form>

    </div>
  )
}

export default EditTodo
