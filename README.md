# Cheirinho Doce Artesanal

Landing page institucional de uma doceria artesanal, desenvolvida com foco em conversão de visitantes em pedidos via WhatsApp e em práticas básicas de SEO on-page.

## Demonstração

| Página | URL |
| --- | --- |
| Landing page | https://camilasnasc.github.io/cheirinho-doceartesanal-landing/ |
| Monte seu pedido | https://camilasnasc.github.io/cheirinho-doceartesanal-landing/#pedido |

## Funcionalidades

- **Página principal:** apresentação da marca, diferenciais, cardápio e chamadas para ação (CTAs) direcionadas ao WhatsApp em múltiplos pontos da jornada (header, hero, cardápio, seção final e botão flutuante).
- **Monte seu pedido:** seção da própria landing page (ativada via hash `#pedido`, com roteamento simples em JavaScript) em que o cliente seleciona produtos e quantidades, informa nome, data desejada e observações, e envia o pedido já formatado para o WhatsApp com um único clique — sem necessidade de digitação manual. A antiga página `pedido/index.html` agora é apenas um redirecionamento para essa seção, mantido para não quebrar links externos já compartilhados.
- **SEO básico:** meta tags de título e descrição, Open Graph, dados estruturados (`schema.org/Bakery`) e URL canônica.
- **Responsividade:** layout adaptado para desktop e dispositivos móveis, com menu de navegação retrátil.

## Tecnologias

HTML5, CSS3 e JavaScript (ES6+), sem frameworks, bibliotecas externas ou etapa de build. O projeto pode ser servido por qualquer servidor de arquivos estáticos.

## Estrutura do projeto

```
.
├── index.html         # Landing page (SEO, conteúdo e a seção "Monte seu pedido", ativada via #pedido)
├── pedido/index.html  # Stub de redirecionamento para index.html#pedido (compatibilidade com links antigos)
├── css/
│   ├── styles.css      # Estilos e responsividade da landing page
│   └── pedido.css      # Estilos da seção "Monte seu pedido"
├── js/
│   ├── script.js        # Menu mobile, scroll do header, botão flutuante, animações, roteamento SPA (#pedido)
│   └── pedido.js        # Catálogo de produtos, carrinho e geração da mensagem
├── assets/img/          # Imagens do site (fotos de produto, logo e favicons gerados)
└── docs/
    └── design-system.md # Retrato do design atual (tokens, componentes, assets), base para decisões de identidade visual
```

## Executando localmente

O projeto não depende de instalação de pacotes. Para visualizar localmente, sirva a pasta com qualquer servidor HTTP simples:

```bash
python3 -m http.server 8000
```

Em seguida, acesse `http://localhost:8000`.

## Publicação (Deploy)

O site é publicado via **GitHub Pages**, a partir da branch `main`. Qualquer alteração enviada para essa branch é publicada automaticamente em cerca de um minuto:

```bash
git add .
git commit -m "sua mensagem"
git push
```

## Manutenção do catálogo de pedidos

O catálogo exibido na seção "Monte seu pedido" (`#pedido`, dentro de `index.html`) é definido na constante `CATALOG`, no início do arquivo `js/pedido.js`. Para adicionar, remover ou renomear um item, edite esse array — cada produto possui `id`, `name` e, opcionalmente, `tag` (para destacar novidades).

## Configuração do número de WhatsApp

O número de contato aparece em múltiplos links `wa.me/...` e na constante `WHATSAPP_NUMBER` de `js/pedido.js`, distribuídos por `index.html` (header, seções de CTA, rodapé e botão flutuante). Para atualizá-lo, procure por `5535992200328` e substitua em todas as ocorrências.
