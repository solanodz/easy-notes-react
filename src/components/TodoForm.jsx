/* eslint-disable react/prop-types */
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { ComponenteFecha, ComponenteTiempo } from './FechaHora';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Obtén la fecha y hora actual
        const createdAt = new Date();

        // Llama a addTodo con el texto de la tarea y la fecha de creación
        addTodo(value, createdAt);

        setValue('');
    };

    return (
        <div className='mt-32 mx-2' onSubmit={handleSubmit}>
            <h1 className="font-titulos pb-4 text-blanco font-semibold text-5xl">To-do</h1>
            <div className='text-left text-sm my-6'>
                <p className='text-grisClaro text-lg'>{<ComponenteFecha />}</p>
                <p className='text-grisClaro'>{<ComponenteTiempo />}</p>
            </div>
            <form className='w-full text-blanco flex items-center flex-row h-fit mb-12 mt-6'>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    className='bg-gris rounded-md py-2 px-2 my-2 mr-2 placeholder:italic placeholder:text-sm w-full'
                    placeholder='Agrega las tareas de hoy'
                />
                <Button
                    type="submit"
                    className=" font-medium bg-celeste text-blanco w-fit mx-auto rounded-md hover:bg-blanco border-2 border-celeste hover:text-celeste"
                >
                    Agregar
                </Button>
            </form>
        </div>
    );
};

export default TodoForm;

