/* =========================================================
   script.js · v2.0 – Works on Home, Projects, Contact, etc.
   ========================================================= */

/* 1 ░ Auto-update copyright year */
(() => {
  document.querySelectorAll('#year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();

/* 2 ░ VanillaTilt for cards & profile */
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll('.tilt'), {
    max: 10,
    speed: 500,
    glare: true,
    'max-glare': 0.25,
  });
}

/* 3 ░ Smooth-scroll internal anchors */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const tgt = document.getElementById(anchor.getAttribute('href').slice(1));
    if (tgt) {
      e.preventDefault();
      tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${tgt.id}`);
    }
  });
});

/* 4 ░ Reveal-on-scroll */
const revealEls = document.querySelectorAll('.reveal, .card, .section-title');
if (revealEls.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  },{ threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}

/* 5 ░ Nav link highlighting */
(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    if (a.getAttribute('href').includes(page)) a.classList.add('active');
  });
})();
