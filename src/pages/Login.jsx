import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Inputs";
import { useAuth } from "../hooks/AuthContext";
import useFormulario from "../hooks/useFormulario";


const Login = () => {

    const { entrar } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    const { valores: formulario, aoAlterar } = useFormulario({
    email: "",
    senha: "",
    });

    async function aoEntrar(evento) {
        evento.preventDefault();
        setErro("");

        try {
        setCarregando(true);

        await entrar(formulario.email, formulario.senha);

        navigate("/home", { replace: true });

        } catch (error) {
        setErro("E-mail ou senha incorretos.");
        } finally {
        setCarregando(false);
        }
    }

    return (
        <>
        <Header />

        <main className="flex min-h-[70vh] items-center justify-center px-5 py-12">
            <section className="w-full max-w-md rounded-3xl border border-borda bg-creme-claro p-8 shadow-lg">

            <h1 className="text-center font-titulo text-3xl font-extrabold">
                Bem-vindo de volta!
            </h1>

            <p className="mb-8 mt-2 text-center text-cinza">
                Entre na sua conta AUDI.
            </p>

            <form onSubmit={aoEntrar}>
                <Input
                label="E-mail"
                name="email"
                type="email"
                value={formulario.email}
                onChange={aoAlterar}
                />

                <Input
                label="Senha"
                name="senha"
                type="password"
                value={formulario.senha}
                onChange={aoAlterar}
                />

                {erro && (
                <p role="alert" className="mb-4 text-sm font-semibold text-red-600">
                    {erro}
                </p>
                )}

                <button
                type="submit"
                disabled={carregando}
                className="w-full rounded-2xl bg-amarelo px-5 py-3 font-bold text-petroleo transition hover:bg-amarelo-claro disabled:opacity-50"
                >
                {carregando ? "Entrando..." : "Entrar"}
                </button>
            </form>

            <p className="mt-6 text-center text-cinza">
                Ainda não possui uma conta?{" "}
                <Link
                to="/cadastro"
                className="font-bold text-verde hover:underline"
                >
                Cadastre-se
                </Link>
            </p>

            </section>
        </main>

        <Footer />
        </>
    );

}

export default Login