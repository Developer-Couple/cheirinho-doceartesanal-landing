# Design System — Estado Atual

> Levantamento factual do que existe hoje no código do site "Cheirinho Doce Artesanal". Confirmado por leitura direta dos arquivos-fonte em 2026-09-03.

## 1. Propósito e escopo

Este documento **não é prescritivo**. Ele não propõe paleta nova, não propõe identidade visual, não decide o que fazer com o mascote/emoji e não recomenda tratamento de imagem. Ele existe para dar ao mentor técnico um retrato preciso do estado atual — tokens, componentes, assets — como insumo para as duas decisões pendentes do projeto:

1. Direção de identidade visual (a logo real da cliente, `assets/img/logo-temporaria.jpeg`, já foi definida como logo oficial do site — favicon e `.logo__icon`/header/footer inclusos, decisão final registrada em 6.1 item 2 —; outros pontos da identidade visual, como qual asset substitui cada emoji fora da logo, seguem em aberto, ver 6.2; ver seção 5 para o levantamento factual do asset).
2. Diretrizes de "premium" visual, antes da migração de duas páginas estáticas para SPA.

Todo dado abaixo foi confirmado lendo o código-fonte real, não apenas um levantamento anterior. Onde há uma referência `arquivo:linha`, ela foi conferida nesta revisão.

**Arquivos cobertos:**
- `css/styles.css`, `css/pedido.css`
- `index.html`, `pedido/index.html`
- `js/script.js`, `js/pedido.js`
- `assets/img/` (10 arquivos)

## 2. Tokens de design atuais

### 2.1 Cores

Definidas em `:root`, `css/styles.css:5-31`.

| Variável | Valor | Definição | Uso observado (exemplos com arquivo:linha) |
| --- | --- | --- | --- |
| `--color-primary` | `#e85d8a` (rosa) | `styles.css:6` | 14 ocorrências. Ex.: borda/texto do `.btn--outline` (`styles.css:123-124`), sublinhado do `.nav__link` (`styles.css:208`), badge do card de produto (`styles.css:459`), número do passo em "Como pedir" (`styles.css:533`), gradiente do CTA final (`styles.css:553`), checkbox e botões de quantidade da página de pedido (`pedido.css:75,82,106,138,233`) |
| `--color-primary-dark` | `#c84670` (rosa escuro) | `styles.css:7` | 8 ocorrências. Ex.: texto do eyebrow (`styles.css:255`), números das stats do hero (`styles.css:303`), link do card de produto (`styles.css:500`), outline de foco acessível (`styles.css:704`), textos de destaque na página de pedido (`pedido.css:11,127,200`) |
| `--color-secondary` | `#8a5a3c` (marrom) | `styles.css:8` | 12 ocorrências. Ex.: cor do logo no header (`styles.css:175`), fundo dos traços do menu mobile (`styles.css:235`), títulos `h1`/`h2`/`h3` de hero, seções, cards de produto e passos (`styles.css:266,381,429,487,541`), fundo do footer (`styles.css:587`) |
| `--color-bg` | `#fff8f3` (fundo geral, quase branco pêssego) | `styles.css:9` | 4 ocorrências. Fundo do `body` (`styles.css:50`), fim do gradiente do hero e do hero da página de pedido (`styles.css:242`, `pedido.css:16`), fundo dos inputs de formulário (`pedido.css:225`) |
| `--color-cream` | `#fff1e6` (creme) | `styles.css:10` | 7 ocorrências. Início do gradiente do hero (`styles.css:242`), fundo de seções alternadas `.section--alt` (`styles.css:375`), início do gradiente do "media" do card de produto (`styles.css:474`), fundo dos botões de stepper de quantidade (`pedido.css:126`) |
| `--color-text` | `#4a3226` (marrom escuro, texto principal) | `styles.css:11` | 4 ocorrências diretas. Cor de texto do `body` (`styles.css:49`), nome do link de navegação (`styles.css:196`), texto de itens do pedido (`pedido.css:99,224`). É também a base das sombras (`rgba(74, 50, 38, ...)`, ver 2.4) e de várias bordas translúcidas hardcoded (ver observação abaixo) |
| `--color-text-soft` | `#7a6559` (marrom acinzentado, texto secundário) | `styles.css:12` | 9 ocorrências: subtítulos e parágrafos de apoio em hero, seções, cards, passos e página de pedido |
| `--color-white` | `#ffffff` | `styles.css:13` | 18 ocorrências: fundo de cards, texto sobre fundos coloridos, ícone do WhatsApp flutuante |
| `--color-whatsapp` | `#25d366` (verde oficial do WhatsApp) | `styles.css:14` | Fundo do botão `.btn--whatsapp` (`styles.css:105`) e do botão flutuante (`styles.css:659`) |
| `--color-whatsapp-dark` | `#1ebc59` | `styles.css:15` | Hover do botão WhatsApp (`styles.css:112`), hover do CTA de produto (`styles.css:507`), hover do CTA final (`styles.css:575`) |

