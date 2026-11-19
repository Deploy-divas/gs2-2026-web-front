
import { supabase } from "./supabaseClient";

const TABELA = "audios";
const BUCKET = "audios";

// LISTAR
export async function listarAudios() {
  const { data, error } = await supabase
    .from(TABELA)
    .select("*")
    .order("criado_em", { ascending: false });

  if (error) throw error;

  return data;
}

// BUSCAR 
export async function buscarAudio(id) {
  const { data, error } = await supabase
    .from(TABELA)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

// enviar arquivo para o Storage
async function enviarArquivo(arquivo, usuarioId) {
  const extensao = arquivo.name.split(".").pop();

  const caminho = `${usuarioId}/${crypto.randomUUID()}.${extensao}`;

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(caminho, arquivo);

  if (error) throw error;

  return caminho;
}

// CADASTRAR
export async function cadastrarAudio(usuarioId, dados, arquivo) {
  let caminho = null;

  try {
    if (arquivo) {
      caminho = await enviarArquivo(arquivo, usuarioId);
    }

    const { data, error } = await supabase
      .from(TABELA)
      .insert({
        ...dados,
        usuario_id: usuarioId,
        arquivo_path: caminho,
      })
      .select()
      .single();

    if (error) throw error;

    return data;

  } catch (error) {
    if (caminho) {
      await supabase.storage.from(BUCKET).remove([caminho]);
    }

    throw error;
  }
}

// EDITAR 
export async function atualizarAudio(id, dados, novoArquivo = null) {
  const audioAtual = await buscarAudio(id);

  let novoCaminho = audioAtual.arquivo_path;

  if (novoArquivo) {
    novoCaminho = await enviarArquivo(
      novoArquivo,
      audioAtual.usuario_id
    );
  }

  const { data, error } = await supabase
    .from(TABELA)
    .update({
      ...dados,
      arquivo_path: novoCaminho,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    if (novoArquivo && novoCaminho) {
      await supabase.storage.from(BUCKET).remove([novoCaminho]);
    }

    throw error;
  }

  if (novoArquivo && audioAtual.arquivo_path) {
    await supabase.storage
      .from(BUCKET)
      .remove([audioAtual.arquivo_path]);
  }

  return data;
}

// EXCLUIR
export async function excluirAudio(id) {
  const audio = await buscarAudio(id);

  const { error } = await supabase
    .from(TABELA)
    .delete()
    .eq("id", id);

  if (error) throw error;

  if (audio.arquivo_path) {
    const { error: erroArquivo } = await supabase.storage
      .from(BUCKET)
      .remove([audio.arquivo_path]);

    if (erroArquivo) throw erroArquivo;
  }
}

// link temporário para reprodução
export async function obterUrlAudio(caminho) {
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(caminho, 3600);

  if (error) throw error;

  return data.signedUrl;
}
