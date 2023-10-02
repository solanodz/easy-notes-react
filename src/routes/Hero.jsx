
import { Link } from "react-router-dom";
import logoBlanco from '../assets/blanco.png';

const Hero = () => {

    return (
        <div className='max-w-lg pb-12 h-full mx-auto duration-200'>
            <div className="pt-2 flex flex-col items-center">
                <img src={logoBlanco} alt="Logo EN." className="w-32 mx-auto duration-200" />
            </div>
            <div className="flex flex-col justify-around">
                <div className={`mt-6 text-lg w-4/5 p-6 mx-auto rounded-lg font-titulos font-light text-left max-w-sm bg-gradient-to-tr from-celesteClaro to-negro duration-200`}>
                    <p className="text-blanco">En <span className='text-celeste duration-200'>Easy Notes</span> guarda y organiza eficientemente tus ideas, pensamientos y tareas importantes.</p>
                </div>
                <div className={`mt-6 text-lg w-4/5 p-6 mx-auto shadow-lg rounded-lg font-titulos font-light text-left max-w-sm bg-gradient-to-tr from-celesteClaro to-negro duration-200`}>
                    <p className="text-blanco">Con una interfaz muy intuitiva y poderosas herramientas de organización, <span className='text-celeste duration-200'>Easy Notes</span> ayuda a que siempre tengas tus notas y tareas cerca de tu alcance.</p>
                </div>
            </div>
            <Link to='/crear-cuenta' className="flex m-12 p-2 px-3 w-fit mx-auto text-negro font-titulos font-regular bg-blanco border-2 border-blanco rounded-lg hover:bg-negro hover:text-blanco duration-200">Crear Cuenta</Link>
        </div>
    )
}

export default Hero;

