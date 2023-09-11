/* eslint-disable react/prop-types */
import { Button } from '@nextui-org/react';
import { useState } from 'react';

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
            <h1 className="font-titulos pb-4 text-textos font-semibold text-4xl">To-do</h1>
            <form className='w-full flex flex-row h-fit mb-12 mt-6'>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    className='border-b-2 border-verdeOscuro px-2 py-1 m-2 placeholder:italic placeholder:text-sm w-full'
                    placeholder='Agrega las tareas de hoy'
                />
                <Button
                    type="submit"
                    className=" font-medium bg-verdeOscuro text-blanco w-fit mx-auto rounded-md hover:bg-blanco border-2 border-verdeOscuro hover:text-verdeOscuro"
                >
                    Agregar
                </Button>
            </form>
        </div>
    );
};

export default TodoForm;

