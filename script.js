/* ------------  VANILLATILT  ------------ */
VanillaTilt.init(document.querySelectorAll('.card'), {
  max: 10,
  speed: 500,
  glare: true,
  'max-glare': 0.25,
});

/* ------------  MODAL LOGIC  ------------ */
const backdrop = document.querySelector('.modal-backdrop');
const cards    = document.querySelectorAll('.card');
const modals   = document.querySelectorAll('.modal');

cards.forEach(card => card.addEventListener('click', () => {
  const id = card.dataset.id;
  const modal = document.querySelector(`#modal-${id}`);
  backdrop.hidden = false;
  modal.classList.add('open');
}));

backdrop.addEventListener('click', e => {
  if (e.target === backdrop || e.target.closest('.modal__close')) close();
});

function close() {
  modals.forEach(m => m.classList.remove('open'));
  backdrop.hidden = true;
}

/* ------------  YEAR IN FOOTER  ------------ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ------------  SCROLL-REVEAL  ------------ */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
},{ threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