**Cores fora do sistema de tokens (hex hardcoded, não centralizadas em `:root`):**

| Valor | Onde | Contexto |
| --- | --- | --- |
| `#ffe3ef` | `styles.css:474` | Segunda cor do gradiente de fundo do `.product-card__media` (`linear-gradient(135deg, var(--color-cream), #ffe3ef)`) |
| `#ffd1e3` | `styles.css:614` | Cor do `em` dentro de `.footer__brand .logo__text` (destaque "Doce Artesanal" no logo do rodapé) |

**Cores derivadas via `rgba()` literal (não usam variável, mas replicam um token com opacidade):** presentes em pelo menos 12 pontos de `styles.css`/`pedido.css` — ex. `rgba(74, 50, 38, 0.08/0.12/0.16)` para as três sombras (deriva de `--color-text`), `rgba(255, 248, 243, 0.9/0.97)` para o fundo translúcido do header (deriva de `--color-bg`), `rgba(232, 93, 138, 0.1)` para o fundo do eyebrow (`styles.css:258`, deriva de `--color-primary`), `rgba(37, 211, 102, ...)` para sombras do botão WhatsApp (deriva de `--color-whatsapp`). Isso significa que variações de opacidade de uma mesma cor **não são centralizadas** — cada uso repete o valor RGB manualmente.

### 2.2 Tipografia

