import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from '../assets/blanco.png'
import "../App.css"
import logoBlanco from '../assets/blanco.png';


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div
            className={`z-40 fixed bg-negro backdrop-blur-sm bg-opacity-75 top-0 left-0 right-0 bg-white flex justify-between pt-3 flex-col items-center ${menuOpen ? "border-b-2" : "hidden:border-b-2"
                }`}
        >

            <div className="flex flex-row justify-around">
                <Link to="/"><img src={logoBlanco} alt="Logo EN." className="w-24" /></Link>
            </div>
            <button className=" p-2 mx-auto" onClick={toggleMenu}>
                {menuOpen ? (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-blanco text-xl cursor-pointer"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-blanco text-2xl cursor-pointer"
                        onClick={toggleMenu}
                    />
                )}
            </button>
            <div
                className={`bg-transparent p-6 rounded-lg shadow-lg flex flex-col lg:flex-row ${menuOpen ? "flex" : "hidden"} w-full flex- justify-center`}
            >
                <ul className="text-2xl  items-center sm:text-lg flex-col font-titulos font-semibold text-blanco flex justify-between">
                    {/* <li onClick={() => setMenuOpen(false)} className="mx-auto px-16 sm:px-12 w-max py-1 rounded-lg text-center my-8 sm:my-4 hover:text-celeste duration-200">
                        <Link to="/dashboard">Dashboard</Link>
                    </li> */}
                    <li onClick={() => setMenuOpen(false)} className="mx-auto px-16 sm:px-12 w-max py-1 rounded-lg text-center my-8 sm:my-4 hover:text-celeste duration-200">
                        <Link to="/create-note">Crear Nota</Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)} className="mx-auto px-16 sm:px-12 w-max py-1 rounded-lg text-center my-8 sm:my-4 hover:text-celeste duration-200">
                        <Link to="/notes">Mis Notas</Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)} className="mx-auto px-16 sm:px-12 w-max py-1 rounded-lg text-center my-8 sm:my-4 hover:text-celeste duration-200">
                        <Link to="/to-do">To-do</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
