
import { useState } from "react";
import { enviarMensagem } from "../services/envioEmails";

import Input from "./Inputs";

function FormularioContato() {

  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");

  function aoAlterar(event) {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  async function aoEnviar(event) {
    event.preventDefault();

    setEnviando(true);
    setStatus("");

    const resultado = await enviarMensagem(formulario);

    if (!resultado.salvou) {
        setStatus("Erro ao salvar sua mensagem. Tente novamente.");
        // setStatus("Erro ao salvar: " + resultado.erro); //se tiver erro, mostra o erro
        setEnviando(false);
        return;
    }

    setFormulario({
      nome: "",
      email: "",
      assunto: "",
      mensagem: ""
    });

    if (resultado.enviou) {
      setStatus("Mensagem enviada com sucesso!");
    } else {
      setStatus("Mensagem salva, mas houve um erro no envio do e-mail." + resultado.erro);
    }

    setEnviando(false);
  }

  return (
    <form onSubmit={aoEnviar} className="flex w-full max-w-xl flex-col rounded-3xl border border-borda border-t-8 border-t-amarelo bg-white p-6 shadow-xl shadow-petroleo/10 sm:p-10">

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
        label="Assunto"
        name="assunto"
        value={formulario.assunto}
        onChange={aoAlterar}
      />

      <label className="font-semibold text-petroleo">Mensagem</label>
      <textarea
      name="mensagem"
      value={formulario.mensagem}
      onChange={aoAlterar}
      required
      className="mb-5 mt-2 min-h-40 w-full resize-y rounded-xl border-2 border-borda bg-creme-claro px-4 py-3 text-lg text-petroleo transition focus:border-verde focus:bg-white focus:outline-none"
      />

      <p className="mb-4 min-h-6 text-center font-medium text-verde">{status}</p>

      <button
      type="submit"
      disabled={enviando}
      className="w-full rounded-2xl bg-amarelo px-6 py-4 text-lg font-bold text-petroleo shadow-[0_5px_0_0_var(--color-amarelo-escuro,#d9a023)] transition hover:translate-y-[2px] hover:bg-amarelo-claro hover:shadow-[0_3px_0_0_#d9a023] disabled:cursor-not-allowed disabled:opacity-60"
      >
      {enviando ? "Enviando..." : "Enviar mensagem"}
      </button>


    </form>
  );
}

export default FormularioContato;
