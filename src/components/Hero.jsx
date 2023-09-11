import { Link } from "react-router-dom"


const Hero = () => {
    return (
        <div className="max-w-lg h-screen mx-auto mt-32">
            <div className="mt-12">
                <h1 className="font-titulos pb-4 text-textos font-semibold text-5xl">Easy Notes</h1>
            </div>
            <div className="flex flex-col justify-around">
                <div className="mt-6 text-textos text-sm w-3/5 p-2 mx-auto shadow-lg shadow-secundario font-titulos font-medium text-left max-w-sm bg-verdeClaro">
                    <p>Easy Notes es tu mejor opción para guardar y organizar eficientemente tus ideas, pensamientos y tareas importantes.</p>
                </div>
                <div className="mt-6 text-textos text-sm w-3/5 p-2 mx-auto shadow-lg shadow-secundario font-titulos font-medium text-left max-w-sm bg-verdeClaro">
                    <p>Con una interfaz muy intuitiva y poderosas herramientas de organización, Easy Notes ayuda a que siempre tengas tus notas y tareas cerca de tu alcance.</p>
                </div>
            </div>
            <Link to='/crear-cuenta' className="flex justify-end m-12 p-2 px-3 w-fit mx-auto text-blanco font-titulos font-regular bg-textos border-textos border-2 rounded-lg hover:bg-blanco hover:text-textos duration-200">Crear Cuenta</Link>
        </div>
    )
}

export default Hero
