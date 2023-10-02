
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import logoBlanco from '../assets/blanco.png'

const IniciarSesion = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate()
    const onSubmit = (data) => {
        handleLogin(data)
    }

    const handleLogin = async (data) => {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            if (userCredential) {
                reset()
                // redireccionar a mis notas
                navigate('/notes')
            }
            const user = userCredential.user;
            // You can now handle the logged-in user (e.g., redirect to a dashboard).
            console.log("User logged in:", user);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                setErrorMessage("* La constraseña y/o el mail son incorrectos")
            } else if (error.code === "auth/user-not-found") {
                setErrorMessage("* Este email no esta registrado")
            }
        }
    };

    return (
        <div className={`max-w-lg pb-12 h-full mx-auto duration-200`}>
            <div className="flex flex-row justify-around">
                <Link to="/"><img src={logoBlanco} alt="Logo EN." className="w-24 mt-12" /></Link>
            </div>
            <h1 className="font-titulos pt-16 pb-4 text-celeste font-semibold text-4xl">
                Iniciar Sesión
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                action="submit"
                className="flex flex-col w-4/5 mx-auto mb-12 font-titulos"
            >
                <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="ingresa tu email"
                    className={`bg-negro mt-4 p-2 font-medium text-blanco placeholder:text-xs placeholder:italic placeholder:font-light rounded-md border border-gris placeholder-grisClaro text-sm duration-200`}
                />
                <p className="text-rojo text-xs text-left font-medium">
                    {errors.email?.type === "required" &&
                        "* debes introducir un email válido"}
                </p>

                <input
                    type="password"
                    {...register("password", {
                        minLength: 8,
                        required: {
                            value: true,
                            message: "* debes introducir una constraseña"
                        },
                    })}
                    placeholder="Ingresa tu contraseña"
                    className={`bg-negro mt-4 p-2 font-medium text-blanco placeholder:text-xs placeholder:italic placeholder:font-light rounded-md border border-gris placeholder-grisClaro text-sm duration-200`}
                />
                {errors.password && <p className="text-rojo text-xs text-left font-medium">{errors.password.message}</p>}
                <p className="text-rojo text-xs text-left font-medium">
                    {errors.password?.type === "minLength" &&
                        "* la contraseña debe tener al menos 8 caracteres"}
                </p>
                {errorMessage && (
                    <p className="text-rojo text-xs text-left font-medium">{errorMessage}</p>
                )}
                <p className="text-sm mt-10 text-grisClaro font-regular">¿No tienes una cuenta? <Link className="text-celeste font-medium" to='/crear-cuenta'>Ingresa aquí</Link>.</p>
                <Button type="submit" className="flex m-12 p-2 px-3 w-fit mx-auto text-negro font-titulos font-regular bg-blanco border-blanco border-2 rounded-lg hover:bg-negro hover:text-blanco duration-200">
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default IniciarSesion
