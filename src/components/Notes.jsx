/* eslint-disable react/prop-types */
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import NoteItem from './NoteItem'
import { useEffect, useState } from 'react';
import logoBlanco from '../assets/blanco.png';
import logoNegro from '../assets/negro.png';

const Notes = ({ notes }) => {

    const [darkMode, setDarkMode] = useState(true);
    const onToggleDarkMode = (isDarkMode) => {
        setDarkMode(isDarkMode);
    };
    const logoTheme = darkMode ? logoBlanco : logoNegro;
    const bgTheme = darkMode ? "bg-negro text-blanco" : "bg-blanco text-negro";

    const [text, setText] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if (note.title.toLowerCase().match(text.toLowerCase())) {
                return note;
            }
        }))
    }

    useEffect(handleSearch, [text])

    return (
        <div className='mt-32 mx-2'>
            <header>
                <h1 className="font-titulos pt-12 pb-8 text-blanco font-semibold text-4xl">Mis Notas</h1>
                <div className='flex flex-row items-center'>
                    <input
                        value={text}
                        onChange={(e) => { setText(e.target.value); handleSearch(); }}
                        autoFocus
                        placeholder='Busca una nota'
                        type="text"
                        className='bg-negro outline-none text-sm text-blanco border-b-2 border-gris py-2 px-2 my-2 ml-3 placeholder:italic placeholder:text-sm w-full'
                    />
                    <button className='bg-negro px-2 mr-6 text-blanco text-lg '><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <Link to='/create-note'><FontAwesomeIcon className='text-blanco text-lg p-3 mx-2 bg-celeste rounded-full' icon={faPlus} /></Link>
                </div>
            </header>
            <div className='grid grid-cols-2 w-full'>
                {
                    filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
                }
            </div>
        </div>
    )
}

export default Notes