Import: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Pacifico&display=swap` (`index.html:25`, `pedido/index.html:15`).

| Token | Valor | Definição | Onde é aplicada de fato |
| --- | --- | --- | --- |
| `--font-body` | `'Poppins', sans-serif` | `styles.css:18` | Fonte padrão do `body` (`styles.css:48`) — cobre todo o texto corrido, nav, botões, cards, formulário da página de pedido. Pesos carregados: 400, 500, 600, 700 |
| `--font-heading` | `'Pacifico', cursive` | `styles.css:17` | **Usada em um único ponto de todo o código**: `.hero h1 .highlight` (`styles.css:270-274`), ou seja, apenas a palavra dentro de `<span class="highlight">adoçam</span>` no `<h1>` do hero (`index.html:80`) |

**Correção em relação ao levantamento anterior:** a logo (`.logo__text`, `styles.css:169-185` e `.footer__brand .logo__text`, `styles.css:606-615`) **não usa Pacifico**. Ela herda `--font-body` (Poppins) com `font-weight: 700`; apenas o `<em>` interno muda de cor, não de fonte. Ou seja, hoje Pacifico aparece só naquela única palavra de destaque do hero — não é usada no wordmark em nenhum lugar do código atual.

Todos os `h1`/`h2`/`h3` fora do highlight do hero usam Poppins (herdado do reset em `styles.css:70-75`, que define apenas `line-height`/`font-weight`, sem trocar família).

Tamanhos usam `clamp()` para responsividade fluida em 4 pontos: `.hero h1` (`clamp(2.1rem, 4.2vw, 3.2rem)`, `styles.css:265`), `.section__title` (`clamp(1.7rem, 3vw, 2.3rem)`, `styles.css:380`), `.cta-final h2` (`clamp(1.6rem, 3vw, 2.2rem)`, `styles.css:563`) e `.order-hero h1` (`clamp(1.7rem, 3.4vw, 2.5rem)`, `pedido.css:21`).

### 2.3 Raios de borda

| Variável | Valor | Definição | Uso observado |
| --- | --- | --- | --- |
| `--radius-sm` | `10px` | `styles.css:20` | Só nos inputs/textarea da página de pedido (`pedido.css:220`) |
| `--radius-md` | `18px` | `styles.css:21` | Cards (feature, produto, step), itens do pedido (`styles.css:409,442,522`, `pedido.css:68`) |
| `--radius-lg` | `28px` | `styles.css:22` | Só no card de resumo do pedido (`pedido.css:156`) |
| `--radius-pill` | `999px` | `styles.css:23` | Botões (`.btn`), eyebrow, badge de produto, tag de item no pedido (`styles.css:97,260,464`, `pedido.css:111`) |

### 2.4 Sombras

| Variável | Valor | Definição | Uso observado |
| --- | --- | --- | --- |
| `--shadow-sm` | `0 2px 10px rgba(74, 50, 38, 0.08)` | `styles.css:25` | Header ao rolar, feature/product cards, steps (repouso) |
| `--shadow-md` | `0 10px 30px rgba(74, 50, 38, 0.12)` | `styles.css:26` | Hover de feature/product card, menu mobile aberto, card de resumo do pedido |
| `--shadow-lg` | `0 20px 45px rgba(74, 50, 38, 0.16)` | `styles.css:27` | Só na ilustração circular do hero (`.cake-illustration`, `styles.css:327`) |

### 2.5 Transição e layout base

- `--transition: 0.25s ease` (`styles.css:30`) — usada em 12 pontos (hover de botões, header, nav, cards, stepper).
- `--header-h: 76px` (`styles.css:29`) — altura do header sticky, usada também para `scroll-padding-top` (`styles.css:44`) e para o `top` do resumo sticky da página de pedido (`pedido.css:160`, `calc(var(--header-h) + 20px)`).
- Container: `max-width: 1160px`, `padding-inline: 20px` (`styles.css:84-89`).
- Animação de revelação ao rolar: `[data-reveal]` (`styles.css:690-699`), aplicada via JS a `.feature-card`, `.product-card`, `.step` (`script.js:55-57`).
- `prefers-reduced-motion: reduce` é respeitado (`styles.css:823-838`): desliga scroll suave, animações do bolo/emojis flutuantes e a transição de revelação.

### 2.6 Breakpoints responsivos

Dois breakpoints, replicados nos dois arquivos CSS:
- `max-width: 960px` — `styles.css:712`, `pedido.css:255` (empilha grids, layout de pedido vira 1 coluna, resumo deixa de ser sticky)
- `max-width: 720px` — `styles.css:757`, `pedido.css:265` (menu mobile aparece, grids viram 1 coluna, itens do pedido quebram linha)

## 3. Inventário de componentes visuais

### 3.1 Header (`.header`, `styles.css:142-237`; markup em `index.html:48-71` e `pedido/index.html:23-34`)
Sticky, fundo translúcido com blur, ganha sombra ao rolar via classe `.header.is-scrolled` (JS em `script.js:8-15`). Contém `.logo` (ícone emoji + texto), `.nav` com links de âncora e um CTA WhatsApp (`.btn.btn--whatsapp.nav__cta`), e `.nav-toggle` (hambúrguer, visível só ≤720px). Na página de pedido, a nav vira `.nav--simple` com um único link "← Voltar ao site" — **sem CTA de WhatsApp no header dessa página**.
- **Emoji/placeholder:** `.logo__icon` = emoji 🍰 (`index.html:51`, `pedido/index.html:26`, repetido no footer). Favicon também é um emoji 🍰 embutido como SVG inline em data URI (`index.html:21`, `pedido/index.html:11`) — não é um arquivo de ícone real.

### 3.2 Hero (`.hero`, `styles.css:239-367`; markup `index.html:75-110`)
Grid de 2 colunas (1.1fr/0.9fr) com conteúdo textual (`eyebrow`, `h1` com `.highlight`, subtítulo, dois CTAs, lista de estatísticas `.hero__stats`) e uma "ilustração" à direita.
- **Emoji/placeholder:** `.hero__art` não contém nenhuma imagem — é um círculo branco (`.cake-illustration`, 280×280px desktop / 220×220px ≤960px) com um emoji de bolo gigante centralizado (`.cake-emoji`, 🍰, 8rem, com animação de flutuação) e três emojis menores orbitando (`.float-emoji`: 🍓🧁🍫), cada um com posição absoluta e delay de animação próprio (`index.html:101-108`, `styles.css:312-367`).

### 3.3 Diferenciais (`.feature-card`, `styles.css:406-436`; markup `index.html:112-139`)
Grid de 4 cards (`cards-grid--4`) com ícone, título e parágrafo.
- **Emoji/placeholder:** cada `.feature-card__icon` é um emoji solto (sem plano de fundo/moldura): 👩‍🍳 🎂 🎀 💬 (`index.html:118,123,128,133`).

### 3.4 Cardápio / cards de produto (`.product-card`, `styles.css:398-484`; markup `index.html:162-260`)
Grid de 6 cards (`cards-grid--3`). Cada card tem badge opcional ("Novidade", só no primeiro), uma área de mídia, corpo com título/descrição e um link de CTA para WhatsApp com texto pré-preenchido.
- **Mídia dos cards — correção em relação ao levantamento anterior:** os cards não usam mais emoji. `.product-card__media` (`styles.css:428-436`) hoje tem `aspect-ratio: 4/3` (não mais altura fixa de 160px) sobre fundo `var(--color-cream)`; quando há foto, um `<img>` com `object-fit: cover` preenche a área (`styles.css:437-443`). **4 dos 6 cards já usam foto real:** "Bolos de Pote" (`SaveClip.App_727364649...`, `index.html:187`), "Bolo Prestígio & Matilda" (`SaveClip.App_660376509...`, `index.html:217`), o card de docinhos/garçonetes (`SaveClip.App_722666673...`, `index.html:232`) e "Encomendas Personalizadas" (`SaveClip.App_780087797...`, `index.html:247`). **Os outros 2 cards usam um ícone SVG de traço** (`.product-card__media--icon svg`, `styles.css:448-452`), não emoji nem foto: o card com `<h3>` "Bolo Cravejado de Morango no Pote" (`index.html:179` — já renomeado para "Bolo de Fubá com Goiabada" no catálogo da página de pedido, `pedido.js:10`, mas ainda não neste `<h3>`) e o card "Bolo Naked Cake" (`index.html:213`). O dono do projeto indicou que esses dois últimos cards devem passar a usar, respectivamente, `SaveClip.App_791296411...jpg` e `SaveClip.App_753007399...jpg` (ambos já presentes em `assets/img/`, ver 5.1); até esta revisão, porém, nenhum dos dois arquivos é referenciado em `index.html`/CSS/JS — ver observação em 6.2 item 7.

### 3.5 Como pedir (`.step`, `styles.css:510-549`; markup `index.html:226-248`)
Grid de 3 passos numerados. `.step__number` é um círculo (44px, fundo `--color-primary`) com o algarismo 1/2/3 — sem emoji, é o único bloco de conteúdo da página inicial sem emoji nem placeholder de imagem.

### 3.6 CTA final (`.cta-final`, `styles.css:551-583`; markup `index.html:250-261`)
Faixa full-width com fundo em gradiente diagonal `--color-primary` → `--color-primary-dark`, texto branco centralizado e botão WhatsApp com variante de cor invertida (fundo branco).

### 3.7 Footer (`.footer`, `styles.css:585-649`; markup `index.html:265-288` e `pedido/index.html:92-113`)
Fundo sólido `--color-secondary`. Duas colunas (marca + contato) em desktop, empilha em ≤960px. Contato usa emojis como marcadores de ícone: 📱 (WhatsApp) e 📸 (Instagram) (`index.html:277,280`).
- **Emoji/placeholder:** mesmo ícone de logo (🍰) repetido; e um comentário HTML vazio reservando espaço para endereço/horário reais: `<!-- preencher com endereço/cidade e horário de atendimento reais -->` (`index.html:282`) — é um placeholder de **conteúdo**, não de estilo, mas indica que o rodapé está incompleto.

### 3.8 Botão flutuante do WhatsApp (`.whatsapp-float`, `styles.css:651-687`; markup ao fim de `index.html` e `pedido/index.html`)
Círculo fixo 58×58px no canto inferior direito, oculto por padrão (`opacity:0`, `visibility:hidden`) e revelado via classe `.is-visible` quando `window.scrollY > 400` (`script.js:44-52`, e evento equivalente também roda na página de pedido pois carrega o mesmo `script.js`). **Não usa emoji** — usa o mesmo ícone SVG inline do WhatsApp reaproveitado em todos os CTAs do site (o `<svg class="icon-wa">`, repetido literalmente em 6 lugares nos dois arquivos HTML).

### 3.9 Página "Monte seu pedido" — componentes específicos (`pedido/index.html`, `css/pedido.css`, `js/pedido.js`)
- **Hero simplificado** (`.order-hero`, `pedido.css:14-30`): texto centralizado, sem ilustração nem emoji.
- **Catálogo** (`#orderCatalog`, renderizado 100% via JS a partir da constante `CATALOG` em `pedido.js:6-37`): agrupado por categoria (`.order-category`), cada item (`.order-item`) tem checkbox (`.order-item__checkbox`), nome + tag opcional ("Novidade") e um stepper de quantidade (`.qty-stepper`, botões `−`/`+` circulares).
- Uso do seletor `:has()`: `.order-item:has(.order-item__checkbox:checked)` destaca o item selecionado com borda rosa e sombra (`pedido.css:74-77`); `.order-item:not(:has(.order-item__checkbox:checked)) .qty-stepper` esmaece e desabilita o stepper de itens não marcados (`pedido.css:148-151`).
- **Painel-resumo** (`.order-summary__card`, `pedido.css:154-161`): sticky (`top: calc(var(--header-h) + 20px)`), lista dinâmica de itens escolhidos, estado vazio com texto itálico (`.order-summary__empty`, controlado via atributo `hidden` no JS — `pedido.js:107`), campos de formulário (nome, data, observações) e botão de envio que fica `aria-disabled="true"` até haver ao menos 1 item.
- Nenhum emoji visual nesta página fora do header/footer padrão; os emojis aparecem apenas dentro do **texto da mensagem gerada** para o WhatsApp (ex.: `📅`, `📝`, `🍓` em `pedido.js:144,149,153`), o que é conteúdo de mensagem, não elemento de UI.

