/* eslint-disable react/prop-types */

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'


const ToDo = ({ task, toggleComplete, deleteTodo, editTodo }) => {

    const fecha = new Date()
    const [horaCreacion, setHoraCreacion] = useState('');

    useEffect(() => {
        const hora = new Date(task.createdAt).toLocaleTimeString();
        setHoraCreacion(hora);
    }, [task.createdAt]);

    return (
        <div className='font-textos font-regular m-2  bg-verdeClaro rounded-md items-center'>
            <div className='flex flex-row mx-2 my-1 px-2 pt-2 justify-between'>
                <p
                    onClick={() => toggleComplete(task.id)}
                    className={`text-left text-md ${task.completed ? 'line-through text-secundario' : ""}`}
                >
                    {task.task}</p>
                <div className=''>
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        size="lg"
                        className='p-1 mx-2 text-verdeOscuro cursor-pointer hover:text-textos hover:scale-110   duration-200'
                        onClick={() => editTodo(task.id)}
                    />
                    <FontAwesomeIcon
                        icon={faTrash}
                        size="lg"
                        className='p-1 mx-2 text-verdeOscuro cursor-pointer hover:text-textos hover:scale-110   duration-200'
                        onClick={() => deleteTodo(task.id)}
                    />
                </div>
            </div>
            <div className='flex flex-row border-t-2 mx-3 border-verdeOscuro'>
                <p className='mr-2 text-sm text-verdeOscuro font-titulos pb-1'>{fecha.toLocaleDateString()}</p>
                <p className='mx-2 text-sm text-verdeOscuro font-titulos pb-1'>{horaCreacion}</p>
            </div>
        </div>
    )
}

export default ToDo
