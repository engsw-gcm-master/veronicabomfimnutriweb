# 📈 GUIA DE SEO — OTIMIZAR PARA GOOGLE

Aprenda como fazer seu site aparecer nos resultados do Google.

---

## O QUE É SEO?

**SEO** (Search Engine Optimization) = Otimização para mecanismos de busca.

É um conjunto de práticas para melhorar o ranking do seu site no Google, Bing, etc.

---

## META TAGS IMPORTANTES

Meta tags são códigos que você coloca no `<head>` do HTML. Elas informam ao Google informações sobre seu site.

### Onde Colocar?

No arquivo `index.html`, entre as tags `<head> </head>`, adicione:

```html
<!-- SEO Básico -->
<meta name="description" content="Nutricionista funcional oncológica em Recife. Especializada em nutrição clínica para pacientes com câncer.">
<meta name="keywords" content="nutricionista, nutrição oncológica, Recife, nutrição funcional, câncer">
<meta name="author" content="Verônica Bomfim">
<meta name="robots" content="index, follow">
<meta name="language" content="Portuguese (Brazilian)">

<!-- Open Graph (redes sociais) -->
<meta property="og:title" content="Verônica Bomfim | Nutricionista Funcional Oncológica">
<meta property="og:description" content="Especializada em nutrição clínica para tratamento do câncer">
<meta property="og:type" content="website">
<meta property="og:url" content="https://seu-site.com">
<meta property="og:image" content="https://seu-site.com/imagens/foto-veronica.jpeg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Verônica Bomfim | Nutricionista">
<meta name="twitter:description" content="Nutricionista funcional oncológica em Recife">
<meta name="twitter:image" content="https://seu-site.com/imagens/foto-veronica.jpeg">

<!-- Canonical (evitar conteúdo duplicado) -->
<link rel="canonical" href="https://seu-site.com">

<!-- Favicon -->
<link rel="icon" type="image/png" href="imagens/foto-veronica.jpeg">
```

---

## ESTRUTURA HTML PARA SEO

### Títulos (H1, H2, H3)

**✅ Correto:**
```html
<h1>Verônica Bomfim - Nutricionista Funcional Oncológica</h1>
<h2>Nutrição Clínica Oncológica</h2>
<h3>Serviços de Nutrição Especializada</h3>
```

**❌ Incorreto:**
```html
<h1>Home</h1>
<h1>Bem-vindo</h1>
<h1>Título genérico</h1>
```

**Dicas:**
- Use apenas 1 H1 por página
- Coloque H1 no topo
- Use H2 para seções principais
- Use H3 para subsecções

### Alt Text em Imagens

```html
<!-- ✅ Bom -->
<img src="foto-veronica.jpeg" alt="Verônica Bomfim, nutricionista funcional oncológica em Recife">

<!-- ❌ Ruim -->
<img src="foto-veronica.jpeg">
<img src="foto.jpg" alt="foto">
```

---

## PALAVRAS-CHAVE IMPORTANTES

### Para Verônica Bomfim:

**Principais:**
- Nutricionista Recife
- Nutrição Oncológica
- Nutrição Funcional
- Nutricionista Funcional Oncológica
- Nutrição para Câncer

**Secundárias:**
- Consulta Nutricional Recife
- Nutricionista Online
- Emagrecimento Saudável
- Nutrição Clínica
- Oncologia Nutricional

**Longas (Long Tail):**
- "Nutricionista especializada em câncer Recife"
- "Nutrição funcional para pacientes oncológicos"
- "Consulta nutricionista online Pernambuco"
- "Nutrição clínica aplicada ao tratamento do câncer"

### Como Usar?
1. Use na descrição da página
2. Use nos títulos (H1, H2)
3. Use nos textos (1-2 vezes por página)
4. Use em alt text de imagens
5. Use em links internos

---

## ESTRUTURA DO SITE PARA SEO

### URLs Amigáveis

**✅ Bom:**
```
https://seu-site.com/receitas
https://seu-site.com/blog/nutriacao-oncologica
https://seu-site.com/sobre
```

**❌ Ruim:**
```
https://seu-site.com/?p=123
https://seu-site.com/index.php?id=456
https://seu-site.com/pagina1
```

### Links Internos

Sempre linke para outras páginas do seu site:

```html
<!-- ✅ Bom -->
<a href="#receitas">Ver receitas</a>
<a href="#servicos">Conheça meus serviços</a>

<!-- Acrescente em blogs/artigos -->
<p>Veja também nosso artigo sobre <a href="#blog">nutrição oncológica</a></p>
```

---

## CONTEÚDO OTIMIZADO

### Para Cada Página

**Página Principal:**
- Título claro: "Verônica Bomfim - Nutricionista Funcional Oncológica"
- Descrição com palavras-chave
- Foto de qualidade
- CTAs (botões de ação) claros

**Seção Sobre:**
- História pessoal (pessoas gostam)
- Credenciais e certificações
- Especializações
- Diferenciais

**Seção Serviços:**
- Descrição clara de cada serviço
- Benefícios
- Público-alvo
- CTA para agendar

