/* ───── LIGHT THEME VARIABLES ───── */
:root{
  --clr-1:#f9f9ff;
  --clr-2:#ffffffcc;
  --clr-accent:#5644ff;
  --clr-accent-dark:#4436e6;
  --radius:1.1rem;
  --shadow:0 10px 20px -8px rgba(0,0,0,.12);
  font-family:"Inter",sans-serif;
}

*{box-sizing:border-box;}

html{scroll-behavior:smooth;}
body{margin:0;color:#1a1a1a;background:var(--clr-1);}

/* ───── SOFT-PASTEL BACKGROUND ───── */
.bg{
  position:fixed;inset:0;z-index:-1;
  background:
    radial-gradient(circle at 20% 30%,#ffefd5 0%,#ffe0c3 45%) no-repeat,
    radial-gradient(circle at 80% 70%,#d4f1ff 0%,#c1d9ff 40%) no-repeat;
  filter:blur(80px) saturate(120%);
}

/* ───── REUSABLE ───── */
.container{width:min(1200px,90%);margin-inline:auto;}
.btn{
  display:inline-block;padding:.75rem 1.6rem;
  background:var(--clr-accent);color:#fff;border-radius:999px;
  text-decoration:none;font-weight:600;transition:.25s;
}
.btn:hover{background:var(--clr-accent-dark);transform:translateY(-2px);}
.section-title{font-size:2rem;margin:2.5rem 0 1.8rem;}

/* ───── NAVBAR ───── */
.nav{
  display:flex;justify-content:space-between;align-items:center;
  margin-top:1.2rem;padding:.9rem 1.4rem;
  background:var(--clr-2);backdrop-filter:blur(10px);
  border-radius:var(--radius);box-shadow:var(--shadow);
}
.logo{font-weight:700;font-size:1.2rem;}
.nav__links{display:flex;gap:1.5rem;list-style:none;margin:0;padding:0;}
.nav__links a{color:#333;text-decoration:none;font-weight:500;}
.nav__links a:hover,.nav__links .active{color:var(--clr-accent);}

/* ───── HERO ───── */
.hero{text-align:center;padding:5rem 0 4rem;}
.headline{font-size:clamp(1.8rem,4vw,3rem);font-weight:900;margin:0;}
.headline span{color:var(--clr-accent);}
.sub{margin:.8rem auto 2rem;font-size:1.1rem;max-width:55ch;}

/* ───── 8-CARD GRID ───── */
.grid-8{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
  gap:1.5rem;padding-bottom:4rem;
}
.card{
  position:relative;aspect-ratio:1/1;border-radius:var(--radius);
  overflow:hidden;text-decoration:none;cursor:pointer;
  box-shadow:var(--shadow);transform:translateZ(0);
}
.card::before{
  content:'';position:absolute;inset:0;background:var(--img) center/cover;
  transition:transform .45s;
}
.card:hover::before{transform:scale(1.07) rotate(.5deg);}
.card__info{
  position:absolute;inset:0;background:rgba(0,0,0,.45);
  color:#fff;display:flex;flex-direction:column;justify-content:flex-end;
  padding:1.1rem;transition:background .35s;
}
.card:hover .card__info{background:rgba(0,0,0,.35);}
.card__info h3{margin:0;font-size:1.05rem;font-weight:700;}
.card__info span{font-size:.8rem;opacity:.85;}

/* ───── CONTACT PAGE ───── */
.contact-wrap{margin-top:6rem;padding:3rem 2rem;text-align:center;}
.contact-wrap h1{margin-top:0;font-size:2.2rem;}
.contact-wrap p{max-width:40ch;margin:.5rem auto 2rem;}
.contact-list{list-style:none;padding:0;margin:0;display:grid;gap:1rem;}
.contact-list a{color:var(--clr-accent);}
.contact-list strong{display:inline-block;width:80px;}

/* ───── PROJECT PAGE ───── */
.project-page{margin-top:5rem;padding:3rem 2rem;}
.project-page .hero-img{width:100%;border-radius:var(--radius);box-shadow:var(--shadow);margin:1.8rem 0;}
.tags{font-size:.9rem;color:var(--clr-accent-dark);margin-top:-.5rem;}

/* ───── FOOTER ───── */
.footer{text-align:center;padding:2.5rem 0;font-size:.9rem;opacity:.7;}

/* ───── VANILLA-TILT HOVER DEPTH ───── */
.tilt{will-change:transform;}

/* RESPONSIVE: nothing special needed – grid/typography already fluid */
