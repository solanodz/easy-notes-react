import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"
import { Button } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CrearCuenta = () => {

    const notify = () => {
        toast.success("Cuenta creada con éxito", {
            position: toast.POSITION.TOP_CENTER,
        });
    }

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [, setFormSubmitted] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

    const onSubmit = async (data) => {
        try {
            const user = await registrarUsuario(data.email, data.password);
            if (user) {
                // El usuario se ha registrado correctamente en Firebase Authentication
                // Ahora puedes hacer lo que desees, como redirigir al usuario a otra página
                setFormSubmitted(true);
                reset();
                notify();

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
        <div className="h-screen mt-20">
            <h1 className="font-titulos pt-12 pb-4 text-verdeOscuro font-semibold text-4xl">
                Crear Cuenta
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                action="submit"
                className="flex flex-col w-4/5 mx-auto mb-12 font-titulos"
            >

                <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="bg-blanco mt-4 p-2 font-medium text-textos placeholder:text-xs placeholder:italic placeholder:font-light  rounded-md border-1 border-verdeOscuro placeholder-secundario text-sm"
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
                    className="bg-blanco mt-4 p-2 font-medium text-textos placeholder:text-xs placeholder:italic placeholder:font-light  rounded-md border-1 border-verdeOscuro placeholder-secundario text-sm"
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
                    className="bg-blanco mt-4 p-2 font-medium text-textos placeholder:text-xs placeholder:italic placeholder:font-light  rounded-md border-1 border-verdeOscuro placeholder-secundario text-sm"
                />
                {errors.repeatPassword && <p className="text-rojo text-xs text-left font-medium">{errors.repeatPassword.message}</p>}

                <p className="text-sm mt-10 font-regular">¿Ya tienes una cuenta? <Link className="text-verdeOscuro font-medium" to='/iniciar-sesion'>Ingresa aquí</Link>.</p>

                <Button type="submit" className="z-0 m-10 bg-textos text-blanco w-fit mx-auto rounded-md hover:bg-blanco border-2 border-textos hover:text-textos">
                    Enviar
                </Button>
                <ToastContainer autoClose={2500} theme="dark" />
            </form>
        </div>
    );
};

export default CrearCuenta;
