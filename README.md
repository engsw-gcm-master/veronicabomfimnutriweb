📚 GUIA DE USO — SITE VERÔNICA BOMFIM
=====================================

## 🎨 GUIA DE MARCA

Este site segue o **Guia de Marca Verônica Bomfim - Nutri Designs**.

### 📐 Paleta de Cores Oficial

| Cor | Código | Uso |
|---|---|---|
| Verde Escuro | `#394233` | Títulos, nav, backgrounds principais |
| Marrom Quente | `#bf9566` | Destaque, tags, divisores, botões hover |
| Bege Claro | `#ecd7ba` | Backgrounds secundários, ícones |
| Fundo Claro | `#FAF9F7` | Fundo principal do site |
| Branco | `#ffffff` | Texto em fundo escuro |

### 🔤 Tipografia Oficial

- **Playfair Display** (600) - Títulos h1, h2
- **TT Norms** (400) - Corpo de texto, parágrafos, labels
- **Nesans** - Alternativo (não implementado, usamos TT Norms)

### 🎯 Identidade Visual

- **Logo**: Círculo com monograma "VB" em marrom
- **Símbolo**: Duas folhas minimalistas
- **Estilo**: Elegante, clean, sofisticado
- **Tom**: Naturalidade com toque de luxo

```
veronicabomfim/
├── index.html                    ← ARQUIVO PRINCIPAL (abra este)
├── css/
│   └── estilos.css              ← ESTILOS (cores, fontes, layouts)
├── js/
│   └── scripts.js               ← JAVASCRIPT (animações, menu mobile)
├── imagens/
│   └── foto-veronica.jpeg       ← SUA FOTO
└── secoes/                      ← CONTE ÚDOS DINÂMICOS
    ├── servicos/
    │   └── lista-servicos.html  ← EDITE AQUI para adicionar serviços
    ├── receitas/
    │   └── lista-receitas.html  ← EDITE AQUI para adicionar receitas
    ├── blog/
    │   └── lista-posts.html     ← EDITE AQUI para adicionar posts
    └── artigos/
        └── lista-artigos.html   ← EDITE AQUI para adicionar artigos
```

---

## 🚀 COMO COMEÇAR

### 1️⃣ Abrir no VS Code
- Abra o VS Code
- Clique em "File" → "Open Folder"
- Selecione a pasta `veronicabomfim/`
- Pronto! Todo o projeto abre no painel esquerdo

### 2️⃣ Visualizar no navegador
- Clique com botão direito no `index.html`
- Escolha "Open with Live Server" (se tiver a extensão)
- OU abra direto o arquivo no navegador (duplo clique)

### 3️⃣ Fazer edições
Edite os arquivos e salve (Ctrl + S)
O navegador recarrega automaticamente com as mudanças

---

## ✏️ COMO EDITAR CADA SEÇÃO

### 📋 ADICIONAR NOVO SERVIÇO
1. Abra `secoes/servicos/lista-servicos.html`
2. Procure por "MODELO PARA NOVO SERVIÇO" (comentário)
3. Copie o bloco de código
4. Cole antes do comentário `<!-- fim servicos-grid -->`
5. Preencha com suas informações

**Exemplo:**
```html
<div class="servico-card">
  <div class="servico-icon">🔬</div>
  <h3 class="servico-titulo">Nutrição Oncológica</h3>
  <p class="servico-desc">Descrição do serviço aqui</p>
</div>
```

---

### 🍽️ ADICIONAR NOVA RECEITA
1. Abra `secoes/receitas/lista-receitas.html`
2. Procure por "MODELO PARA NOVA RECEITA"
3. Copie o bloco e edite:
   - **emoji**: 🍲 🥘 🍱 🥗 etc
   - **receita-tempo**: "15 min", "1h", etc
   - **receita-categoria**: "Café da Manhã", "Almoço", "Sobremesa", etc
   - **receita-titulo**: Nome da receita
   - **receita-desc**: Descrição curta (máx 2 linhas)

**Exemplo:**
```html
<div class="receita-card">
  <div class="receita-img">🥘<span class="receita-tempo">45 min</span></div>
  <div class="receita-body">
    <p class="receita-categoria">Almoço</p>
    <h3 class="receita-titulo">Risoto de Abóbora</h3>
    <p class="receita-desc">Leve e delicioso, ideal para almoços saudáveis.</p>
  </div>
</div>
```

