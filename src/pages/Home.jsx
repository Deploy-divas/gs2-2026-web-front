import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListaAudios from "../components/ListaAudios";
import FormularioAudio from "../components/FormularioAudio";

import useAudios from "../hooks/useAudios";
import { useAuth } from "../hooks/AuthContext";

const Home = () => {
  const { usuario, sair } = useAuth();

  const {
    audios,
    carregando,
    erro,
    adicionarAudio,
    editarAudio,
    removerAudio,
  } = useAudios();

  const [formularioAberto, setFormularioAberto] = useState(false);
  const [audioSelecionado, setAudioSelecionado] = useState(null);
  const [salvando, setSalvando] = useState(false);

  const abrirCadastro = () => {
    setAudioSelecionado(null);
    setFormularioAberto(true);
  };

  const abrirEdicao = (audio) => {
    setAudioSelecionado(audio);
    setFormularioAberto(true);
  };

  const fecharFormulario = () => {
    setFormularioAberto(false);
    setAudioSelecionado(null);
  };

  const salvarAudio = async (dados, arquivo) => {
    try {
      setSalvando(true);

      if (audioSelecionado) {
        await editarAudio(audioSelecionado.id, dados, arquivo);
      } else {
        await adicionarAudio(dados, arquivo);
      }

      fecharFormulario();
    } catch (error) {
      alert("Não foi possível salvar o áudio: " + error.message);
    } finally {
      setSalvando(false);
    }
  };

  const excluirAudio = async (id) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este áudio?"
    );

    if (!confirmar) return;

    try {
      await removerAudio(id);
    } catch (error) {
      alert("Não foi possível excluir o áudio: " + error.message);
    }
  };

  const sairDaConta = async () => {
    await sair();
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-creme-claro px-6 py-10">

        <section className="mx-auto max-w-6xl">

          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-petroleo">
                Olá, {usuario?.user_metadata?.nome || "usuário"}!
              </h1>

              <p className="mt-2 text-petroleo">
                Gerencie seus áudios e etiquetas NFC.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={abrirCadastro}
                className="rounded-xl bg-verde px-5 py-3 font-semibold text-white"
              >
                + Novo áudio
              </button>

              <button
                onClick={sairDaConta}
                className="rounded-xl border-2 border-borda px-5 py-3 font-semibold text-petroleo"
              >
                Sair
              </button>
            </div>
          </div>

          {formularioAberto && (
            <section className="mb-10 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-petroleo">
                {audioSelecionado ? "Editar áudio" : "Cadastrar áudio"}
              </h2>

              <FormularioAudio
                audio={audioSelecionado}
                aoSalvar={salvarAudio}
                aoCancelar={fecharFormulario}
                salvando={salvando}
              />
            </section>
          )}

          {erro && (
            <p className="mb-5 rounded-xl bg-red-100 p-4 text-red-700">
              {erro}
            </p>
          )}

          <div className="mb-5">
            <h2 className="text-2xl font-bold text-petroleo">
              Meus áudios
            </h2>

            <p className="mt-1 text-gray-500">
              Aqui estão todos os seus áudios cadastrados.
            </p>
          </div>

          {carregando ? (
            <p className="py-10 text-center text-petroleo">
              Carregando seus áudios...
            </p>
          ) : (
            <ListaAudios
              audios={audios}
              onEditar={abrirEdicao}
              onExcluir={excluirAudio}
            />
          )}

        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
