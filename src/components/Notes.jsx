import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DummyNotes from '../DummyNotes'
import { Link } from 'react-router-dom'
import NoteItem from './NoteItem'

const Notes = ({ notes }) => {
    return (
        <div className='mt-32 mx-2'>
            <header>
                <h1 className="font-titulos pb-4 text-blanco font-semibold text-5xl">Notes</h1>
                <div className='flex flex-row'>
                    {/* <input type="text"  className='bg-gris text-2xl rounded-md py-2 px-2 my-2 mr-2 placeholder:italic placeholder:text-2xl w-full' /> */}
                    <button className='bg-gris p-2 px-3 rounded-md text-blanco'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
            </header>
            <div className='grid grid-cols-2 w-full'>
                {
                    notes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
            <Link to='/create-note'><FontAwesomeIcon className='text-blanco p-3 bg-gris rounded-md' icon={faPlus} /></Link>
        </div>
    )
}

export default Notes
