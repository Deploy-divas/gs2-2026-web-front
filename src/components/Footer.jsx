
import { Link } from 'react-router-dom'

import logo from '../assets/audi-logo.svg'

const links = [
  { nome: 'Inicio', id: '/' },
  { nome: 'Fale Conosco', id: '/fale-conosco' },
  { nome: 'Login', id: '/login' },
  { nome: 'Cadastro', id: '/Cadastro' },
  { nome: 'Home', id: '/Home' },
]

const Footer = () => {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-petroleo text-creme-claro">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr]">

        <div>
          <Link to="/" aria-label="AUDI, página inicial">
            <img src={logo} alt="AUDI" className="h-17 w-auto" />
          </Link>

          <p className="mt-4 max-w-md text-cinza-claro">
            Chaveiro NFC em formato de cão-guia com descrições em áudio, para dar mais autonomia a pessoas cegas e de baixa visão no reconhecimento dos objetos do dia a dia.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-titulo text-lg font-bold text-amarelo">
            Navegue
          </h2>

          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  className="transition hover:text-amarelo"
                >
                  {link.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-cinza-claro md:flex-row md:justify-between">
          <p>© {ano} Deploy das Divas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
