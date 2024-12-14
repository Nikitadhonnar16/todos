import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteTodo } from '../features/todoSlice';

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

const TodoList = () => {
    const todos = useSelector((state) => state.app.todos);
    const dispatch = useDispatch();

    const today = new Date().toISOString().split('T')[0];

    const isCompleted = (task) => task.flag === 'Completed';

    // Filter today's tasks
    const todaysTodos = todos.filter((todo) => todo.date === today && !isCompleted(todo))
                               .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    // Filter past incomplete tasks (tasks that are past due and not completed)
    const pastIncompleteTodos = todos.filter((todo) => todo.date < today && !isCompleted(todo))
                                      .sort((a, b) => new Date(b.date) - new Date(a.date) || priorityOrder[a.priority] - priorityOrder[b.priority]);

    // Filter completed tasks
    const completedTodos = todos.filter((todo) => isCompleted(todo))
                                 .sort((a, b) => new Date(b.date) - new Date(a.date));

    const handleEdit = (id) => {
    };

    const handleDelete = (id) => {
        dispatch(DeleteTodo(id));
    };

    return (
        <div className='w-4/5 mx-auto'>
            <h5 className='text-4xl font-extrabold text-teal-600 mb-4 mt-4'>
                Todo List
            </h5>
            <div className='flex justify-end'>
                <Link to="/addtodo">
                    <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Add Todo
                    </button>
                </Link>
            </div>

            {/* Today's To-Dos */}
            <div className="relative overflow-x-auto shadow-md mt-5">
                <caption className="pt-3 pl-3 w-[160px] rounded-t-md text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Today's To-Dos
                </caption>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">SLNo</th>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Due Date</th>
                            <th scope="col" className="px-6 py-3">Priority</th>
                            <th scope="col" className="px-6 py-3">Tags</th>
                            <th scope="col" className="px-6 py-3">Completed Flag</th>
                            <th scope="col" className="px-6 py-3">Edit</th>
                            <th scope="col" className="px-6 py-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todaysTodos.map((cur, i) => (
                            <tr key={cur.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{cur.id}</td>
                                <td className="px-6 py-4">{cur.input}</td>
                                <td className="px-6 py-4">{cur.discription}</td>
                                <td className="px-6 py-4">{cur.date}</td>
                                <td className="px-6 py-4">{cur.Priority}</td>
                                <td className="px-6 py-4">{cur.tags}</td> {/* Added Tags */}
                                <td className="px-6 py-4">{cur.flag}</td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/edittodo/${cur.id}`} onClick={() => handleEdit(cur.id)} className="font-medium text-blue-600 hover:underline">Edit</Link>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to='' onClick={() => handleDelete(cur.id)} className="font-medium text-red-600 hover:underline">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Past Incomplete To-Dos */}
            <div className="relative overflow-x-auto shadow-md mt-5">
                <caption className="pt-3 pl-3 w-[220px] rounded-t-md text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Past Incomplete To-Dos
                </caption>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">SLNo</th>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Due Date</th>
                            <th scope="col" className="px-6 py-3">Priority</th>
                            <th scope="col" className="px-6 py-3">Tags</th> {/* Added Tags */}
                            <th scope="col" className="px-6 py-3">Completed Flag</th>
                            <th scope="col" className="px-6 py-3">Edit</th>
                            <th scope="col" className="px-6 py-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pastIncompleteTodos.map((cur, i) => (
                            <tr key={cur.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{cur.id}</td>
                                <td className="px-6 py-4">{cur.input}</td>
                                <td className="px-6 py-4">{cur.discription}</td>
                                <td className="px-6 py-4">{cur.date}</td>
                                <td className="px-6 py-4">{cur.Priority}</td>
                                <td className="px-6 py-4">{cur.tags}</td> {/* Added Tags */}
                                <td className="px-6 py-4">{cur.flag}</td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/edittodo/${cur.id}`} onClick={() => handleEdit(cur.id)} className="font-medium text-blue-600 hover:underline">Edit</Link>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to='' onClick={() => handleDelete(cur.id)} className="font-medium text-red-600 hover:underline">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Completed To-Dos */}
            <div className="relative overflow-x-auto shadow-md mt-5">
                <caption className="pt-3 pl-3 w-[190px] rounded-t-md text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Completed To-Dos
                </caption>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">SLNo</th>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Due Date</th>
                            <th scope="col" className="px-6 py-3">Priority</th>
                            <th scope="col" className="px-6 py-3">Tags</th> {/* Added Tags */}
                            <th scope="col" className="px-6 py-3">Completed Flag</th>
                            <th scope="col" className="px-6 py-3">Edit</th>
                            <th scope="col" className="px-6 py-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedTodos.map((cur, i) => (
                            <tr key={cur.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{cur.id}</td>
                                <td className="px-6 py-4">{cur.input}</td>
                                <td className="px-6 py-4">{cur.discription}</td>
                                <td className="px-6 py-4">{cur.date}</td>
                                <td className="px-6 py-4">{cur.Priority}</td>
                                <td className="px-6 py-4">{cur.tags}</td> {/* Added Tags */}
                                <td className="px-6 py-4">{cur.flag}</td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`/edittodo/${cur.id}`} onClick={() => handleEdit(cur.id)} className="font-medium text-blue-600 hover:underline">Edit</Link>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to='' onClick={() => handleDelete(cur.id)} className="font-medium text-red-600 hover:underline">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;
