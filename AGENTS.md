# AGENTS.md — Site Verônica Bomfim Nutrição

## Visão Geral

Site estático simples (HTML/CSS/JS) para nutricionista. Sem ferramentas de build, sem package.json, sem testes automatizados.

## Comandos

Não há comandos de build, lint ou teste. Para desenvolvimento local, abra o `index.html` direto no navegador ou use extensão "Live Server" no VS Code.

## Arquitetura

- **`index.html`** — Arquivo principal. Carrega conteúdo dinamicamente via JavaScript (`fetch`) dos arquivos na pasta `secoes/`
- **`secoes/`** — Conteúdo modular carregado dinamicamente:
  - `servicos/lista-servicos.html` — Cards de serviços
  - `receitas/lista-receitas.html` — Cards de receitas
  - `blog/lista-posts.html` — Posts do blog
  - `artigos/lista-artigos.html` — Artigos científicos
  - `ebook/lista-ebook.html` — Seção do eBook
- **`css/estilos.css`** — Estilos únicos (não há múltiplos arquivos CSS)
- **`js/scripts.js`** — Scripts mínimos (menu mobile + animações)

## Carregamento Dinâmico

O `index.html` usa `fetch()` para carregar HTMLs parciais da pasta `secoes/`. Ao editar esses arquivos, as mudanças aparecem automaticamente no site. Não há sistema de templates ou build.

## Cadastro de Emails (eBook)

O formulário de "Quero ser avisado" usa **Formsubmit** (`formsubmit.co`) para enviar emails para `veronicabomfim.nutri@gmail.com`. Os dados não ficam no repositório.

- Arquivo `.gitignore` protege `emails.txt` (caso venha a ser usado)
- Popup modal implementado no `index.html` (procure por `popupEbook`)

## Cores e Estilo

Cores definidas como variáveis CSS em `estilos.css` (`:root`) e documentadas em `config.json`. Seguir a paleta oficial:
- Verde Escuro: `#394233`
- Marrom Quente: `#bf9566`
- Bege Claro: `#ecd7ba`

## Deploy

Site hospedado via **Cloudflare Pages**. Pode ser conectado ao GitHub para deploy automático (push = deploy).

## Arquivos de Configuração

- `config.json` — Metadados do site (não afeta funcionamento, apenas documentação)
- `README.md` — Guia de uso com instruções detalhadas para edição manual

## Pontos de Atenção

- Não renomear IDs de seções no `index.html` (ex: `id="servicos"`) — o JavaScript depende deles
- Ao adicionar novos cards em `secoes/`, seguir a estrutura HTML existente
- Popups (eventos e eBook) são implementados inline no `index.html` com CSS e JS inline

## Regras de Deploy

- **NUNCA** fazer push para o GitHub sem autorização explícita do usuário
- Sempre aguardar o usuário testar as alterações localmente antes de subir para o repositório
- O usuário avisará quando a versão deve ser enviada ao GitHub
