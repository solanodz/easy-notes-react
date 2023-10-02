import { useState } from "react";
import { Link } from "react-router-dom";
import logoBlanco from '../assets/blanco.png';
import logoNegro from '../assets/negro.png';
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const Hero = () => {
    const [darkMode, setDarkMode] = useState(true);

    const onToggleDarkMode = (isDarkMode) => {
        setDarkMode(isDarkMode);
    };

    const logoTheme = darkMode ? logoBlanco : logoNegro;
    const bgTheme = darkMode ? "bg-negro text-blanco" : "bg-blanco text-negro";


    return (
        <div className={`max-w-lg pb-12 h-full mx-auto ${bgTheme}`}>
            <div className="pt-2 flex flex-col items-center">
                <DarkModeToggle darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
                <img src={logoTheme} alt="Logo EN." className="w-32 mx-auto" />
            </div>
            <div className="flex flex-col justify-around">
                <div className={`mt-6 text-lg w-4/5 p-6 mx-auto rounded-lg font-titulos font-light text-left max-w-sm bg-gradient-to-tr from-celeste to-${darkMode ? 'negro' : 'blanco'}`}>
                    <p>En <span className={`text-blanco ${darkMode ? 'text-celeste' : 'text-blanco'}`}>Easy Notes</span> guarda y organiza eficientemente tus ideas, pensamientos y tareas importantes.</p>
                </div>
                <div className={`mt-6 text-lg w-4/5 p-6 mx-auto shadow-lg rounded-lg font-titulos font-light text-left max-w-sm bg-gradient-to-tr from-celeste to-${darkMode ? 'negro' : 'blanco'}`}>
                    <p>Con una interfaz muy intuitiva y poderosas herramientas de organización, <span className={`text-blanco ${darkMode ? 'text-celeste' : 'text-blanco'}`}>Easy Notes</span> ayuda a que siempre tengas tus notas y tareas cerca de tu alcance.</p>
                </div>
            </div>
            <Link to='/crear-cuenta' className={`flex justify-end mt-8 p-2 px-3 w-fit mx-auto text-${darkMode ? 'negro' : 'blanco'} font-titulos font-regular bg-${darkMode ? 'blanco' : 'negro'} border-${darkMode ? 'blanco' : 'negro'} border-2 rounded-lg hover:bg-${darkMode ? 'negro' : 'blanco'} hover:text-${darkMode ? 'blanco' : 'negro'} duration-200`}>Crear Cuenta</Link>
        </div>
    )
}

export default Hero;

