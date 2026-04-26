# ❓ FAQ — PERGUNTAS FREQUENTES

Respostas rápidas para suas dúvidas mais comuns.

---

## SOBRE O SITE

### P: Posso editar o site por conta própria?
**R:** Sim! O site foi feito especialmente para você editar no VS Code. Basta seguir o guia README.md.

### P: Quanto custa manter o site online?
**R:** Com Cloudflare Pages é 100% **GRATUITO**. Sem taxas mensais.

### P: Como atualizo o site após publicar?
**R:** Se usar GitHub: Edite e faça push. Site atualiza sozinho em 2-3 minutos.  
Se fez upload simples: Faça upload novamente no Cloudflare.

### P: Posso usar meu próprio domínio?
**R:** Sim! Você pode apontar veronicabomfim.com.br para o Cloudflare Pages.

### P: O site é seguro para dados de pacientes?
**R:** O site não armazena dados (apenas lê). Para segurança extra, não coloque informações sensíveis em campos públicos. Use email privado para documentos.

---

## EDIÇÃO DO SITE

### P: Como adiciono uma nova receita?
**R:** Abra `secoes/receitas/lista-receitas.html`, procure por "MODELO PARA NOVA RECEITA", copie o bloco, edite com seus dados e salve.

### P: Posso mudar as cores do site?
**R:** Sim! Abra `css/estilos.css`, vá até `:root {` e mude os códigos de cor (ex: #394233).

### P: Como mudo a foto de perfil?
**R:** 1. Coloque a foto em `imagens/`  
2. Mude o nome do arquivo em `index.html` (procure por src="imagens/")

### P: Posso adicionar mais seções?
**R:** Sim! Copie uma seção existente, crie uma pasta nova em `secoes/`, e adicione o código no `index.html`.

### P: As mudanças aparecem no site imediatamente?
**R:** Se usar GitHub: em 2-3 minutos.  
Se editar localmente no VS Code: recarregue a página (F5).

---

## MARKETING & SEO

### P: Quanto tempo até aparecer no Google?
**R:** Normalmente 2-4 semanas para indexar. 2-6 meses para ranking bom em palavras-chave.

### P: Como aumento meu Instagram?
**R:** Poste consistentemente (3-4x/semana), use hashtags relevantes, interaja com seguidores e coloque link do site na bio.

### P: Devo fazer publicidade paga?
**R:** Não é obrigatório, mas ajuda! Instagram Ads: comece com R$ 20-50/dia.

### P: Qual é a melhor hora para postar?
**R:** Terça a quinta-feira, entre 11-13h e 19-21h. Teste e veja qual funciona para você.

---

## CLOUDFLARE & PUBLICAÇÃO

### P: Qual é o link do meu site?
**R:** Será algo como `https://veronicabomfim.pages.dev` ou seu domínio personalizado.

### P: Posso ver quantos visitantes tive?
**R:** Sim! No painel Cloudflare Pages, vá em "Analytics".

### P: Como faço backup do meu site?
**R:** Guarde a pasta `veronicabomfim` no seu PC. Se usar GitHub, tudo está salvo lá também.

### P: O site fica offline às vezes?
**R:** Muito raramente! Cloudflare tem 99.9% uptime. Seu site fica online 24/7.

### P: Posso ver o histórico de mudanças?
**R:** Se usar GitHub, sim! Ele guarda histórico de todas as alterações.

---

## RECEITAS & CONTEÚDO

### P: Como adiciono um novo artigo no blog?
**R:** Abra `secoes/blog/lista-posts.html` ou `secoes/artigos/lista-artigos.html`, copie um card existente e edite.

### P: Quantas receitas/posts devo ter?
**R:** Comece com 5-10 receitas. Blog: mínimo 3 posts (para SEO contar). Adicione 1-2 novos por mês.

### P: Posso colocar fotos nas receitas?
**R:** Atualmente os emojis aparecem. Para fotos, seria necessário editar CSS (mais avançado).

### P: Os posts são automáticos?
**R:** Você edita manualmente os arquivos HTML. Podem ser convertidos em automáticos se aprender API.

---

## CELULAR & RESPONSIVIDADE

### P: O site funciona em celular?
**R:** Sim! 100% responsivo. Testamos em todos os tamanhos de tela.

### P: Por que algo parece diferente no celular?
**R:** O CSS muda automaticamente em telas pequenas. Isso é intencional para melhor experiência.

### P: Posso ver o site no celular enquanto edito?
**R:** Sim! Abra em um navegador e redimensione a janela (F12 + "Device Toolbar").

---

## SEGURANÇA & PRIVACIDADE

### P: O formulário de contato funciona?
**R:** O formulário abre WhatsApp automaticamente (sem servidor). Para coletar dados por email, use Formspree ou similar.

### P: Meus dados estão seguros?
**R:** Sim! Cloudflare oferece encriptação HTTPS grátis em qualquer site.

### P: Posso coletar email de visitantes?
**R:** Sim, com ferramentas como Mailchimp, Typeform ou Formspree (integradas ao site).

### P: Como protejo minhas informações pessoais?
**R:** Não coloque CPF, RG ou dados bancários no site público. Use apenas WhatsApp para esses dados.

---

## PERFORMANCE & VELOCIDADE

### P: Por que meu site é rápido?
**R:** Cloudflare usa CDN global (servidores distribuídos) que entrega seu site rápido para qualquer lugar.

### P: Como torno o site ainda mais rápido?
**R:** Comprima imagens grandes (máx 500KB), use WebP, minimize CSS/JS. Seu site já está otimizado! ✓

### P: Quanto bandwidth posso usar?
**R:** Cloudflare oferece bandwidth ilimitado! Sem limite de tráfego.

---

## CUSTOMIZAÇÃO AVANÇADA

### P: Posso adicionar um chatbot?
**R:** Sim! Use Tidio, ManyChat ou similar (integração com JS).

### P: Posso vender algo no site?
**R:** Sim! Integre Stripe, PayPal ou Hotmart para cursos/ebooks.

### P: Posso usar bancos de dados?
**R:** Não diretamente no Cloudflare Pages (é estático). Use Firebase, Supabase ou similar.

### P: Posso adicionar um login?
**R:** Precisa de backend. Use Auth0 ou Firebase Authentication.

---

## DÚVIDAS TÉCNICAS

### P: O que é VS Code?
**R:** É um editor de texto gratuito e fácil para editar código. Baixe em code.visualstudio.com

### P: Preciso saber HTML/CSS/JS?
**R:** Não! Os arquivos já estão prontos. Você só copia e cola para adicionar conteúdo.

### P: O que é Git/GitHub?
**R:** É um sistema para guardar e compartilhar código. Opcional, mas recomendado para backup.

### P: Como vejo erros no navegador?
**R:** Aperte F12 para abrir "Desenvolvedor", vá em "Console" para ver erros.

---

## PROBLEMAS COMUNS

### P: Receita/post não aparece no site
**R:** Verifique se:
- ✓ Arquivo está na pasta correta
- ✓ Nome da pasta está certo
- ✓ HTML está correto (sem erros)
- ✓ Você salvou o arquivo

### P: Foto não aparece
**R:** Verifique:
- ✓ Foto está em `imagens/`
- ✓ Caminho no HTML está correto: `src="imagens/nome.jpeg"`
- ✓ Nome do arquivo tem extensão (.jpeg, .jpg, .png)

### P: Cores estão erradas
**R:** Verifique `css/estilos.css`:
- ✓ Códigos de cor corretos (ex: #394233)
- ✓ Nomes de variáveis corretos
- ✓ Sem erros de digitação

### P: Menu não funciona em mobile
**R:** Isso seria um bug. Teste em navegador diferente ou limpe cache (Ctrl+Shift+Delete).

### P: Site não carrega
**R:** Tente:
- ✓ Recarregar página (F5)
- ✓ Limpar cache (Ctrl+Shift+Delete)
- ✓ Usar navegador diferente
- ✓ Verificar conexão internet

---

## SUPORTE TÉCNICO

### P: Onde posso pedir ajuda?
**R:** 
1. Leia os guias (README.md, COMECE-AQUI.md)
2. Procure em GUIA-MARCA-COMPLETO.md
3. Tire print da erro e pesquise no Google
4. Contate desenvolvedor para bugs críticos

### P: Posso contratar alguém para ajudar?
**R:** Sim! Procure por "desenvolvedor web" no Fiverr, Upwork ou hired.

### P: O site vem com suporte?
**R:** Sim! Tenho documentação completa. Erros técnicos do Cloudflare, contate suporte.cloudflare.com

---

## PRÓXIMOS PASSOS

### Curto Prazo (1-2 semanas)
- [ ] Configure Cloudflare
- [ ] Publique o site
- [ ] Teste em celular
- [ ] Compartilhe no WhatsApp

### Médio Prazo (1-3 meses)
- [ ] Configure Google Search Console
- [ ] Crie Google Business
- [ ] Poste no Instagram
- [ ] Acompanhe analytics

### Longo Prazo (3-6 meses)
- [ ] Adicione mais conteúdo
- [ ] Otimize para SEO
- [ ] Aumente presença online
- [ ] Analise resultados

---

## 📞 CONTATOS ÚTEIS

| Serviço | Link | Uso |
|---|---|---|
| Cloudflare | cloudflare.com | Hospedagem |
| GitHub | github.com | Backup |
| Google Search | search.google.com | SEO |
| Google Business | business.google.com | Maps |
| Mailchimp | mailchimp.com | Email |
| Formspree | formspree.io | Formulários |

---

## ✨ VOCÊ CONSEGUE!

Esse site foi feito para ser **FÁCIL DE EDITAR**. 

Não precisa ser programadora! Basta seguir os guias e copiar/colar.

**Qualquer dúvida**: Releia o README.md 😊

---

**Versão:** 1.0  
**Última atualização:** Abril 2025
