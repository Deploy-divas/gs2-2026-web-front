
import { useState, useEffect, useCallback } from "react";

import { useAuth } from "../contexts/AuthContext";

import {
  listarAudios,
  cadastrarAudio,
  atualizarAudio,
  excluirAudio,
} from "../services/audioService";


const useAudios = () => {
    const { usuario } = useAuth();

    const [audios, setAudios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    // BUSCAR os áudios
    const carregarAudios = useCallback(async () => {
    if (!usuario) {
        setAudios([]);
        setCarregando(false);
        return;
    }

    try {
        setErro("");
        setCarregando(true);

        const dados = await listarAudios();

        setAudios(dados);
    } catch (error) {
        setErro(error.message);
    } finally {
        setCarregando(false);
    }
    }, [usuario]);

    // Carregar os áudios quando o usuário entrar
    useEffect(() => {
    carregarAudios();
    }, [carregarAudios]);

    // CADASTRAR
    async function adicionarAudio(dados, arquivo) {
    try {
        setErro("");

        await cadastrarAudio(usuario.id, dados, arquivo);

        await carregarAudios();
    } catch (error) {
        setErro(error.message);
        throw error;
    }
    }

    // EDITAR
    async function editarAudio(id, dados, arquivo = null) {
    try {
        setErro("");

        await atualizarAudio(id, dados, arquivo);

        await carregarAudios();
    } catch (error) {
        setErro(error.message);
        throw error;
    }
    }

    // EXCLUIR
    async function removerAudio(id) {
    try {
        setErro("");

        await excluirAudio(id);

        await carregarAudios();
    } catch (error) {
        setErro(error.message);
        throw error;
    }
    }

    return {
    audios,
    carregando,
    erro,
    carregarAudios,
    adicionarAudio,
    editarAudio,
    removerAudio,
    };
}

export default useAudios;