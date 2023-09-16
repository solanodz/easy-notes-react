import { faArrowLeftLong, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const EditNote = () => {
    return (
        <div className='mt-32 mx-2'>
            <header className='flex justify-between w-full'>
                <Link to='/edit-note'><FontAwesomeIcon className='bg-gris text-blanco p-3 rounded-md m-2' icon={faArrowLeftLong} /></Link>

                <div className='m-1 items-center flex'>
                    <Button
                        type="submit"
                        className=" font-medium bg-celeste text-blanco m-1 rounded-md hover:bg-negro border-2 border-celeste hover:text-celeste"
                    >
                        Guardar
                    </Button>
                    <Button
                        type='sumit'
                        className=" font-medium bg-rojo text-blanco w-fit m-1 rounded-md hover:bg-negro border-2 border-rojo hover:text-rojo"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            </header>
            <form action="" className='flex flex-col'>
                <input className='bg-gris p-2 rounded-md m-2' type="text" placeholder='Titulo' />
                <textarea name="" className='bg-gris p-2 rounded-md m-2' id="" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}

export default EditNote
