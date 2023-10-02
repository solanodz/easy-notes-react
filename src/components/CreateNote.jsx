/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'
import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'

const CreateNote = ({ setNotes }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [noteId, setNoteId] = useState(null);  // Nuevo estado para almacenar el ID del documento
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Obtén la fecha y hora actual
        const createdAt = new Date();

        // Guarda la nota con la fecha y hora actual
        if (title && description) {
            const note = { title, description, createdAt };

            try {
                const docRef = await addDoc(collection(db, 'notes'), note);
                const noteWithId = { ...note, id: docRef.id };
                setNotes((prevNotes) => [noteWithId, ...prevNotes]);

                // Guarda el ID generado para este documento
                setNoteId(docRef.id);

                // Limpia los campos de entrada
                setTitle('');
                setDescription('');
                // redirect to My Notes
                navigate('/notes');
            } catch (error) {
                console.error('Error adding note to Firestore: ', error);
            }
        }
    }

    return (
        <div className='mt-32 mx-2'>
            <h1 className="font-titulos pt-12 pb-4 text-blanco font-semibold text-4xl">Crear Nota</h1>
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
            <form action="" className='flex flex-col text-blanco' onSubmit={handleSubmit}>
                <input
                    className='bg-negro h-full text-2xl p-2 outline-none mt-12 rounded-md m-2'
                    type="text"
                    placeholder='Titulo'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    name=""
                    className='bg-negro text-sm font-light px-2 pt-1 outline-none rounded-md m-2'
                    placeholder='Descripcion de la nota...'
                    id=""
                    cols="100"
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </form>
        </div >
    )
}
export default CreateNote
