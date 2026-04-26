# 🌐 GUIA COMPLETO — PUBLICAR NO CLOUDFLARE PAGES

Aqui está o passo a passo completo para colocar seu site online no Cloudflare Pages.

---

## OPÇÃO 1️⃣ — UPLOAD SIMPLES (5 MINUTOS)

### Pré-requisitos
- Ter uma conta no **cloudflare.com**
- Estar logado no painel

### Passo 1: Acessar Cloudflare Pages
1. Vá para **https://dash.cloudflare.com**
2. Clique em "**Pages**" na barra lateral esquerda
3. Clique em "**Create a project**"

### Passo 2: Fazer Upload
1. Selecione "**Upload assets**"
2. Clique em "**Create project**"

### Passo 3: Enviar Arquivos
1. Na tela, arraste a **pasta inteira `veronicabomfim`** para dentro da zona de upload
2. OU clique para selecionar arquivos e escolha todos os arquivos e pastas

### Passo 4: Aguardar
- Cloudflare vai fazer upload de todos os arquivos
- Você verá uma barra de progresso
- Quando terminar, receberá um link tipo: `https://seu-projeto.pages.dev`

### Passo 5: Pronto!
- Seu site está online! 🎉
- Compartilhe o link com quem quiser

---

## OPÇÃO 2️⃣ — COM GITHUB (RECOMENDADO - ATUALIZAÇÕES AUTOMÁTICAS)

### Por que usar GitHub?
✅ Atualizações automáticas quando você faz mudanças  
✅ Histórico de versões  
✅ Colaboração em equipe  
✅ Backup automático  
✅ Muito mais profissional  

### Pré-requisitos
- Conta no **github.com** (crie se não tiver)
- Conta no **cloudflare.com**

---

## PASSO A PASSO — GITHUB + CLOUDFLARE

### 1. Criar Repositório no GitHub

1. Vá para **https://github.com/new**
2. Preencha:
   - **Repository name**: `veronicabomfim`
   - **Description**: "Site da Verônica Bomfim - Nutricionista Funcional Oncológica"
   - **Visibility**: Public (para Cloudflare acessar)
   - Deixe as outras opções padrão
3. Clique em "**Create repository**"

### 2. Fazer Upload dos Arquivos

**Opção A: Via Site do GitHub (mais fácil)**
1. Na página do repositório, clique em "**Add file**" → "**Upload files**"
2. Arraste a pasta `veronicabomfim` inteira (ou todos os arquivos)
3. Role para baixo e clique em "**Commit changes**"

**Opção B: Via Git (linha de comando)**
```bash
# Se tem Git instalado no PC
cd caminho/para/veronicabomfim
git init
git add .
git commit -m "Upload inicial do site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/veronicabomfim.git
git push -u origin main
```

### 3. Conectar ao Cloudflare Pages

1. Vá para **https://dash.cloudflare.com**
2. Clique em "**Pages**"
3. Clique em "**Create a project**"
4. Selecione "**Connect to Git**"
5. Clique em "**Connect GitHub**"
6. Autorize o Cloudflare a acessar seu GitHub
7. Selecione o repositório "**veronicabomfim**"

### 4. Configurar Build (Importante!)

Na tela de configuração:
- **Project name**: `veronicabomfim` (ou outro nome)
- **Production branch**: `main`
- **Build settings**: 
  - Deixe vazio (não precisa compilar, é HTML puro)
- **Build output directory**: `/` (raiz do repositório)

### 5. Deploy!

Clique em "**Save and Deploy**"

Cloudflare vai:
- Puxar seus arquivos do GitHub
- Fazer deploy automático
- Fornecer um link do tipo: `https://veronicabomfim.pages.dev`

---

## ✅ VERIFICAR SE ESTÁ ONLINE

1. Clique no link do seu site
2. Verifique se:
   - ✅ Página carrega normalmente
   - ✅ Foto aparece
   - ✅ Cores estão corretas
   - ✅ Menu funciona
   - ✅ Botões funcionam
   - ✅ Formulário abre WhatsApp

---

## 🔄 ATUALIZAÇÕES FUTURAS

### Se usou GitHub:
Toda vez que você faz mudanças:
1. Salve os arquivos no VS Code
2. Faça upload para GitHub (via site ou git)
3. Cloudflare faz redeploy automático (2-3 minutos)
4. Site atualiza sozinho! 

### Se fez upload simples:
1. Faça as mudanças locais
2. Vá ao Cloudflare Pages
3. Clique em "**Re-upload assets**"
4. Selecione novamente a pasta
5. Pronto!

---

## 🎯 USAR DOMÍNIO PERSONALIZADO

### Com domínio próprio:
1. Vá ao Cloudflare
2. Clique em seu projeto
3. Vá em "**Settings**" → "**Custom domains**"
4. Clique em "**Setup nameservers**"
5. Siga as instruções
6. Aponte seu domínio para Cloudflare

### Exemplo:
- Domínio: `veronicabomfim.com.br`
- Será servido pelo Cloudflare Pages
- Automaticamente com HTTPS

---

## 🔐 SEGURANÇA AUTOMÁTICA

Cloudflare Pages oferece:
- ✅ HTTPS grátis (todos os sites)
- ✅ DDoS protection
- ✅ Firewall automático
- ✅ CDN global (site rápido em qualquer lugar)
- ✅ Cache automático

**Não precisa fazer nada — vem tudo automático!**

---

## 🆘 TROUBLESHOOTING

### Foto não aparece após publicar
- Verifique se a foto está em `imagens/`
- Verifique o nome exato do arquivo
- Verifique o path no HTML: `src="imagens/nome.jpeg"`

### Seções (receitas, blog) não aparecem
- Verifique se os arquivos estão em `secoes/`
- Verifique os nomes das pastas
- Verifique a estrutura: `secoes/receitas/lista-receitas.html`

### Site carrega lento
- Deixe o Cloudflare fazer cache (automático)
- Espere 24h para cache global
- Comprima imagens grandes

### Erros 404
- Verifique se todos os arquivos foram enviados
- Verifique maiúsculas/minúsculas em nomes de arquivos
- Limpe cache do navegador (Ctrl + Shift + Delete)

---

## 📊 MONITORAMENTO

Após publicar, você pode:
1. Acompanhar visitors no Cloudflare
2. Ver erros e avisos
3. Monitorar performance
4. Ver análise de tráfego

---

## 🎉 PRONTO!

Seu site está online! 

Agora você pode:
- ✅ Compartilhar o link
- ✅ Adicionar no WhatsApp bio
- ✅ Colocar no Instagram
- ✅ Divulgar nas redes sociais

---

## 📝 CHECKLIST FINAL

- [ ] Arquivos enviados para Cloudflare
- [ ] Site acessível via link
- [ ] Foto aparece corretamente
- [ ] Cores estão corretas
- [ ] Menu funciona
- [ ] Botões funcionam
- [ ] WhatsApp redireciona corretamente
- [ ] Responsivo (testado no celular)

---

## 💡 DICAS FINAIS

1. **Backup**: Guarde a pasta `veronicabomfim` no seu computador
2. **GitHub**: Use GitHub para ter segurança extra e histórico
3. **Atualizações**: Sempre teste localmente antes de publicar
4. **Performance**: Comprima imagens grandes (máx 500KB)
5. **Manutenção**: Revise conteúdo mensalmente

---

**Suporte Cloudflare:** https://support.cloudflare.com  
**Status do site:** https://status.cloudflare.com  
**Documentação:** https://developers.cloudflare.com/pages

Bom luck! 🚀