**Blog/Artigos:**
- Títulos com palavras-chave
- Conteúdo longo (mín 300 palavras)
- Imagens com alt text
- Links internos

---

## VELOCIDADE DO SITE

Google prioriza sites rápidos!

### Dicas para Velocidade:

1. **Comprimir Imagens**
   - Use ferramentas como TinyPNG.com
   - Máximo 500KB por imagem
   - Formato WebP é mais rápido

2. **Usar CDN**
   - Cloudflare Pages já faz isso! ✅

3. **Minimizar CSS/JS**
   - Seu arquivo está otimizado ✅

4. **Cache do Navegador**
   - Cloudflare cuida disso ✅

### Testar Velocidade:
- **Google PageSpeed**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **Lighthouse**: Integrado no Chrome DevTools (F12)

---

## MOBILE FIRST

Google prioriza versão mobile!

**Verificar:**
- [ ] Site funciona em celular
- [ ] Texto é legível (mín 16px)
- [ ] Botões grandes para tocar (mín 48px)
- [ ] Menu funciona em mobile
- [ ] Imagens redimensionam
- [ ] Sem scroll horizontal

**Testar:**
1. Abra seu site em celular
2. Ou aperte F12 no PC e mude para "Device Toolbar"

---

## SCHEMA MARKUP

Schema é um código especial que ajuda Google entender seu site melhor.

### Para Nutricionista:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  "name": "Verônica Bomfim",
  "image": "https://seu-site.com/imagens/foto-veronica.jpeg",
  "description": "Nutricionista funcional oncológica em Recife",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Recife",
    "addressLocality": "Recife",
    "addressRegion": "PE",
    "postalCode": "00000-000",
    "addressCountry": "BR"
  },
  "telephone": "(81) 9 9864-5846",
  "email": "veronicabomfim.nutri@gmail.com",
  "url": "https://seu-site.com",
  "sameAs": ["https://instagram.com/veronicabomfim.nutri"],
  "priceRange": "$$",
  "areaServed": ["Recife", "Pernambuco", "Brasil"]
}
</script>
```

Adicione isso antes de `</head>` no HTML.

---

## GOOGLE SEARCH CONSOLE

Indique seu site ao Google!

### Passo a passo:

1. Vá para **https://search.google.com/search-console**
2. Clique em "Adicionar propriedade"
3. Coloque URL do seu site
4. Verifique propriedade (Cloudflare faz automaticamente)
5. Envie sitemap

### Sitemap (automático para Cloudflare)

Cloudflare gera sitemap automaticamente em:
```
https://seu-site.com/sitemap.xml
```

---

## GOOGLE BUSINESS PROFILE

Para aparecer no Maps!

### Configurar:

1. Vá para **https://business.google.com**
2. Clique "Gerenciar seu perfil"
3. Preencha:
   - Nome: Verônica Bomfim
   - Categoria: Nutricionista
   - Localização: Recife, PE
   - Telefone: (81) 9 9864-5846
   - Website: seu-site.com
   - Horários de atendimento

4. Verifique a localização

Agora você aparecerá no Google Maps!

---

## CHECKLIST SEO

- [ ] Meta description preenchida
- [ ] Keywords relevantes adicionadas
- [ ] H1 único e descritivo
- [ ] Alt text em todas imagens
- [ ] Links internos adicionados
- [ ] Mobile responsivo
- [ ] Site rápido (< 3 segundos)
- [ ] URL amigável
- [ ] Open Graph meta tags
- [ ] Schema Markup adicionado
- [ ] Google Search Console configurado
- [ ] Google Business Profile criado
- [ ] Sitemap enviado
- [ ] Robots.txt correto

---

## RESULTADOS ESPERADOS

### Primeiras 2-4 Semanas:
- Site entra no índice do Google
- Apareça em buscas específicas

### 1-3 Meses:
- Aumento em posições
- Mais visitantes orgânicos
- Possíveis leads via site

### 3-6 Meses:
- Primeira página em keywords principais
- Tráfego consistente
- Mais agendamentos

---

## FERRAMENTAS ÚTEIS

| Ferramenta | Link | Uso |
|---|---|---|
| Google PageSpeed | pagespeed.web.dev | Testar velocidade |
| Ubersuggest | ubersuggest.com | Pesquisar keywords |
| Google Trends | trends.google.com | Tendências de busca |
| SEMrush | semrush.com | Análise completa (pago) |
| Yoast SEO | yoast.com | Otimização de conteúdo |

---

## ERROS COMUNS A EVITAR

❌ Não colocar meta description  
❌ Usar muitas keywords (spam)  
❌ Imagens sem alt text  
❌ Conteúdo copiado de outros sites  
❌ Links quebrados  
❌ Tempo de carregamento lento  
❌ Site não responsivo  
❌ Sem schema markup  

---

## PRÓXIMOS PASSOS

1. ✅ Implemente meta tags (acima)
2. ✅ Configure Google Search Console
3. ✅ Crie Google Business Profile
4. ✅ Teste velocidade e mobile
5. ✅ Acompanhe progresso por 3 meses

---

**Dúvidas sobre SEO?** Consulte **https://support.google.com/webmasters**

Boa sorte! 📈🚀