## 4. Paleta observada nas fotos reais vs. tokens atuais

Tabela objetiva — sem julgamento sobre se deve mudar.

| Paleta observada nas 12 fotos (`assets/img/SaveClip.App_*.jpg`) | Token CSS mais próximo | Valor do token | Observação |
| --- | --- | --- | --- |
| Marrom-chocolate escuro (ganache, brigadeiro) | `--color-secondary` | `#8a5a3c` | O marrom do token é visivelmente mais claro/acastanhado que o chocolate escuro das fotos — gap a registrar, não a resolver |
| Marrom-caramelo / madeira (tábuas, bancadas) | `--color-secondary` / `--color-text` | `#8a5a3c` / `#4a3226` | Aproximação razoável para o tom de madeira mais claro |
| Branco-creme quente (chantili, tecido) | `--color-cream` / `--color-bg` | `#fff1e6` / `#fff8f3` | Coerente |
| Rosa vivo / vermelho-morango | `--color-primary` | `#e85d8a` | Coerente como rosa, mas o vermelho-morango puro das fotos não tem token equivalente (o sistema não tem um "vermelho") |
| Cinza / branco mármore | Sem token equivalente | — | Não há nenhuma variável cinza no sistema atual (apenas `--color-white` puro) |
| Preto (aventais) | Sem token equivalente | — | Não há preto nos tokens; `--color-text` (`#4a3226`) é o valor mais escuro definido |

