
import { useEffect, useState } from "react";
import { obterUrlAudio } from "../services/audioService";

const ReprodutorAudio = ({ caminho }) => {
  const [url, setUrl] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const carregarAudio = async () => {
      if (!caminho) {
        setCarregando(false);
        return;
      }

      try {
        const link = await obterUrlAudio(caminho);
        setUrl(link);
      } catch (error) {
        setErro("Não foi possível carregar o áudio.");
      } finally {
        setCarregando(false);
      }
    };

    carregarAudio();
  }, [caminho]);

  if (!caminho) return <p>Nenhum arquivo de áudio cadastrado.</p>;
  if (carregando) return <p>Carregando áudio...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <audio controls className="w-full">
      <source src={url} />
      Seu navegador não suporta a reprodução de áudio.
    </audio>
  );
};

export default ReprodutorAudio;
