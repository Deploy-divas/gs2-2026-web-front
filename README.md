# Audi — Chaveiro NFC com descrições em áudio

> **Uma etiqueta. Uma voz.** Aproximou, identificou, ouviu.

## Descrição

**Audi** é o front-end web de um projeto de tecnologia desenvolvido Global Solution **CitizenTech**: um chaveiro em formato de pequeno cão-guia que usa **etiquetas NFC** para tocar descrições em áudio de objetos do dia a dia (potes, caixas, materiais pessoais), dando mais autonomia a pessoas cegas ou com baixa visão.

A etiqueta NFC guarda apenas um identificador. A descrição sonora é escolhida pela própria pessoa e pode ser regravada sem precisar trocar a etiqueta.

Este repositório contém a aplicação web, que tem duas partes:

- **Site institucional** — apresenta o problema, a solução, como funciona, os objetivos, a equipe e um FAQ, além de um formulário de contato.
- **Área logada** — onde cada usuário gerencia seus áudios e as etiquetas NFC associadas (CRUD completo com upload de arquivos de áudio).

### Funcionalidades

- Cadastro, login e logout de usuários (Supabase Auth)
- Rota privada para a área logada (`/home`)
- Cadastro, listagem, edição e exclusão de áudios, com título, identificação NFC, transcrição e arquivo de áudio
- Formulário "Fale Conosco": salva a mensagem no banco e envia um e-mail via EmailJS

### Páginas

| Rota             | Descrição                                   | Acesso   |
| ---------------- | ------------------------------------------- | -------- |
| `/`              | Página institucional                        | Pública  |
| `/fale-conosco`  | Formulário de contato                       | Pública  |
| `/login`         | Login                                       | Pública  |
| `/cadastro`      | Criação de conta                            | Pública  |
| `/home`          | Gerenciamento de áudios e etiquetas NFC     | Privada  |

## Tecnologias

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) (Auth, Database e Storage)
- [EmailJS](https://www.emailjs.com/) (envio de e-mails)
- [Lucide React](https://lucide.dev/) (ícones)
- ESLint

## Pré-requisitos

- [Node.js](https://nodejs.org/) **20.19 ou superior** (ou 22.12+), exigência do Vite 8
- npm (já vem com o Node.js)
- [Git](https://git-scm.com/)
- Uma conta e um projeto no [Supabase](https://supabase.com/)
- Uma conta no [EmailJS](https://www.emailjs.com/) com um serviço e um template de e-mail criados


## Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd gs2-2026-web-front
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```


3. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente:

   *OBS:*  O arquivo `.env` está dísponivel no repositório para facilitar o acesso para os professores, então essa etapa é dispensável, o sistema está funcionando perfeitamente. Caso deseje visualizar o banco de dados completo, prossiga com as etapas abaixo. 

   ### Configuração do Supabase

   O projeto espera a seguinte estrutura no Supabase:

   **Tabela `audios`**

   | Coluna         | Descrição                                          |
   | -------------- | -------------------------------------------------- |
   | `id`           | Identificador do áudio                             |
   | `usuario_id`   | ID do usuário dono do áudio (`auth.users`)         |
   | `titulo`       | Título do áudio                                    |
   | `etiqueta_nfc` | Identificador da etiqueta NFC                      |
   | `transcricao`  | Transcrição do áudio                               |
   | `arquivo`      | Caminho do arquivo no Storage                      |
   | `criado_em`    | Data de criação (usada na ordenação)               |

   **Tabela `emails`** — recebe as mensagens do formulário de contato, com as colunas `created_at`, `nome`, `email`, `assunto` e `mensagem`.

   **Bucket `audios`** (Storage) — privado; os arquivos são salvos em `<usuario_id>/<uuid>.<extensão>`.

   Lembre-se de configurar as políticas de acesso (RLS) para que cada usuário só consiga ler e alterar os próprios áudios.

   ### Configuração do EmailJS

   No painel do EmailJS, crie um serviço de e-mail e um template. O template recebe as variáveis `nome`, `email`, `assunto` e `mensagem`. Anote a **Public Key**, o **Service ID** e o **Template ID**.


   ### Ao finalizar as configurações das apis, edite o arquivo `.env` inserindo suas próprias credenciais. 

   ```env
   VITE_SUPABASE_URL=https://seu-projeto.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-chave-anon-do-supabase

   VITE_EMAILJS_PUBLIC_KEY=sua-public-key
   VITE_EMAILJS_SERVICE_ID=seu-service-id
   VITE_EMAILJS_TEMPLATE_ID=seu-template-id
   ```

   Onde encontrar cada valor:

   | Variável                    | Onde obter                                              |
   | --------------------------- | ------------------------------------------------------- |
   | `VITE_SUPABASE_URL`         | Supabase → Project Settings → API → Project URL         |
   | `VITE_SUPABASE_ANON_KEY`    | Supabase → Project Settings → API → `anon` / public key |
   | `VITE_EMAILJS_PUBLIC_KEY`   | EmailJS → Account → General → Public Key                |
   | `VITE_EMAILJS_SERVICE_ID`   | EmailJS → Email Services                                |
   | `VITE_EMAILJS_TEMPLATE_ID`  | EmailJS → Email Templates                               |


## Execução

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em **http://localhost:5173** (o endereço exato aparece no terminal).


## Vercel

Acesse o projeto em **https://gs-2026.vercel.app/** e explore todas as nossas funcionalidades.
Você pode criar seu próprio cadastro e fazer login com sua nova conta, ou, se preferir, utilize nosso user teste que já possui audios cadastrados.

E-mail : **user@email**
Senha : **123123**

## Equipe

| Nome                         | RM     |
| ---------------------------- | ------ |
| Beatriz Mantovani da Cruz    | 273824 |
| Amanda Silva da Mata         | 578525 |
| Laura Sampaio Neves          | 570802 |


## LINKS

### Repositorio Github: **https://github.com/Deploy-divas/gs2-2026-web-front**

### Deploy na Vercel: **https://gs-2026.vercel.app/**