---

### 📝 ADICIONAR POST NO BLOG
1. Abra `secoes/blog/lista-posts.html`
2. Procure por "MODELO PARA NOVO POST"
3. Copie e preencha:
   - **emoji**: qualquer emoji (🌱 💧 🏃 etc)
   - **tag**: Categoria do post
   - **data**: ex: "20 Abr 2025"
   - **titulo**: Título do post
   - **resumo**: Descrição (1-2 linhas)

**⚠️ IMPORTANTE:**
- O PRIMEIRO card deve ter a classe `class="artigo-card destaque"`
- Só um destaque por página

---

### 🔬 ADICIONAR ARTIGO CIENTÍFICO
1. Abra `secoes/artigos/lista-artigos.html`
2. Procure por "MODELO PARA NOVO ARTIGO"
3. Preencha da mesma forma que o blog

**Dica:** Mude a cor de fundo do emoji alterando:
```html
<div class="artigo-img" style="background: #e8f5e9;">
```

Cores sugeridas:
- Verde: `#e8f5e9`
- Roxo: `#f3e8ff`
- Amarelo: `#fff8e1`
- Azul: `#e3f2fd`

---

## 🎨 ALTERAR CORES DO SITE

1. Abra `css/estilos.css`
2. No topo, procure por `:root {`
3. Edite as variáveis:

```css
:root {
  --verde-escuro: #2d5016;      ← cor principal dos títulos
  --dourado: #c9a84c;            ← cor dos detalhes
  --creme: #faf7f2;              ← cor de fundo
  --cinza-texto: #3a3a3a;        ← cor do texto
}
```

Use um site como **colorpicker.com** para encontrar cores.

---

## 📝 ALTERAR TEXTOS PRINCIPAIS

### Título do Hero
`index.html`, procure por:
```html
<h1 class="hero-title">
  Verônica<br>
  <em>Bomfim</em><br>
  de Lima
</h1>
```

### Descrição do Hero
```html
<p class="hero-desc">
  Sua descrição aqui
</p>
```

### Seção Sobre
```html
<h2 class="secao-titulo">Nutrição com <em>ciência</em> e cuidado</h2>
```
e os parágrafos `<p>` abaixo

### Contato
Procure por `<div class="contato-item">` para alterar:
- WhatsApp: `(81) 9 9864-5846`
- Instagram: `@veronicabomfim.nutri`
- Email: `veronicabomfim.nutri@gmail.com`

---

## 📱 RESPONSIVO

O site é 100% responsivo (funciona em celular, tablet, desktop).
Teste no navegador redimensionando a janela!

---

## 🌐 PUBLICAR NO CLOUDFLARE

### Opção 1: Upload manual
1. Acesse seu painel Cloudflare
2. Vá em "Pages"
3. Faça upload de TODA a pasta `veronicabomfim/`
4. ✅ Pronto!

### Opção 2: GitHub (recomendado)
1. Crie um repositório no GitHub
2. Coloque a pasta inteira lá
3. Conecte ao Cloudflare Pages
4. Toda vez que pushar changes, o site atualiza automaticamente

---

## ⚠️ DICAS IMPORTANTES

✅ Sempre salve com **Ctrl + S**
✅ Testez no navegador após cada alteração
✅ Não mude o nome dos IDs das seções (id="servicos", etc)
✅ Mantenha a estrutura HTML igual
✅ Use emojis com moderação
✅ Descrições curtas (máx 2 linhas) ficam melhores

❌ Não delete linhas de código sem ter certeza
❌ Não mude nomes de pastas ou arquivos
❌ Não altere a tag `<script>` do final

---

## 🆘 PROBLEMAS COMUNS

**Foto não aparece:**
- Verifique se a foto está em `imagens/` com o nome correto
- No HTML use: `src="imagens/nome-da-foto.jpeg"`

**Cards não aparecem:**
- Verifique se os arquivos de seção estão no lugar certo
- Abra o navegador com F12 para ver erros no console

**Página não carrega:**
- Verifique se todos os arquivos estão nos lugares corretos
- Teste em outro navegador (Chrome, Firefox, Safari)

---

## 💡 DÚVIDAS?

Se tiver dúvidas ao editar, me mande mensagem!
Estarei feliz em ajudar. 😊

---

**Última atualização:** Abril 2025
**Versão:** 2.0
