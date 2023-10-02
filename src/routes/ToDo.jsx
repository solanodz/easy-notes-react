/* eslint-disable react/prop-types */

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'


const ToDo = ({ task, toggleComplete, deleteTodo, editTodo }) => {

    const FechaCreacion = ({ createdAt }) => {

        return (
            <div className='flex flex-col text-right text-grisClaro py-1 text-xs font-titulos'>
                <p className='mx-2'>{new Date(createdAt).toLocaleDateString()}</p>
            </div>
        );
    }

    return (
        <div className='font-titulos shadow-lg p-1 bg-celesteClaro text-blanco font-regular m-2 rounded-md items-center'>

            <div className='flex flex-row mx-2 items-center my-1 px-2 py-1 justify-between'>
                <p
                    onClick={() => toggleComplete(task.id)}
                    className={`text-left cursor-pointer z-10 text-md font-medium ${task.completed ? 'line-through text-celeste' : ""}`}
                >
                    {task.task}</p>
                <div className='text-right flex flex-col items-center'>
                    <div className='flex flex-col text-right text-grisClaro py-1 text-xs font-titulos'>
                        <FechaCreacion createdAt={task.createdAt} />
                    </div>
                    <div className='flex flex-row'>
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            size="lg"
                            className='p-1 mx-1 text-celeste cursor-pointer hover:text-blanco hover:scale-110 duration-200'
                            onClick={() => editTodo(task.id)}
                        />
                        <FontAwesomeIcon
                            icon={faTrash}
                            size="lg"
                            className='p-1 mx-1 text-celeste cursor-pointer hover:text-blanco hover:scale-110 duration-200'
                            onClick={() => deleteTodo(task.id)}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ToDo