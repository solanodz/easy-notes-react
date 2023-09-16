import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { ComponenteFecha, ComponenteTiempo } from './FechaHora'

const CreateNote = ({ setNotes }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const date = ComponenteFecha();
    const hour = ComponenteTiempo();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && description) {
            const note = { id: uuid(), title, description, date, hour }
            // add this note to the note array
            setNotes(prevNotes => [note, ...prevNotes])

            // redirect to My Notes
            navigate('/notes')
        }
    }

    return (
        <div className='mt-32 mx-2'>
            <header className='flex justify-between w-full'>
                <Link to='/notes'><FontAwesomeIcon className='bg-gris text-blanco p-3 rounded-md m-2' icon={faArrowLeftLong} /></Link>
                <Button
                    type="submit"
                    onClick={handleSubmit}
                    className=" font-medium bg-celeste text-blanco m-2 rounded-md hover:bg-negro border-2 border-celeste hover:text-celeste"
                >
                    Guardar
                </Button>
            </header>
            <form action="" className='flex flex-col' onSubmit={handleSubmit}>
                <input
                    className='bg-gris text-blanco placeholder:italic placeholder:text-md p-2 rounded-md m-2'
                    type="text"
                    placeholder='Titulo'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    name=""
                    className='bg-gris text-blanco placeholder:italic placeholder:text-md p-2 rounded-md m-2'
                    placeholder='Descripcion de la nota...'
                    id=""
                    cols="30"
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </form>
        </div>
    )
}

export default CreateNote
