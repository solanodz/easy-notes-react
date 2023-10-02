import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
import logoBlanco from '../assets/blanco.png';
import logoNegro from '../assets/negro.png';
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const CrearCuenta = () => {

    const [darkMode, setDarkMode] = useState(true);

    const onToggleDarkMode = (isDarkMode) => {
        setDarkMode(isDarkMode);
    };

    const logoTheme = darkMode ? logoBlanco : logoNegro;
    const bgTheme = darkMode ? "bg-negro text-blanco" : "bg-blanco text-negro";

    const notify = () => {
        toast('Cuenta creada con éxito');
    }

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [, setFormSubmitted] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            const user = await registrarUsuario(data.email, data.password);
            if (user) {
                // El usuario se ha registrado correctamente en Firebase Authentication
                // Ahora puedes hacer lo que desees, como redirigir al usuario a otra página
                setFormSubmitted(true);
                reset();
                notify();

                // redireccionar a mis notas
                navigate('/notes')

            }
        } catch (error) {
            console.error("Error registrating user", error)
            if (error.code === "auth/email-already-in-use") {
                setErrorMessage("* Ya existe un usuario registrado con este email")
            } else {
                setErrorMessage("* Ocurio un error al registrar el usuario.")
            }
        }
    };


    const registrarUsuario = async (email, password) => {
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // El usuario se ha registrado correctamente
            const user = userCredential.user;
            return user;
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            throw error; // Puedes manejar el error de la manera que desees
        }
    };

    return (
        <div className={`max-w-lg pb-12 h-full mx-auto ${bgTheme} duration-200`}>
            <div className=" flex flex-col">
                <div className="flex flex-row justify-around">
                    <Link to="/"><img src={logoTheme} alt="Logo EN." className="w-20" /></Link>
                    <DarkModeToggle darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
                </div>
                <h1 className="font-titulos pt-24 pb-4 text-celeste font-semibold text-4xl">
                    Crear Cuenta
                </h1>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                action="submit"
                className="flex flex-col w-4/5 mx-auto mb-12 font-titulos"
            >
                <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className={`bg-${darkMode ? 'negro' : 'blanco'} mt-4 p-2 font-medium text-${darkMode ? 'blanco' : 'negro'} placeholder:text-xs placeholder:italic placeholder:font-light rounded-md border border-gris placeholder-grisClaro text-sm duration-200`}
                />
                <p className="text-rojo text-xs text-left font-medium">
                    {errors.email?.type === "required" &&
                        "* debes introducir un email válido"}
                </p>
                {errorMessage && (
                    <p className="text-rojo text-xs text-left font-medium">{errorMessage}</p>
                )}
                <input
                    type="password"
                    {...register("password", {
                        minLength: 8,
                        required: {
                            value: true,
                            message: "* debes introducir una contraseña"
                        },
                    })}
                    placeholder="Crear Contraseña"
                    className={`bg-${darkMode ? 'negro' : 'blanco'} mt-4 p-2 font-medium text-${darkMode ? 'blanco' : 'negro'} placeholder:text-xs placeholder:italic placeholder:font-light rounded-md border border-gris placeholder-grisClaro text-sm duration-200`}
                />
                {errors.password && <p className="text-rojo text-xs text-left font-medium">{errors.password.message}</p>}
                <p className="text-rojo text-xs text-left font-medium">
                    {errors.password?.type === "minLength" &&
                        "* la contraseña debe tener al menos 8 caracteres"}
                </p>

                <input
                    type="password"
                    {...register("repeatPassword", {
                        required: {
                            value: true,
                            message: "* debes repetir la contraseña"
                        },
                        validate: value => value === watch('password') || '* las contraseñas no coinciden'
                    }
                    )}
                    placeholder="Repetir Contraseña"
                    className={`bg-${darkMode ? 'negro' : 'blanco'} mt-4 p-2 font-medium text-${darkMode ? 'blanco' : 'negro'} placeholder:text-xs placeholder:italic placeholder:font-light rounded-md border border-gris placeholder-grisClaro text-sm duration-200`}
                />
                {errors.repeatPassword && <p className="text-rojo text-xs text-left font-medium">{errors.repeatPassword.message}</p>}

                <p className="text-sm mt-10 text-grisClaro font-regular">¿Ya tienes una cuenta? <Link className="text-celeste font-medium" to='/iniciar-sesion'>Ingresa aquí</Link>.</p>

                <Button type="submit" onSubmit={notify} className={`flex mt-8 p-2 px-3 w-fit mx-auto text-${darkMode ? 'negro' : 'blanco'} font-titulos font-regular bg-${darkMode ? 'blanco' : 'negro'} border-${darkMode ? 'blanco' : 'negro'} border-2 rounded-lg hover:bg-${darkMode ? 'negro' : 'blanco'} hover:text-${darkMode ? 'blanco' : 'negro'} duration-200`}>
                    Enviar
                </Button>
                {/* toasttttttttttt */}
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        // Define default options
                        className: '',
                        duration: 5000,
                        style: {
                            background: '#12374C',
                            color: '#fff',
                            border: '2px solid #00A3FF'
                        },

                        // Default options for specific types
                        success: {
                            duration: 3000,
                            theme: {
                                primary: 'green',
                                secondary: 'black',
                            },
                        },
                    }}
                />
            </form>
        </div>
    );
};

export default CrearCuenta;
