import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
    return (
        <div className='py-2 px-3 m-2 bg-negro border-2  border-gris text-blanco rounded-md' >
            <Link Link to={`/edit-note/${note.id}`}>
                <p className='text-gris pb-2 text-sm text-right'>{note.date}</p>
                <h3 className='text-xl w-full font-medium text-left'>{note.title.length > 50 ? (note.title.substr(0, 50)) + '...' : note.title}</h3>
            </Link >
        </div >
    )
}

export default NoteItem
