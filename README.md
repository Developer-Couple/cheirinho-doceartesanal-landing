# Cheirinho Doce Artesanal

Landing page institucional de uma doceria artesanal, desenvolvida com foco em conversão de visitantes em pedidos via WhatsApp e em práticas básicas de SEO on-page.

## Demonstração

| Página | URL |
| --- | --- |
| Landing page | https://camilasnasc.github.io/cheirinho-doceartesanal-landing/ |
| Monte seu pedido | https://camilasnasc.github.io/cheirinho-doceartesanal-landing/pedido/ |

## Funcionalidades

- **Página principal:** apresentação da marca, diferenciais, cardápio e chamadas para ação (CTAs) direcionadas ao WhatsApp em múltiplos pontos da jornada (header, hero, cardápio, seção final e botão flutuante).
- **Monte seu pedido:** página independente em que o cliente seleciona produtos e quantidades, informa nome, data desejada e observações, e envia o pedido já formatado para o WhatsApp com um único clique — sem necessidade de digitação manual.
- **SEO básico:** meta tags de título e descrição, Open Graph, dados estruturados (`schema.org/Bakery`) e URL canônica.
- **Responsividade:** layout adaptado para desktop e dispositivos móveis, com menu de navegação retrátil.

## Tecnologias

HTML5, CSS3 e JavaScript (ES6+), sem frameworks, bibliotecas externas ou etapa de build. O projeto pode ser servido por qualquer servidor de arquivos estáticos.

## Estrutura do projeto

```
.
├── index.html         # Landing page principal (estrutura, conteúdo e SEO)
├── pedido/index.html  # Página "Monte seu pedido"
├── css/
│   ├── styles.css      # Estilos e responsividade da landing page
│   └── pedido.css      # Estilos da página de pedido
├── js/
│   ├── script.js        # Menu mobile, scroll do header, botão flutuante, animações
│   └── pedido.js        # Catálogo de produtos, carrinho e geração da mensagem
└── images/              # Imagens do site
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

O catálogo exibido em `pedido/index.html` é definido na constante `CATALOG`, no início do arquivo `js/pedido.js`. Para adicionar, remover ou renomear um item, edite esse array — cada produto possui `id`, `name` e, opcionalmente, `tag` (para destacar novidades).

## Configuração do número de WhatsApp

O número de contato aparece em múltiplos links `wa.me/...` distribuídos por `index.html` e `pedido/index.html` (header, seções de CTA, rodapé e botão flutuante). Para atualizá-lo, procure por `5535992200328` e substitua em todas as ocorrências.
