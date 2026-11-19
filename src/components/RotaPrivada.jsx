import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

function RotaPrivada() {
  const { usuario, carregando } = useAuth();

  if (carregando) {
    return <p className="text-center mt-10">Carregando...</p>;
  }

  // se não estiver logado, redireciona para o login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // se estiver logado, permite acessar a página
  return <Outlet />;
}

export default RotaPrivada;