## 5. Inventário de assets

### 5.1 Fotos reais disponíveis (12 arquivos em `assets/img/`)

Todas `.jpg`. Duas mudanças em relação ao levantamento anterior, ambas feitas pelo dono do projeto durante esta revisão:

- `SaveClip.App_776748229_18050754194637488_8475930352453313000_n.jpg`, antes listada aqui, **não existe mais** em `assets/img/`. O dono do projeto confirmou que os ajustes na pasta de imagens durante esta revisão foram feitos por ele mesmo — trata-se de uma decisão dele, não de uma perda acidental a investigar; o motivo específico da remoção não foi detalhado.
- **Três fotos novas foram adicionadas:** `SaveClip.App_743763747_18044721734637488_6525633573413752029_n.jpg` (potinhos de cheesecake de morango), `SaveClip.App_753007399_18046303913637488_7579580762347214129_n.jpg` (bolo quadrado decorado com rosas em buttercream rosa/verde-água, sendo segurado na mão) e `SaveClip.App_791296411_18052433405637488_5164867077766678911_n.jpg` (bolo em formato de rosca/anel, massa de fubá com cobertura de açúcar de confeiteiro).

| Arquivo | Dimensões (px) | Proporção |
| --- | --- | --- |
| `SaveClip.App_660376509_18030790445637488_6984567225383814901_n.jpg` | 1365×1820 | ~3:4 |
| `SaveClip.App_718659816_18040093289637488_5562216841940544102_n.jpg` | 3024×4032 | ~3:4 |
| `SaveClip.App_722666673_18040884974637488_3064238404644354997_n.jpg` | 1255×1673 | ~3:4 |
| `SaveClip.App_722986442_18040927931637488_1540251228020514526_n.jpg` | 1086×1448 | ~3:4 |
| `SaveClip.App_723085080_18040927913637488_1314219916175983369_n.jpg` | 1086×1448 | ~3:4 |
| `SaveClip.App_727364649_18042018758637488_6402119738083572810_n.jpg` | 1448×1931 | ~3:4 |
| `SaveClip.App_730226612_18043078220637488_9002003313395254348_n.jpg` | 1448×1931 | ~3:4 |
| `SaveClip.App_743763747_18044721734637488_6525633573413752029_n.jpg` (novo) | 1086×1086 | 1:1 |
| `SaveClip.App_753007399_18046303913637488_7579580762347214129_n.jpg` (novo) | 1448×1931 | ~3:4 |
| `SaveClip.App_777329208_18050859182637488_7982501998669602151_n.jpg` | 3072×4096 | ~3:4 |
| `SaveClip.App_780087797_18051032726637488_6203895115660936453_n.jpg` | 1448×1931 | ~3:4 |
| `SaveClip.App_791296411_18052433405637488_5164867077766678911_n.jpg` (novo) | 3072×4096 | ~3:4 |

