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
            <form className='w-full flex flex-row items-center h-fit mb-12 mt-6'>
                <input onChange={(e) => setValue(e.target.value)} value={value} type="text" className='bg-gris text-blanco outline-none rounded-md py-2 px-2 my-2 mr-2 placeholder:italic placeholder:text-sm w-full' placeholder='Editar tarea' />
                <Button type="submit" className=" font-medium bg-celeste text-blanco w-fit mx-auto rounded-md hover:bg-negro border-2 border-celeste hover:text-celeste">
                    Editar
                </Button>
            </form>
        </div>
    )
}

export default EditTodoForm
