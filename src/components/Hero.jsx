import { Link } from "react-router-dom"


const Hero = () => {
    return (
        <div className="max-w-lg h-screen mx-auto">
            <div className="mt-12">
                <h1 className="font-titulos pb-4 text-negro font-semibold text-5xl">Easy Notes</h1>
            </div>
            <div className="flex flex-col justify-around">
                <div className="mt-6 text-blanco text-lg w-3/5 p-2 mx-auto shadow-lg shadow-celesteClaro font-titulos font-medium text-left max-w-sm bg-celeste">
                    <p>Guarda y organiza eficientemente tus ideas, pensamientos y tareas importantes.</p>
                </div>
                <div className="mt-6 text-blanco text-lg w-3/5 p-2 mx-auto shadow-lg shadow-celesteClaro font-titulos font-medium text-left max-w-sm bg-celeste">
                    <p>Con una interfaz muy intuitiva y poderosas herramientas de organización, Easy Notes ayuda a que siempre tengas tus notas y tareas cerca de tu alcance.</p>
                </div>
            </div>
            <Link to='/crear-cuenta' className="flex justify-end m-12 p-2 px-3 w-fit mx-auto text-negro font-titulos font-regular bg-blanco border-blanco border-2 rounded-lg hover:bg-negro hover:text-blanco duration-200">Crear Cuenta</Link>
        </div>
    )
}

export default Hero
