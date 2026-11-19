import { useState } from "react";

function useFormulario(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function aoAlterar(e) {
    const { name, value } = e.target;
    setValores((anterior) => ({ ...anterior, [name]: value }));
  }

  function limpar() {
    setValores(valoresIniciais);
  }

  return { valores, aoAlterar, limpar };
}

export default useFormulario;