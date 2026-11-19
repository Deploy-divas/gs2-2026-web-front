
import { useState } from "react";
import Inputs from "./Inputs";
import useFormulario from "../hooks/useFormulario";

const FormularioAudio = ({
  audio,
  aoSalvar,
  aoCancelar,
  salvando
}) => {


  const { valores: formulario, aoAlterar } = useFormulario({
    titulo: audio?.titulo || "",
    etiqueta_nfc: audio?.etiqueta_nfc || "",
    transcricao: audio?.transcricao || "",
  });

  const [arquivo, setArquivo] = useState(null);

  const aoEnviar = (e) => {
    e.preventDefault();
    aoSalvar(formulario, arquivo);
  };

  return (
    <form onSubmit={aoEnviar} className="space-y-4">

      <Inputs
        label="Título do áudio"
        name="titulo"
        value={formulario.titulo}
        onChange={aoAlterar}
      />

      <Inputs
        label="Identificação NFC"
        name="etiqueta_nfc"
        value={formulario.etiqueta_nfc}
        onChange={aoAlterar}
      />

      <div>
        <label className="font-semibold text-petroleo">
          Transcrição
        </label>

        <textarea
          name="transcricao"
          value={formulario.transcricao}
          onChange={aoAlterar}
          rows="4"
          placeholder="Escreva a transcrição do áudio..."
          className="mb-4 mt-2 w-full rounded-xl border-2 border-borda bg-creme-claro px-4 py-3 text-petroleo focus:border-verde focus:bg-white focus:outline-none"
        />
      </div>

      <div>
        <label className="font-semibold text-petroleo">
          Arquivo de áudio
        </label>

        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setArquivo(e.target.files[0])}
          required={!audio}
          className="mb-4 mt-2 w-full rounded-xl border-2 border-borda bg-creme-claro p-3 text-petroleo"
        />

        {audio && (
          <p className="text-sm text-gray-500">
            Selecione um arquivo somente se quiser substituir o áudio atual.
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={salvando}
          className="rounded-xl bg-verde px-5 py-3 font-semibold text-white disabled:opacity-50"
        >
          {salvando
            ? "Salvando..."
            : audio
              ? "Salvar alterações"
              : "Cadastrar áudio"}
        </button>

        <button
          type="button"
          onClick={aoCancelar}
          className="rounded-xl border border-borda px-5 py-3 text-petroleo"
        >
          Cancelar
        </button>
      </div>

    </form>
  );
};

export default FormularioAudio;
