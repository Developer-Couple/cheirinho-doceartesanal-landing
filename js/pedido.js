(() => {
  'use strict';

  const WHATSAPP_NUMBER = '5535992200328';

  const CATALOG = [
    {
      category: 'Bolos de Pote',
      items: [
        { id: 'pote-cravejado', name: 'Bolo Cravejado de Morango no Pote', tag: 'Novidade' },
        { id: 'pote-ninho', name: 'Bolo de Pote — Ninho com Morango' },
        { id: 'pote-matilda', name: 'Bolo de Pote — Matilda' },
        { id: 'pote-dois-amores', name: 'Bolo de Pote — Dois Amores' },
      ],
    },
    {
      category: 'Bolos Inteiros',
      items: [
        { id: 'naked', name: 'Bolo Naked Cake' },
        { id: 'prestigio', name: 'Bolo Inteiro — Prestígio' },
        { id: 'matilda-inteiro', name: 'Bolo Inteiro — Matilda' },
      ],
    },
    {
      category: 'Doces para Festa',
      items: [
        { id: 'docinhos', name: 'Docinhos Finos (cento)' },
        { id: 'garconetes', name: 'Garçonetes' },
      ],
    },
    {
      category: 'Personalizado',
      items: [
        { id: 'personalizado', name: 'Encomenda Personalizada (aniversário, chá revelação, casamento...)' },
      ],
    },
  ];

  const state = new Map(); // id -> qty

  const catalogEl = document.getElementById('orderCatalog');
  const summaryListEl = document.getElementById('summaryList');
  const summaryEmptyEl = document.getElementById('summaryEmpty');
  const summaryHintEl = document.getElementById('summaryHint');
  const sendBtn = document.getElementById('sendOrderBtn');
  const nameInput = document.getElementById('customerName');
  const dateInput = document.getElementById('deliveryDate');
  const notesInput = document.getElementById('notes');

  if (!catalogEl) return;

  const findItem = (id) => {
    for (const group of CATALOG) {
      const found = group.items.find((item) => item.id === id);
      if (found) return found;
    }
    return null;
  };

  function renderCatalog() {
    const html = CATALOG.map((group) => `
      <div class="order-category">
        <h2 class="order-category__title">${group.category}</h2>
        ${group.items.map((item) => `
          <div class="order-item">
            <input
              type="checkbox"
              class="order-item__checkbox"
              id="check-${item.id}"
              data-id="${item.id}"
            >
            <label class="order-item__label" for="check-${item.id}">
              <span class="order-item__name">${item.name}</span>
              ${item.tag ? `<span class="order-item__tag">${item.tag}</span>` : ''}
            </label>
            <div class="qty-stepper" data-id="${item.id}">
              <button type="button" class="qty-stepper__btn" data-action="decrease" aria-label="Diminuir quantidade">−</button>
              <span class="qty-stepper__value">1</span>
              <button type="button" class="qty-stepper__btn" data-action="increase" aria-label="Aumentar quantidade">+</button>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('');

    catalogEl.innerHTML = html;
  }

  function setQty(id, qty) {
    const clamped = Math.max(0, Math.min(20, qty));
    if (clamped === 0) {
      state.delete(id);
    } else {
      state.set(id, clamped);
    }

    const checkbox = catalogEl.querySelector(`#check-${id}`);
    const valueEl = catalogEl.querySelector(`.qty-stepper[data-id="${id}"] .qty-stepper__value`);
    if (checkbox) checkbox.checked = clamped > 0;
    if (valueEl) valueEl.textContent = String(clamped || 1);

    renderSummary();
  }

  function renderSummary() {
    const hasItems = state.size > 0;
    summaryEmptyEl.hidden = hasItems;

    summaryListEl.querySelectorAll('[data-summary-item]').forEach((el) => el.remove());

    state.forEach((qty, id) => {
      const item = findItem(id);
      if (!item) return;
      const li = document.createElement('li');
      li.setAttribute('data-summary-item', '');
      li.innerHTML = `<span>${item.name}</span><span class="order-summary__qty">×${qty}</span>`;
      summaryListEl.appendChild(li);
    });

    const canSend = hasItems;
    sendBtn.setAttribute('aria-disabled', String(!canSend));
    summaryHintEl.hidden = canSend;

    updateWhatsappLink();
  }

  function buildMessage() {
    const name = nameInput.value.trim();
    const date = dateInput.value;
    const notes = notesInput.value.trim();

    const lines = [];
    lines.push(name ? `Oi, Cibele! Me chamo ${name}. Vim pelo site e quero fazer este pedido:` : 'Oi, Cibele! Vim pelo site e quero fazer este pedido:');
    lines.push('');

    state.forEach((qty, id) => {
      const item = findItem(id);
      if (item) lines.push(`• ${qty}x ${item.name}`);
    });

    if (date) {
      const [year, month, day] = date.split('-');
      lines.push('');
      lines.push(`📅 Data desejada: ${day}/${month}/${year}`);
    }

    if (notes) {
      lines.push('');
      lines.push(`📝 Observações: ${notes}`);
    }

    lines.push('');
    lines.push('Aguardo retorno, obrigada(o)! 🍓');

    return lines.join('\n');
  }

  function updateWhatsappLink() {
    const text = encodeURIComponent(buildMessage());
    sendBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  catalogEl.addEventListener('change', (e) => {
    const target = e.target;
    if (!target.classList.contains('order-item__checkbox')) return;
    const id = target.dataset.id;
    setQty(id, target.checked ? (state.get(id) || 1) : 0);
  });

  catalogEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.qty-stepper__btn');
    if (!btn) return;
    const stepper = btn.closest('.qty-stepper');
    const id = stepper.dataset.id;
    const current = state.get(id) || 1;
    if (btn.dataset.action === 'increase') {
      setQty(id, current + 1);
    } else if (current > 1) {
      setQty(id, current - 1);
    }
  });

  [nameInput, dateInput, notesInput].forEach((input) => {
    input.addEventListener('input', updateWhatsappLink);
  });

  renderCatalog();
  renderSummary();
})();
