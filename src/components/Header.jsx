
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu as IconeMenu, X } from 'lucide-react'

import logo from '../assets/audi-logo.svg'

const links = [
  { nome: 'Home', id: '/' },
  { nome: 'Fale Conosco', id: '/fale-conosco' },
]

const botao = { nome: 'Login', id: '/login' }

const estiloBotao = 'rounded-2xl bg-amarelo px-5 py-2 font-bold text-petroleo transition hover:bg-amarelo-claro'

const Header = () => {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-petroleo text-creme-claro shadow-lg shadow-black/20">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        <Link to="/" onClick={() => setAberto(false)} aria-label="AUDI, página inicial">
          <img src={logo} alt="AUDI" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              className="rounded-lg px-3 py-2 text-cinza-claro transition hover:bg-white/10 hover:text-white"
            >
              {link.nome}
            </Link>
          ))}

          <Link to={botao.id} className={`${estiloBotao} ml-3`}>
            {botao.nome}
          </Link>
        </nav>

        {/* Botão do menu mobile */}
        <button
          onClick={() => setAberto(!aberto)}
          aria-expanded={aberto}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          className="grid size-11 place-items-center rounded-xl transition hover:bg-white/10 lg:hidden"
        >
          {aberto ? <X /> : <IconeMenu />}
        </button>
      </div>

      {/* Mobile */}
      {aberto && (
        <nav aria-label="Menu mobile" className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              onClick={() => setAberto(false)}
              className="rounded-xl px-4 py-3 text-lg transition hover:bg-white/10"
            >
              {link.nome}
            </Link>
          ))}

          <Link
            to={botao.id}
            onClick={() => setAberto(false)}
            className={`${estiloBotao} mt-2 py-3 text-center`}
          >
            {botao.nome}
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
