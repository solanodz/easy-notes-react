/* eslint-disable react/prop-types */
import { Button } from '@nextui-org/react';
import { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }

    return (
        <div className='mx-2' onSubmit={handleSubmit}>
            <form className='w-full flex flex-row h-fit mb-12 mt-6'>
                <input onChange={(e) => setValue(e.target.value)} value={value} type="text" className='border-b-2 border-verdeOscuro px-2 py-1 m-2 placeholder:italic w-full' placeholder='Editar tarea' />
                <Button type="submit" className=" font-medium bg-verdeOscuro text-blanco w-fit mx-auto rounded-md hover:bg-blanco border-2 border-verdeOscuro hover:text-verdeOscuro">
                    Editar
                </Button>
            </form>
        </div>
    )
}

export default EditTodoForm
