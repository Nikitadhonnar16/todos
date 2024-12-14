import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditTodos } from '../features/todoSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditTodo = () => {
  const [singleEditData, setSingleEditData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => state.app.todos);
  
  useEffect(() => {
    const filterData = todos.filter((cur) => cur.id === id);
    if (filterData.length > 0) {
      setSingleEditData(filterData[0]);
    }
  }, [todos, id]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { id, value } = event.target;

    setSingleEditData((prevalue) => ({
      ...prevalue,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    // Prepare the updated todo object
    const updatedTodo = {
      input: singleEditData.input,
      discription: singleEditData.discription,
      date: singleEditData.date,
      tags: singleEditData.tags,
      Priority: singleEditData.Priority,
      flag: singleEditData.flag,
    };

    // Dispatch the action to update the todo
    dispatch(EditTodos({ id: singleEditData.id, updatedTodo }));
    navigate('/');
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <h5>Edit To Do</h5>

        <div className="mt-7">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            SLno
          </label>
          <input
            value={singleEditData.id}
            type="text"
            onChange={handleChange}
            id="id"
            className="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mt-7">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Input :
          </label>
          <input
            type="text"
            value={singleEditData.input}
            onChange={handleChange}
            id="input"
            className="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Description :
          </label>
          <input
            type="text"
            value={singleEditData.discription}
            id="discription"
            onChange={handleChange}
            className="block w-full p-4 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="">
          <label className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Due Date :
          </label>
          <input
            type="date"
            id="date"
            value={singleEditData.date}
            onChange={handleChange}
            className="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Tags :
          </label>
          <input
            type="text"
            id="tags"
            value={singleEditData.tags}
            onChange={handleChange}
            className="block w-full p-4 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-white-900 dark:text-gray">
            Priority
          </label>
          <select
            id="Priority"
            value={singleEditData.Priority}
            onChange={handleChange}
            className="bg-white-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Choose a priority</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">
            Completed Flag :
          </label>
          <input
            type="text"
            value={singleEditData.flag}
            onChange={handleChange}
            id="flag"
            className="block w-full p-2 text-black-900 border border-black-300 rounded-lg bg-black-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Edit Todo
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
