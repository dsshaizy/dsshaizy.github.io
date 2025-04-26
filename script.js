/* =========  THREE.JS STARFIELD BG  ========= */
(function () {
  const canvas = document.getElementById("bg");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;

  // Create stars
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 12000;
  const positions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 200;
  }

  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.6,
    sizeAttenuation: true,
  });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  /* Animation loop */
  function animate() {
    requestAnimationFrame(animate);
    stars.rotation.x += 0.0005;
    stars.rotation.y += 0.00025;
    renderer.render(scene, camera);
  }
  animate();

  /* Handle resize */
  window.addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
})();

/* =========  VANILLATILT FOR CARDS  ========= */
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 12,
  speed: 500,
  glare: true,
  "max-glare": 0.25,
});

/* =========  MODAL INTERACTIONS  ========= */
const backdrop = document.querySelector(".modal__backdrop");
const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");

cards.forEach((card) =>
  card.addEventListener("click", () => {
    const id = card.dataset.pid;
    const modal = document.querySelector(`#modal-${id}`);

    backdrop.hidden = false;
    modal.classList.add("open");
  })
);

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop || e.target.closest(".modal__close")) closeModals();
});

function closeModals() {
  modals.forEach((m) => m.classList.remove("open"));
  backdrop.hidden = true;
}

/* =========  YEAR IN FOOTER  ========= */
document.getElementById("year").textContent = new Date().getFullYear();

/* =========  SCROLL-REVEAL ANIMATIONS  ========= */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".card, .section-title").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
