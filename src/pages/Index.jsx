import { Link } from 'react-router-dom'
import { useState } from 'react'
import { X, PawPrint, Nfc, Volume2, Mic, Repeat, BellRing, WifiOff, Save, Hand, Tag, Ear, PencilLine, Boxes, ListChecks, RefreshCw, Check, Plus, ArrowRight } from 'lucide-react'

// imagens
import Beatriz from '../assets/beatriz.png'
import Laura from '../assets/laura.png'
import Amanda from '../assets/amanda.png'
import Chaveiro from '../assets/chaveiro.png'
import ChaveiroTags from '../assets/chaveiro-tags.png'


const problemas = [
  { icone: Boxes, titulo: 'Identificar', texto: 'Potes, caixas e materiais pessoais nem sempre têm informação acessível pelo tato.' },
  { icone: ListChecks, titulo: 'Organizar', texto: 'Uma descrição escolhida pela própria pessoa ajuda a distinguir e localizar seus pertences.' },
  { icone: RefreshCw, titulo: 'Atualizar', texto: 'Quando o uso do objeto muda, a descrição também precisa mudar, de forma simples.' },
]

const etapas = [
  { icone: Tag, titulo: 'Etiquete o objeto', texto: 'Cole a etiqueta NFC em um ponto fácil de achar pelo tato. Ela não precisa de bateria nem de internet.' },
  { icone: Nfc, titulo: 'Aproxime o chaveiro', texto: 'A área de leitura fica nas costas do cão-guia. Ao encostar na etiqueta, ele lê o identificador.' },
  { icone: Ear, titulo: 'Ouça a descrição', texto: 'O aparelho encontra o áudio associado e o reproduz no alto-falante.' },
  { icone: PencilLine, titulo: 'Regrave quando mudar', texto: 'Hoje café, amanhã açúcar: selecione regravação, fale, ouça e confirme. A etiqueta continua a mesma.' },
]

const objetivos = [
  'Ler cinco etiquetas, tocar os áudios e repetir por botão.',
  'Permitir gravar, ouvir e confirmar uma nova descrição.',
  'Validar o formato, os comandos e a leitura com pessoas cegas.',
]

const equipe = [
  { nome: 'Beatriz Mantovani da Cruz', rm: '273824', cor: 'bg-amarelo', imagem: Beatriz, },
  { nome: 'Amanda Silva da Mata', rm: '578525', cor: 'bg-verde', imagem: Amanda, },
  { nome: 'Laura Sampaio Neves', rm: '570802', cor: 'bg-petroleo-claro', imagem: Laura, },
]

const perguntas = [
  { pergunta: 'O chaveiro descobre sozinho o que há dentro do objeto?', resposta: 'Não. Ele reconhece a etiqueta NFC e toca a descrição cadastrada pela pessoa. Não há câmera nem reconhecimento automático de objetos.' },
  { pergunta: 'Preciso de internet para usar?', resposta: 'Não. Na arquitetura proposta, a identificação e a gravação funcionam localmente.' },
  { pergunta: 'A etiqueta precisa de bateria?', resposta: 'Não. A etiqueta NFC é passiva e recebe energia do chaveiro na aproximação. A bateria recarregável fica só no chaveiro.' },
  { pergunta: 'Como mudo a descrição de um objeto?', resposta: 'Selecione regravação, fale a nova descrição, ouça e confirme. A etiqueta continua a mesma e as próximas leituras tocam a nova gravação.' },
  { pergunta: 'A descrição vale para outro chaveiro?', resposta: 'Não automaticamente. O áudio fica no aparelho; usar a mesma etiqueta em outro chaveiro exigiria transferir a gravação.' },
]

