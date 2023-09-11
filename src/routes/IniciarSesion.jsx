
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "@nextui-org/react";
import { useState } from "react";


const IniciarSesion = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errorMessage, setErrorMessage] = useState("")
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
            const user = userCredential.user;
            // You can now handle the logged-in user (e.g., redirect to a dashboard).
            console.log("User logged in:", user);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                setErrorMessage("* La constraseña y/o el mail son incorrectos")
            } else if (error.code === "auth/user-not-found") {
                setErrorMessage("* Este email no esta registrado")
            }
            reset()
        }
    };

    return (
        <div className="h-screen">
            <h1 className="font-titulos pt-32 pb-4 text-verdeOscuro font-semibold text-4xl">
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
                    className="bg-blanco mt-4 p-2 font-medium text-textos placeholder:text-xs placeholder:italic placeholder:font-light  rounded-md border-1 border-verdeOscuro placeholder-secundario text-sm"
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
                    className="bg-blanco mt-4 p-2 font-medium text-textos placeholder:text-xs placeholder:italic placeholder:font-light  rounded-md border-1 border-verdeOscuro placeholder-secundario text-sm"
                />
                {errors.password && <p className="text-rojo text-xs text-left font-medium">{errors.password.message}</p>}
                <p className="text-rojo text-xs text-left font-medium">
                    {errors.password?.type === "minLength" &&
                        "* la contraseña debe tener al menos 8 caracteres"}
                </p>
                {errorMessage && (
                    <p className="text-rojo text-xs text-left font-medium">{errorMessage}</p>
                )}
                <p className="text-sm mt-10 font-regular">¿No tienes una cuenta? <Link className="text-verdeOscuro font-medium" to='/crear-cuenta'>Ingresa aquí</Link>.</p>
                <Button type="submit" className="m-10 bg-textos text-blanco w-fit mx-auto rounded-md hover:bg-blanco border-2 border-textos hover:text-textos">
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default IniciarSesion
