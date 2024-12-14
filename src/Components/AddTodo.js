import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../features/todoSlice';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevValue) => ({
      ...prevValue,
      [id]: value
    }));
  }

  const handleSubmit = () => {
    dispatch(addTodos(formData))
    navigate('/')
  }

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <h5 className='text-[30px] text-teal-600 font-bold'>Add To Do</h5>

        <div className="mt-7">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            SLNo
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="id"
            className="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-7">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Title :
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="input"
            className="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Description :
          </label>
          <input
            type="text"
            id="discription"
            onChange={handleChange}
            className="block w-full p-4 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Due Date :
          </label>
          <input
            type="date"
            id="date"
            onChange={handleChange}
            className="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Tags :
          </label>
          <input
            type="text"
            id="tags"
            onChange={handleChange}
            className="block w-full p-4 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-white-900 dark:text-gray">
            Priority
          </label>
          <select
            id="Priority"
            onChange={handleChange}
            className="bg-white-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Choose a priority</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Completed Flag :
          </label>
          <input
            type="text"
            id="flag"
            onChange={handleChange}
            className="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="focus:outline-none mt-6 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
