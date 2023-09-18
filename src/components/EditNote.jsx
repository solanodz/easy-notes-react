import { faArrowLeftLong, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ComponenteFecha, ComponenteTiempo } from './FechaHora'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

const EditNote = ({ notes, setNotes }) => {
    const { id } = useParams()
    const note = notes.find((item) => item.id == id);
    const date = <ComponenteFecha />
    const time = <ComponenteTiempo />
    const navigate = useNavigate();

    const [title, setTitle] = useState(note ? note.title : '');
    const [description, setDescription] = useState(note ? note.description : '');

    const handleForm = async (e) => {
        e.preventDefault();

        if (title && description && note) {
            const newNote = { ...note, title, description, date }

            try {
                await updateDoc(doc(db, 'notes', id), { title: 'Updated Title' });
                const newNotes = notes.map((item => (item.id == id) ? item = newNote : item))

                setNotes(newNotes)

                // redirect to Notes
                navigate('/notes')
            } catch (error) {
                console.error('Ocurrio un error al intentar editar la nota: ', error)
            }
        }
    }

    const handleDelete = () => {
        const newNotes = notes.filter(item => item.id != id)
        setNotes(newNotes)
        navigate('/notes')
    }

    return (
        <div className='mt-32 mx-2'>
            <header className='flex justify-between w-full'>
                <Link to='/notes'><FontAwesomeIcon className='bg-gris text-blanco p-3 rounded-md m-2' icon={faArrowLeftLong} /></Link>

                <div className='m-1 items-center flex'>
                    <Button
                        type="submit"
                        onClick={handleForm}
                        className=" font-medium bg-celeste text-blanco m-1 rounded-md hover:bg-negro border-2 border-celeste hover:text-celeste"
                    >
                        Guardar
                    </Button>
                    <Button
                        type='sumit'
                        onClick={handleDelete}
                        className=" font-medium bg-rojo text-blanco w-fit m-1 rounded-md hover:bg-negro border-2 border-rojo hover:text-rojo"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            </header>
            <form action="" className='flex flex-col text-blanco' onSubmit={handleForm}>
                <textarea
                    className='bg-negro h-full text-2xl p-2 outline-none mt-12 rounded-md m-2'
                    type="text"
                    placeholder='Titulo'
                    cols='30'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    name=""
                    className='bg-negro text-sm font-light px-2 pt-1 outline-none rounded-md m-2'
                    id=""
                    cols="30"
                    rows="10"
                    placeholder='Describe tu nota...'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </form>
        </div>
    )
}

export default EditNote