Das 12 fotos, 11 têm proporção próxima de 3:4 (retrato de câmera de celular); uma (`SaveClip.App_743763747...`) é quadrada (1:1) — mais próxima de slots circulares/quadrados (como `.cake-illustration`, 280×280px/220×220px, ou os cards de produto, hoje `aspect-ratio: 4/3`, ver 3.4) do que as demais, embora ainda exija recorte. Para o og:image social (paisagem, ~1200×630 = ~1.91:1, ver 5.3), qualquer uma das 12 exigiria corte significativo.

**Sobre uso no site:** a afirmação anterior deste documento, de que nenhuma destas fotos estava em uso, está desatualizada. Pelo menos 4 delas já são usadas como foto de card de produto no cardápio (ver 3.4, atualizado nesta revisão, e 6.2 item 7). Esta revisão não conferiu exaustivamente se as demais fotos já estão em uso em outros pontos do site — trate o restante do documento (por exemplo, 3.1, 3.2, 3.3 e 3.7) como não necessariamente atualizado quanto a este ponto específico.

### 5.2 Achado adicional não previsto no levantamento anterior: `logo-temporaria.jpeg`

Existe um 11º arquivo em `assets/img/`, **não mencionado no levantamento prévio**: `assets/img/logo-temporaria.jpeg`, 1024×1024px (quadrado). Confirmado por busca no código: **não é referenciado em nenhum lugar** (`index.html`, `pedido/index.html`, `css/*.css`, `js/*.js`) — não é usado como favicon, logo do header, og:image nem em nenhum outro lugar.

Ao abrir o arquivo, o conteúdo é uma ilustração circular estilo "selo"/badge com três personagens femininas de estilo cartoon/clipart, aventais rosa, segurando doces (cupcake, brigadeiros, bolo), moldura com pérolas e corações, faixa central com o texto em script dourado "**Cheirinho Doce Artesanal**" (nome completo, sem divergência em relação ao nome oficial usado no site) e, abaixo, "DOCES • BOLOS" em letras maiúsculas.

**Correção em relação ao levantamento anterior:** a versão anterior deste documento registrava o texto da faixa como "Cheirinho Doce" — nome mais curto, divergente do nome oficial "Cheirinho Doce Artesanal". O dono do projeto atualizou o arquivo de imagem depois daquele levantamento; a faixa hoje mostra o texto completo. Essa correção elimina uma das objeções que o mentor listou em 6.1 item 2 (divergência de nome) — ver nota lá —, sem alterar a decisão final já tomada sobre o uso do arquivo.

Isso é uma informação factual relevante que o mentor precisa saber para decidir a identidade visual — ver decisão já tomada sobre este arquivo na seção 6.1.

### 5.3 O que falta (confirmado por ausência no código)

- **Favicon real:** hoje é um emoji 🍰 embutido como SVG inline via data URI (`index.html:21`, `pedido/index.html:11`), não um arquivo de ícone.
- **`og:image`:** a tag **não existe** em nenhum dos dois HTMLs (busca por `og:image` no código não retorna nenhum resultado). O Open Graph atual (`index.html:14-19`) tem `og:type`, `og:title`, `og:description`, `og:locale`, `og:site_name` e `twitter:card` (`summary`, que nem exige imagem grande), mas nenhuma imagem de compartilhamento social. Não é "formato errado" — é ausência total do asset e da tag.
- **Crop quadrado para o hero:** nenhuma das 12 fotos disponíveis está pré-cortada para o formato circular usado em `.cake-illustration` — nem mesmo a única foto quadrada (`SaveClip.App_743763747...`, 1:1), que precisaria só de recorte circular, sem ajuste de proporção.
- **Logo/wordmark definitivo:** conforme contexto do projeto, a cliente não tem um logo definitivo. O arquivo `logo-temporaria.jpeg` existe no repositório mas está desconectado do site e tem nome que sugere provisoriedade.

