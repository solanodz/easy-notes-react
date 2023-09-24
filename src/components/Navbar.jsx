import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "../App.css"


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState('')

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setMenuAnimation(menuOpen ? "slide-out" : "slide-in")
    };


    return (
        <div
            className={`z-40 fixed bg-negro backdrop-blur-sm bg-opacity-75 top-0 left-0 right-0 bg-white flex justify-between pt-3 flex-col items-center ${menuOpen ? "border-b-2" : "hidden:border-b-2"
                }`}
        >
            <div>
                <h1 className="mx-auto font-titulos font-black text-3xl text-celeste w-fit px-2 rounded-full">
                    <Link to="/">EN.</Link>
                </h1>
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
                <ul className="text-2xl sm:flex-row items-center sm:text-lg flex-col font-titulos font-semibold text-blanco flex justify-between">
                    <li onClick={() => setMenuOpen(false)} className="mx-auto px-16 sm:px-12 w-max py-1 rounded-lg text-center my-8 sm:my-4 hover:text-celeste duration-200">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
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
