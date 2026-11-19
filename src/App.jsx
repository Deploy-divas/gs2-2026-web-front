import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";

import Index from "./pages/Index";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";

import RotaPrivada from "./components/RotaPrivada";


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/fale-conosco" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route element={<RotaPrivada />}>
            <Route path="/home" element={<Home />} />
          </Route>
      
        </Routes>
      </AuthProvider>

    </BrowserRouter>
  )
}


export default App