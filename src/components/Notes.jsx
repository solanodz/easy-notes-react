import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import NoteItem from './NoteItem'
import EditNote from './EditNote'

const Notes = ({ notes, setNotes }) => {
    return (
        <div className='mt-32 mx-2'>
            <header>
                <h1 className="font-titulos pb-4 text-blanco font-semibold text-4xl">Mis Notas</h1>
                <div className='flex flex-row items-center'>
                    <input placeholder='Busca una nota' type="text" className='bg-negro outline-none text-sm text-blanco border-b-2 border-gris py-2 px-2 my-2 ml-3 placeholder:italic placeholder:text-sm w-full' />
                    <button className='bg-negro px-2 mr-6 text-blanco text-lg '><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <Link to='/create-note'><FontAwesomeIcon className='text-blanco text-lg p-3 mx-2 bg-celeste rounded-full' icon={faPlus} /></Link>
                </div>
            </header>
            <div className='grid grid-cols-2 w-full'>
                {
                    notes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
        </div>
    )
}

export default Notes