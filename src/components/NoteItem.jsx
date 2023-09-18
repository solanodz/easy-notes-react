
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {

    const createdAt = new Date(note.createdAt);
    const formattedDateTime = createdAt.toLocaleString();
    return (
        <Link to={`/edit-note/${note.id}`} className=' py-2 px-3 m-2  border-2  border-gris text-blanco rounded-md bg-black hover:bg-negro hover:text-celeste duration-200 '>
            <p className='text-celesteClaro pb-2 text-xs font-medium text-right'>{formattedDateTime}</p>
            <h3 className='text-md w-full font-semibold text-left'>{note.title.length > 35 ? (note.title.substr(0, 35)) + '...' : note.title}</h3>
        </Link >
    )
}

export default NoteItem
