import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Inputs";
import { useAuth } from "../hooks/AuthContext";

const Cadastro = () => {

    const { cadastrarUsuario } = useAuth();
    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    function aoAlterar(evento) {
        const { name, value } = evento.target;

        setFormulario({
        ...formulario,
        [name]: value,
        });
    }

    async function aoCadastrar(evento) {
        evento.preventDefault();
        setErro("");

        if (formulario.senha !== formulario.confirmarSenha) {
        setErro("As senhas não coincidem.");
        return;
        }

        if (formulario.senha.length < 6) {
        setErro("A senha precisa ter pelo menos 6 caracteres.");
        return;
        }

        try {
        setCarregando(true);

        await cadastrarUsuario(
            formulario.email,
            formulario.senha,
            formulario.nome
        );

        navigate("/login");

        } catch (error) {
        setErro(error.message);
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
                Crie sua conta
            </h1>

            <p className="mb-8 mt-2 text-center text-cinza">
                Comece a utilizar o AUDI.
            </p>

            <form onSubmit={aoCadastrar}>
            <Input
                label="Nome"
                name="nome"
                value={formulario.nome}
                onChange={aoAlterar}
            />

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

            <Input
                label="Confirmar senha"
                name="confirmarSenha"
                type="password"
                value={formulario.confirmarSenha}
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
                {carregando ? "Cadastrando..." : "Criar conta"}
            </button>
            </form>

            <p className="mt-6 text-center text-cinza">
            Já possui uma conta?{" "}
            <Link
                to="/login"
                className="font-bold text-verde hover:underline"
            >
                Faça login
            </Link>
            </p>

        </section>
        </main>

        <Footer />
    </>
    );
}

export default Cadastro






  


