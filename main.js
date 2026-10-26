const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

const toast = document.getElementById('toast');
const say = (msg) => { toast.textContent = msg; toast.classList.add('show'); clearTimeout(say.t); say.t = setTimeout(() => toast.classList.remove('show'), 2200); };
const copy = document.getElementById('copy');
copy.addEventListener('click', async () => {
  const email = 'alan.aesedj@gmail.com';
  try { await navigator.clipboard.writeText(email); say(copy.dataset.ok); }
  catch { const r = document.createRange(); r.selectNodeContents(document.getElementById('mail')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); say(copy.dataset.fallback); }
});

// Al cambiar de idioma se conserva la sección en la que estás.
document.querySelectorAll('.lang a').forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  if (a.getAttribute('aria-current')) return;
  const here = [...document.querySelectorAll('section[id]')].filter((s) => s.getBoundingClientRect().top < innerHeight / 2).pop();
  location.href = a.href + (here ? '#' + here.id : '');
}));