## 6. Decisões tomadas e lacunas em aberto para o mentor decidir

### 6.1 Decisões já tomadas (fora deste documento)

As três decisões abaixo foram comunicadas pelo dono do projeto em 2026-09-03 e **não estão mais em aberto**. Elas resolvem parte das perguntas listadas em 6.2 — cada uma delas é referenciada de volta ao item correspondente.

1. **Wordmark em Pacifico descartado.** A hipótese do item 3 (6.2) — construir um wordmark 100% tipográfico com o par Pacifico + Poppins — foi descartada pela cliente. Pacifico deixa de ser candidata a wordmark do site. Isso não afeta o único uso atual da fonte no código (`.hero h1 .highlight`, ver 2.2), que segue sujeito às demais decisões de identidade.
2. **`logo-temporaria.jpeg` é a logo oficial do site (favicon + `.logo__icon`/header/footer) — decisão final.** Resolve o item 2 (6.2) por completo: o arquivo `assets/img/logo-temporaria.jpeg` é usado como está, sem redesenho/vetorização, tanto no favicon quanto no `.logo__icon` do header e do footer (não cobre a ilustração do hero em 3.2, que segue como lacuna separada — ver 6.2 item 4).

   Contexto para registro: um mentor técnico foi consultado e recomendou **não** usar esse arquivo como asset de produção, com base nas evidências levantadas em 5.2 na época — (a) a foto de perfil real do Instagram da cliente é diferente da ilustração do selo; (b) o nome que aparecia no selo, "Cheirinho Doce", divergia do nome oficial "Cheirinho Doce Artesanal" usado no site; (c) o estilo da arte é reconhecível como produzido por um gerador automático de logo; (d) a composição não permanece legível em tamanhos pequenos, como o favicon (16–32px) ou o `.logo__icon` de 24px. A recomendação alternativa do mentor foi um monograma tipográfico simples.

   **Nota de atualização:** o dono do projeto atualizou o arquivo `logo-temporaria.jpeg` depois desse levantamento — a faixa central hoje traz o texto completo "Cheirinho Doce Artesanal" (ver 5.2). A objeção (b) acima, sobre divergência de nome, **não se aplica mais** ao arquivo atual; ela é mantida no texto acima só como registro histórico do que o mentor avaliou no momento da recomendação. As demais objeções (a, c, d) continuam válidas, pois dizem respeito à foto de perfil, ao estilo da arte e à legibilidade em tamanho pequeno — não ao texto da faixa.

   O dono do projeto tomou conhecimento dessa ressalva e decidiu, conscientemente, na direção contrária: manter `logo-temporaria.jpeg` como logo oficial do site mesmo assim. Esta é uma decisão final e definitiva — não uma dúvida em aberto. O trade-off (foto de perfil real diferente da ilustração do selo, estilo de gerador automático de logo, e limitação de legibilidade em tamanhos pequenos, em troca de já ter um asset pronto) foi aceito conscientemente pelo dono do projeto; este documento apenas registra o fato, sem julgamento sobre o mérito da escolha.
3. **Zero emoji é restrição de design para toda a extensão do site, não só para a logo.** Nenhum emoji deve ser usado como substituto visual de produto, marca ou ícone decorativo em nenhum ponto do site — regra de processo do dono do projeto, também registrada em `CLAUDE.md` (raiz do repositório). Isso cobre todos os pontos já mapeados neste documento como "Emoji/placeholder": ícone/favicon/logo 🍰 (3.1 header, 3.7 footer), ilustração do hero com bolo e emojis orbitando (3.2), ícones dos cards de diferenciais (3.3), mídia dos cards de produto (3.4) e marcadores de contato no rodapé (3.7) — resolve o item 4 (6.2) quanto a "manter emoji": essa opção está descartada. **Pendente:** qual asset real (foto do estabelecimento, logo real, ou ícone SVG customizado) substitui cada emoji específico é decisão do mentor, ponto a ponto — não deste documento. Não se aplica aos emojis usados como conteúdo de texto na mensagem gerada para o WhatsApp (`js/pedido.js`, ver 3.9), que não são elementos de UI.

