import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Index from "./pages/Index";
import Contato from "./pages/Contato";
import Login from "./pages/Login";


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/fale-conosco" element={<Contato />} />
          <Route path="/login" element={<Login />} />

          {/* <Route element={<RotaPrivada />}>
              <Route path="/camera" element={<Camera />} />
              <Route path="/texto-reconhecido"element={<TextoReconhecido />} />
              <Route path="/resumo-gerado" element={<ResumoGerado />} />
              <Route path="/resumos" element={<Resumos />} />
              </Route>  */}
      
        </Routes>
      </AuthProvider>

    </BrowserRouter>
  )
}

export default App