const Index = () => {
  const [perguntaAberta, setPerguntaAberta] = useState(0)

  return (
    <>

      {/* HERO */}
      <section id="topo" className="bg-petroleo text-creme-claro">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-5 inline-block rounded-full border border-amarelo/40 px-4 py-1.5 text-sm font-semibold text-amarelo-claro">Uma etiqueta. Uma voz.</p>
            <h1 className="font-titulo text-5xl font-extrabold leading-tight lg:text-6xl">
              Um pequeno cão-guia.
              <span className="mt-3 block text-amarelo">Mais autonomia para reconhecer o que é seu.</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl text-cinza-claro">Chaveiro NFC com descrições em áudio para objetos do dia a dia. Aproximou, identificou, ouviu.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amarelo px-6 py-3 font-bold text-petroleo transition hover:bg-amarelo-claro">Conhecer solução</a>
              <a href="#problema" className="inline-flex items-center rounded-2xl border-2 border-creme-claro px-6 py-3 font-bold transition hover:bg-white/10">Entender o problema</a>
            </div>
          </div>

          <div className="mx-auto max-w-md">
            <img src={Chaveiro} alt="Chaveiro em formato de cão-guia bege com arnês amarelo, botões, alto-falante e argola" className="rounded-3xl" />
          </div>
        </div>
      </section>

      {/* PROBLEMA E SOLUÇÃO */}
      <section id="problema" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <h2 className="font-titulo text-4xl font-extrabold">Objetos diferentes podem parecer iguais.</h2>
            <p className="mt-4 text-lg text-cinza">Para pessoas cegas ou com baixa visão, reconhecer um pote ou uma caixa nem sempre é possível só pelo tato. Cada objeto sem informação acessível é um pouco menos de independência no dia a dia.</p>
            <div className="mt-8 space-y-4">
              {problemas.map((p) => (
                <div key={p.titulo} className="flex gap-4 rounded-2xl border border-borda bg-creme-claro p-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-verde text-creme-claro"><p.icone size={22} /></span>
                  <div>
                    <h3 className="font-titulo text-xl font-bold">{p.titulo}</h3>
                    <p className="text-cinza">{p.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full rounded-3xl bg-petroleo p-8 text-creme-claro">
            <p className="font-semibold text-amarelo-claro">A solução</p>
            <h3 className="mt-2 font-titulo text-3xl font-extrabold">Aproximou. Identificou. Ouviu.</h3>
            <p className="mt-4 text-lg text-cinza-claro">O NFC conecta a etiqueta ao áudio. A descrição é escolhida pela própria pessoa e pode mudar quando o uso do objeto mudar.</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full bg-amarelo text-petroleo"><Tag size={22} /></span><span><b className="text-amarelo-claro">Etiqueta</b> fica em um ponto do objeto fácil de achar pelo tato.</span></li>
              <li className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full bg-amarelo text-petroleo"><Nfc size={22} /></span><span><b className="text-amarelo-claro">Chaveiro</b> lê o identificador ao se aproximar.</span></li>
              <li className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full bg-amarelo text-petroleo"><Volume2 size={22} /></span><span><b className="text-amarelo-claro">Áudio</b> reproduz uma descrição, como “Café”.</span></li>
            </ul>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm text-cinza-claro">O aparelho reconhece a etiqueta; não verifica sozinho o conteúdo do objeto.</p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-petroleo py-20 text-creme-claro">
        <div className="mx-auto max-w-7xl px-5 ">
          <h2 className="font-titulo text-4xl font-extrabold text-center">A etiqueta é a chave. A voz está no chaveiro.</h2>
          <p className="mt-4 text-lg text-cinza-claro text-center">A etiqueta NFC guarda só um identificador. A descrição sonora fica no aparelho, por isso pode ser trocada sem trocar a etiqueta.</p>

          <div className="mt-24 grid items-start gap-12 lg:grid-cols-2">
            <ol className="space-y-8">
              {etapas.map((e, i) => (
                <li key={e.titulo} className="flex gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-amarelo font-titulo text-xl font-extrabold text-petroleo">{i + 1}</span>
                  <div>
                    <h3 className="flex items-center gap-2 font-titulo text-2xl font-bold"><e.icone size={20} className="text-amarelo-claro" />{e.titulo}</h3>
                    <p className="mt-1 text-cinza-claro">{e.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div>
              <img src={ChaveiroTags} alt="Chaveiro cão-guia de frente e de costas, ao lado de duas etiquetas NFC redondas" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE O PROJETO E A EQUIPE */}
      <section id="sobre" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-titulo text-4xl font-extrabold">Tecnologia para mais independência.</h2>
              <p className="mt-4 text-lg text-cinza">O projeto nasce na CitizenTech como proposta de produto: um dispositivo simples, de uso doméstico, em que a pessoa decide como cada objeto é descrito. A primeira demonstração terá cinco objetos etiquetados e uma experiência completa.</p>
            </div>
            <div>
              <h3 className="font-titulo text-2xl font-bold">Objetivos</h3>
              <ul className="mt-4 space-y-3">
                {objetivos.map((o) => (
                  <li key={o} className="flex gap-3 text-lg">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-verde text-creme-claro"><Check size={16} /></span>{o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-14 font-titulo text-2xl font-bold">Quem está construindo - Nossa equipe</h3>
          <p className="mt-2 text-cinza">Saiba quem participou do desenvolvinmento deste projeto.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {equipe.map((p, i) => (
              <div key={i} className="rounded-3xl border border-borda bg-creme-claro p-7">
                <img src={p.imagem} alt="foto da integrante" className='grid size-30 place-items-center rounded-full object-cover border-2 border-amarelo'/>
                <p className="mt-4 font-titulo text-xl font-bold">{p.nome}</p>
                <p className="font-semibold text-verde">RM: {p.rm}</p>
                <p className="mt-2 text-cinza">Engenheira de software</p>
              </div>
            ))}
          </div>

          <Link to="/fale-conosco" className="mt-10 inline-flex items-center justify-center gap-2 rounded-2xl bg-petroleo px-6 py-3 font-bold text-creme-claro transition hover:bg-petroleo-claro">Fale Conosco</Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-creme-claro py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 className="font-titulo text-4xl font-extrabold">Perguntas frequentes</h2>
            <p className="mt-4 text-lg text-cinza">O que o chaveiro faz na proposta e o que ainda precisa ser comprovado.</p>
          </div>
          <div className="space-y-3">
            {perguntas.map((p, i) => {
              const aberta = perguntaAberta === i
              return (
                <div key={p.pergunta} className={`rounded-2xl border ${aberta ? 'border-amarelo bg-white' : 'border-borda'}`}>
                  <h3>
                    <button onClick={() => setPerguntaAberta(aberta ? -1 : i)} aria-expanded={aberta} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-titulo text-lg font-bold">
                      {p.pergunta}
                      <Plus className={`shrink-0 transition ${aberta ? 'rotate-45' : ''}`} />
                    </button>
                  </h3>
                  {aberta && <p className="px-6 pb-5 text-lg text-cinza">{p.resposta}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      
    </>
  )
}

export default Index
