/* 1) Year auto‐update */
(() => {
  document.querySelectorAll('#year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();

/* 2) VanillaTilt on .tilt */
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll('.tilt'), {
    max:10, speed:500, glare:true, 'max-glare':0.25
  });
}

/* 3) Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const tgt = document.getElementById(a.getAttribute('href').slice(1));
    if (!tgt) return;
    e.preventDefault();
    tgt.scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

/* 4) Reveal on scroll */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in-view');
      io.unobserve(en.target);
    }
  });
},{ threshold:0.15 });
document.querySelectorAll('.reveal, .card').forEach(el => io.observe(el));
