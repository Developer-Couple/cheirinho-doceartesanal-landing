# Cheirinho Doce Artesanal

Landing page de conversão para uma doceria artesanal, com foco em pedidos pelo WhatsApp e SEO básico.

🔗 **Site no ar:** https://camilasnasc.github.io/cheirinho-doceartesanal-landing/

## Stack

HTML, CSS e JavaScript puros (sem frameworks, sem build).

```
.
├── index.html         # landing page principal e SEO (meta tags, JSON-LD)
├── pedido/index.html  # monte seu pedido: escolhe itens e gera mensagem de WhatsApp
├── css/styles.css     # estilos e responsividade da landing
├── css/pedido.css     # estilos específicos da página de pedido
├── js/script.js       # menu mobile, scroll, botão flutuante do WhatsApp
├── js/pedido.js       # catálogo, carrinho e geração da mensagem do pedido
└── images/            # imagens do site
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

## Página "Monte seu pedido"

`pedido/index.html` (https://camilasnasc.github.io/cheirinho-doceartesanal-landing/pedido/) é uma página independente onde a pessoa marca os produtos que quer, ajusta a quantidade e clica em enviar — o link já abre o WhatsApp com a mensagem toda montada, sem precisar digitar nada.

Ainda não há link para ela a partir da landing principal (não foi alterada). Para divulgar, use a URL acima diretamente ou adicione um link manualmente quando quiser integrar.

O catálogo de produtos fica no início do arquivo `js/pedido.js`, na constante `CATALOG` — para adicionar, remover ou renomear itens, edite esse array (cada item tem `id`, `name` e, opcionalmente, `tag`).

## Configuração do WhatsApp

O número de contato aparece em vários links `wa.me/...` espalhados pelo `index.html` (header, hero, cardápio, CTA final, rodapé e botão flutuante). Para trocar o número, procure por `5535992200328` e substitua em todas as ocorrências.
