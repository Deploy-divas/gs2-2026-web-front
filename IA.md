# Uso de Inteligência Artificial no projeto Audi

## 1. Ferramentas utilizadas

| Ferramenta | Finalidade |
| ---------- | ---------- |
| **Claude** (Anthropic) | Estudo de conceitos do projeto, revisões, ideias de direcionamento, geração do `README.md` e implementação da gravação de áudio direto no site. |
| **ChatGPT** (OpenAI) | Utilizada como ferramenta de apoio no planejamento do projeto, na implementação da autenticação de usuários, na integração e organização do banco de dados, na configuração do armazenamento de arquivos de áudio e no aprendizado das tecnologias utilizadas, ajudando na compreensão dos conceitos e na resolução de dúvidas durante o desenvolvimento. |

O uso principal da IA foi como apoio ao **estudo** (entender tecnologias e conceitos ligados ao projeto, como NFC, Supabase e as APIs do navegador), à **revisão** de textos e código e à **busca de ideias** de direcionamento. Nenhuma ferramenta foi usada para tomar decisões sozinha: as escolhas finais foram do grupo.

## 2. Interações realizadas -- Exemplo: Geração do README.md (Claude)

**Prompt enviado:**

> crie um readme pra esse projeto. REQUISITOS: descrição do projeto, os pré-requisitos e as instruções para instalação e execução

O projeto foi enviado em `.zip`.

**Resposta obtida:** a IA leu os arquivos do projeto (`package.json`, rotas, serviços, páginas e componentes) e gerou um `README.md` com descrição, funcionalidades, tabela de rotas, tecnologias, pré-requisitos, configuração do Supabase e do EmailJS, passos de instalação e execução, scripts e estrutura de pastas.

Com o arquivo pronto, a equipe leu e deixou apenas os dados considerados importantes e necessários.

## 3. Análise crítica

**Benefícios**

- Acelerou a documentação e a implementação de funcionalidades novas (como envio de email e gravação de áudio) com uma solução simples.
- Serviu como apoio de estudo, explicando conceitos e ajudando a decidir por onde seguir.

**Limitações e dificuldades**

- A IA trabalhou só com o que estava no código: a estrutura do banco foi deduzida e precisou de conferência, e ela não consegue testar o microfone nem o fluxo real com o Supabase.
- Usar o código sem entendê-lo seria arriscado; o grupo precisou ler e entender o que foi gerado para poder manter e explicar o projeto.

**Reflexão:** a IA funcionou melhor como assistente do que como autora do projeto. Rendeu mais quando o pedido era específico e o resultado podia ser testado, e rendeu menos quando era preciso decidir algo que dependia do contexto do grupo.