
import { useState } from "react";
import ReprodutorAudio from "./ReprodutorAudio";

const CardAudio = ({ audio, onEditar, onExcluir }) => {
  const [mostrarTranscricao, setMostrarTranscricao] = useState(false);

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          {audio.titulo}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Etiqueta NFC: {audio.etiqueta_nfc}
        </p>
      </div>

      <ReprodutorAudio caminho={audio.arquivo_path} />

      <button
        onClick={() => setMostrarTranscricao(!mostrarTranscricao)}
        className="mt-4 text-sm font-semibold text-blue-700"
      >
        {mostrarTranscricao ? "Ocultar transcrição" : "Ver transcrição"}
      </button>

      {mostrarTranscricao && (
        <p className="mt-2 rounded-lg bg-gray-50 p-3 text-gray-700">
          {audio.transcricao || "Nenhuma transcrição cadastrada."}
        </p>
      )}

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => onEditar(audio)}
          className="rounded-lg bg-blue-100 px-4 py-2 text-blue-800"
        >
          Editar
        </button>

        <button
          onClick={() => onExcluir(audio.id)}
          className="rounded-lg bg-red-100 px-4 py-2 text-red-700"
        >
          Excluir
        </button>
      </div>
    </article>
  );
};

export default CardAudio;