### 6.2 Perguntas ainda em aberto para o mentor decidir

Itens ainda sem decisão. Onde uma decisão em 6.1 já resolveu parte da pergunta, há uma nota indicando isso.

1. **Paleta:** manter os tokens atuais (rosa `#e85d8a` + marrom `#8a5a3c`) ou aproximar `--color-secondary` do marrom-chocolate mais escuro observado nas fotos reais? Vale introduzir tokens de cinza/preto (ausentes hoje) para aproveitar os elementos de mármore/avental preto das fotos?
2. **`logo-temporaria.jpeg` — tratamento técnico.** *Resolvido, ver 6.1 item 2:* decisão final do dono do projeto — a imagem é usada como está (sem redesenho/vetorização/recorte), tanto no favicon quanto no `.logo__icon` do header e do footer. Não cobre a ilustração do hero (3.2), que segue em aberto (ver item 4 abaixo).
3. **Identidade tipográfica.** *Resolvido quanto ao wordmark em Pacifico, ver 6.1 item 1:* essa opção está descartada. Ainda em aberto: como a tipografia (Poppins, e o par de fontes carregado) se relaciona com a logo real da cliente na composição final do header/footer.
4. **Ícone/mascote.** *Resolvido quanto a manter emoji, ver 6.1 item 3:* essa opção está descartada em toda a extensão do site. *Resolvido também para favicon e `.logo__icon` do header/footer (3.1, 3.7), ver 6.1 item 2:* substituídos por `logo-temporaria.jpeg`. Ainda em aberto: qual asset real (foto real, ícone SVG customizado, ou elemento extraído da própria logo) substitui, ponto a ponto, os demais emojis mapeados na seção 3 — ilustração do hero (3.2), ícones dos diferenciais (3.3), mídia dos cards de produto (3.4) e marcadores de contato do rodapé (3.7, distintos do ícone de logo do próprio rodapé, já resolvido).
5. **Fotos reais — tratamento de crop:** das 12 fotos disponíveis (ver 5.1), 11 são retrato (~3:4) e 1 é quadrada (1:1, `SaveClip.App_743763747...`). Os slots visuais atuais são circulares (hero) ou não existem ainda (paisagem para og:image; quadrado/4:3 para os 2 cards de produto que ainda não têm foto real, ver 3.4 e item 7 abaixo). Decidir: cortar as fotos existentes para esses formatos, pedir novas fotos em outras proporções à cliente, ou redesenhar os slots para respeitar a proporção retrato original?
6. **`og:image`:** criar um asset dedicado (paisagem, ~1200×630) a partir de qual material — foto real cortada, arte com o wordmark, ou outra composição?
7. **Cards de produto sem foto.** *Parcialmente resolvido, ver 3.4 (atualizado nesta revisão):* dos 6 produtos do cardápio, 4 já usam foto real e nenhum card usa mais emoji. Os 2 restantes — o card com `<h3>` "Bolo Cravejado de Morango no Pote" (nome já atualizado para "Bolo de Fubá com Goiabada" no catálogo da página de pedido, `pedido.js:10`, mas ainda não neste `<h3>`) e "Bolo Naked Cake" — hoje mostram um ícone SVG de traço, não emoji. O dono do projeto informou que esses dois devem usar, respectivamente, `SaveClip.App_791296411...jpg` e `SaveClip.App_753007399...jpg` (ambos já em `assets/img/`, ver 5.1); nenhum dos dois arquivos está referenciado no código até esta revisão, então a troca do ícone pelo `<img>` (e a atualização do `<h3>` do primeiro card para o nome novo) segue como implementação pendente — não mais como decisão de design em aberto. Resta só confirmar se algum recorte é necessário para essas duas fotos no formato atual do card (`aspect-ratio: 4/3`).
8. **Cores fora do sistema de tokens:** `#ffe3ef` (`styles.css:474`) e `#ffd1e3` (`styles.css:614`) são hex soltos, fora de `:root`; e diversas opacidades (`rgba(...)`) replicam tokens sem os referenciar. Vale a pena consolidar isso ao evoluir o design system, ou é baixa prioridade frente às decisões de identidade?
9. **Conteúdo do rodapé:** endereço/horário de atendimento estão marcados como pendentes desde o código-fonte (`index.html:282`) — não é uma decisão de design, mas é um bloqueio de conteúdo que convém não esquecer junto da entrega visual.
