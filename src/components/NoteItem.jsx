import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
    return (
        <div className='p-3 m-2 bg-celeste border-2  border-gris text-negro rounded-md' >
            <Link Link to={`/edit-note/${note.id}`}>
                <h3 className='text-xl w-full font-medium text-left'>{note.title.length > 50 ? (note.title.substr(0, 50)) + '...' : note.title}</h3>
                <p className='text-gris text-sm text-right'>{note.date}</p>
            </Link >
        </div >
    )
}

export default NoteItem
