import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const TodoList = () => {
    const [id, setid] = useState('');
  const todos = useSelector((state) => state.app.todos[0])
console.log("****",todos);

    const handleEdit = (id) =>
    {
        setid(id)
    }
    
  return (
      <div className='w-4/5 mx-auto'>
          <h5>Todo List</h5>
<div className='flex'>
<button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"></button>
<button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"></button>
<button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"></button>
          </div>
          

    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Todos List
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                    SLNo
                </th>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Due Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Tags
                          </th>
                           <th scope="col" class="px-6 py-3">
                    Priority
                          </th>
                           <th scope="col" class="px-6 py-3">
                    Completed Flag
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                           <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {todos.id || ""}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {todos.input || ""}
                </th>
                <td class="px-6 py-4">
                 {todos.discription || ""}

                </td>
                <td class="px-6 py-4">
                {todos.date || ""}

                </td>
                <td class="px-6 py-4">
                     {todos.date || ""}
                          </td>
                           <td class="px-6 py-4">
                     {todos.tags || ""}
                          </td>
                           <td class="px-6 py-4">
                      {todos.flag || ""}
                </td>
                <td class="px-6 py-4 text-right">
                    <Link to='/edittodo' onClick={()=>handleEdit(todos.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                </td>
            </tr>
          
           
        </tbody>
    </table>
</div>


          
    </div>
  )
}

export default TodoList
