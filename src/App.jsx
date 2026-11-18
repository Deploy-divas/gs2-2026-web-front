import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";


const App = () => {
  return (
    <BrowserRouter>
        
      <Routes>

        <Route path="/" element={<Index />} />
        {/* <Route path="/login" element={<Login />} />

        <Route element={<RotaPrivada />}>
            <Route path="/camera" element={<Camera />} />
            <Route path="/texto-reconhecido"element={<TextoReconhecido />} />
            <Route path="/resumo-gerado" element={<ResumoGerado />} />
            <Route path="/resumos" element={<Resumos />} />
        </Route> */}
    
      </Routes>

    </BrowserRouter>
  )
}

export default App
