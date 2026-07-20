const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const menu = $('.menu-toggle');
const nav = $('.primary-nav');
menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});
$$('.primary-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));

$$('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const open = item.classList.contains('open');
    $$('.faq-item').forEach(other => {
      other.classList.remove('open');
      $('button', other).setAttribute('aria-expanded', 'false');
      $('button i', other).textContent = '+';
    });
    if (!open) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      $('i', button).textContent = '−';
    }
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => observer.observe(el));


// Revenue Leak Explorer
const leakData = [
  {
    label: 'STAGE 01 · DISCOVERY',
    node: 'Slow interactive state',
    problemTitle: 'Slow DOM interactive states or bloated third-party layout scripts.',
    problemCopy: 'The visitor arrives from a paid campaign, but the interface takes too long to become useful. Momentum collapses before the offer has a chance to make its case.',
    solutionTitle: 'Clean Liquid asset compiling and asynchronous script optimization.',
    solutionCopy: 'We reduce render-blocking dependencies, sequence third-party scripts by commercial priority, and preserve a fast path from click to first meaningful action.',
    signal: 'Interaction readiness',
    outcome: 'Traffic momentum preserved'
  },
  {
    label: 'STAGE 02 · PRODUCT PAGE',
    node: 'Decision hierarchy failure',
    problemTitle: 'The page presents information, but does not sequence the buying decision.',
    problemCopy: 'Benefits, proof, variants, delivery reassurance, and the primary action compete at the same visual weight. Customers work too hard to understand why they should buy now.',
    solutionTitle: 'Commercial hierarchy mapped around intent, objection, and one-handed mobile action.',
    solutionCopy: 'We restructure the product page so value becomes clear before friction appears, proof arrives before doubt grows, and the primary purchase action remains accessible without visual noise.',
    signal: 'Add-to-cart intent',
    outcome: 'Product decisions accelerated'
  },
  {
    label: 'STAGE 03 · CHECKOUT',
    node: 'Completion friction',
    problemTitle: 'Unexpected decisions, weak reassurance, or cart mechanics interrupt purchase momentum.',
    problemCopy: 'The customer has high intent, but shipping ambiguity, discount-code distraction, unclear totals, or unnecessary form decisions create a final reason to abandon.',
    solutionTitle: 'A controlled cart-to-checkout sequence with reassurance placed at the point of doubt.',
    solutionCopy: 'We simplify cart actions, clarify costs early, preserve context across devices, and position trust cues where customers need them—not in a generic footer far from the decision.',
    signal: 'Checkout completion',
    outcome: 'High-intent revenue protected'
  }
];

const leakTabs = $$('.leak-tab');
const leakPanel = $('#leak-panel');

function setLeakStage(index) {
  const data = leakData[index];
  if (!data || !leakPanel) return;

  leakTabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  leakPanel.classList.add('is-swapping');

  window.setTimeout(() => {
    $('#leak-stage-label').textContent = data.label;
    $('#leak-flow-node').textContent = data.node;
    $('#leak-problem-title').textContent = data.problemTitle;
    $('#leak-problem-copy').textContent = data.problemCopy;
    $('#leak-solution-title').textContent = data.solutionTitle;
    $('#leak-solution-copy').textContent = data.solutionCopy;
    $('#leak-signal').textContent = data.signal;
    $('#leak-outcome').textContent = data.outcome;
    leakPanel.setAttribute('aria-labelledby', `leak-tab-${index + 1}`);
    leakPanel.classList.remove('is-swapping');
  }, 180);
}

leakTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setLeakStage(index));
  tab.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1;
    const nextIndex = (index + direction + leakTabs.length) % leakTabs.length;
    leakTabs[nextIndex].focus();
    setLeakStage(nextIndex);
  });
});

// Lightweight audit form interaction.
// Replace this handler with your CRM/form endpoint before production.
const auditForm = $('#audit-form');
auditForm?.addEventListener('submit', event => {
  event.preventDefault();
  const note = $('#audit-form-note');
  const submitButton = $('button[type="submit"]', auditForm);
  submitButton.disabled = true;
  submitButton.textContent = 'Audit Request Prepared';
  note.textContent = 'Your request is ready. Connect this form to your preferred CRM or booking endpoint before launch.';
  note.classList.add('success');
});
