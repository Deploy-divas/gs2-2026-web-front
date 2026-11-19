import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Verifica se já existe uma sessão ativa
    async function verificarSessao() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Erro ao verificar sessão:", error.message);
      }

      setUsuario(data?.session?.user ?? null);
      setCarregando(false);
    }

    verificarSessao();

    // Acompanha mudanças na autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_evento, sessao) => {
      setUsuario(sessao?.user ?? null);
      setCarregando(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Cadastrar usuário
  async function cadastrarUsuario(email, senha, nome) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: { nome },
      },
    });

    if (error) throw error;

    return data;
  }

  // Fazer login
  async function entrar(email, senha) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) throw error;

    return data;
  }

  // Fazer logout
  async function sair() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        carregando,
        cadastrarUsuario,
        entrar,
        sair,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook de autenticação
export function useAuth() {
  const contexto = useContext(AuthContext);

  if (!contexto) {
    throw new Error("useAuth deve ser utilizado dentro de AuthProvider");
  }

  return contexto;
}
