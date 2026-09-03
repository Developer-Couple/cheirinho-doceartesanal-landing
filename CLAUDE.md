# CLAUDE.md

Instruções de projeto para trabalho neste repositório. Este arquivo é específico do "Cheirinho Doce Artesanal" e complementa (não substitui) as instruções globais do usuário.

## Contexto do projeto

Preview estático (HTML/CSS/JS puro, sem build) feito para apresentar uma landing page a uma cliente real de confeitaria artesanal em Lavras-MG. Ver `README.md` para stack, estrutura de pastas e comandos, e `docs/design-system.md` para o levantamento factual de tokens, componentes e decisões de identidade visual em curso.

## Convenções deste projeto

### Zero emoji como elemento visual do site

Regra de processo válida para este preview e para qualquer preview futuro de cliente feito neste fluxo de trabalho (decisão do dono do projeto, registrada em 2026-09-03):

- **Não usar emoji como substituto visual de produto, marca ou ícone decorativo** em nenhuma página, componente ou asset do site. Emoji usado dessa forma reforça a percepção de "gerado por IA" / genérico, o que é o oposto do objetivo de um preview para cliente.
- **Sempre priorizar imagens reais do estabelecimento** (fotos de produto, logo real da cliente) sobre qualquer placeholder genérico — emoji, clipart de banco de imagens, ícone de fonte genérica — porque é isso que transmite que o preview foi feito especificamente para aquele cliente, e não com um template generalista.
- Essa restrição vale para toda a extensão visual do site (header, hero, cards, footer, favicon, etc.), não apenas para a logo/wordmark. Os pontos do código que hoje ainda usam emoji como placeholder estão mapeados em `docs/design-system.md` (seção "Inventário de componentes visuais" e seção "Decisões tomadas e lacunas em aberto").
- Não se aplica a emoji usado como conteúdo de texto dentro de uma mensagem gerada para o usuário final (ex.: mensagem de WhatsApp montada em `js/pedido.js`) — isso é conteúdo de mensagem, não elemento de UI do site.
- A escolha de qual asset real substitui cada emoji específico (qual foto, em qual crop, em qual componente) é decisão de identidade visual do mentor técnico do projeto, não deste documento — ver `docs/design-system.md` para o estado dessas decisões.

## Onde registrar decisões de identidade visual

Decisões e pendências sobre paleta, tipografia, logo e tratamento de imagens ficam em `docs/design-system.md`, não neste arquivo. Ao concluir uma decisão de IDV, atualize aquele documento em vez de duplicar o registro aqui.
