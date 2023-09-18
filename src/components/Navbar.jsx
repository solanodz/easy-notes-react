import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div
            className={`z-40 fixed bg-negro top-0 left-0 right-0 bg-white flex justify-between pt-3 flex-col items-center md:justify-center border-celeste ${menuOpen ? "border-b-2" : "hidden:border-b-2"
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
                className={`flex flex-col lg:flex-row ${menuOpen ? "flex" : "hidden"} bg-white w-full`}
            >
                <ul className=" flex-col font-titulos font-semibold text-blanco text-sm flex justify-between">
                    <li className="mx-auto px-12 py-1 rounded-lg w-full text-center my-8 text-3xl hover:text-celeste duration-200">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="mx-auto px-12 py-1 rounded-lg w-full text-center my-8 text-3xl hover:text-celeste duration-200">
                        <Link to="/create-note">Crear Nota</Link>
                    </li>
                    <li className="mx-auto px-12 py-1 rounded-lg w-full text-center my-8 text-3xl hover:text-celeste duration-200">
                        <Link to="notes">Mis Notas</Link>
                    </li>
                    <li className="mx-auto px-12 py-1 rounded-lg w-full text-center my-8 text-3xl hover:text-celeste duration-200">
                        <Link to="to-do">To-do</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
