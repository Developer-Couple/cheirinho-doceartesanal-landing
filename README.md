# Cheirinho Doce Artesanal

Landing page de conversão para uma doceria artesanal, com foco em pedidos pelo WhatsApp e SEO básico.

🔗 **Site no ar:** https://camilasnasc.github.io/cheirinho-doceartesanal-landing/

## Stack

HTML, CSS e JavaScript puros (sem frameworks, sem build).

```
.
├── index.html       # estrutura da página e SEO (meta tags, JSON-LD)
├── css/styles.css   # estilos e responsividade
├── js/script.js     # menu mobile, scroll, botão flutuante do WhatsApp
└── images/          # imagens do site
```

## Como rodar localmente

Não precisa instalar nada. Basta abrir `index.html` no navegador, ou subir um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Como publicar alterações

O site é publicado via **GitHub Pages**, a partir da branch `main`. Basta commitar e dar `git push` — o site atualiza sozinho em cerca de 1 minuto:

```bash
git add .
git commit -m "sua mensagem"
git push
```

## Configuração do WhatsApp

O número de contato aparece em vários links `wa.me/...` espalhados pelo `index.html` (header, hero, cardápio, CTA final, rodapé e botão flutuante). Para trocar o número, procure por `5535992200328` e substitua em todas as ocorrências.
