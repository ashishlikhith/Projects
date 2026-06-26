const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const progressBar = document.querySelector('.progress-bar');
const topBtn = document.querySelector('.top-btn');
const revealItems = document.querySelectorAll('.reveal');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? scrollTop / height : 0;
  progressBar.style.transform = `scaleX(${progress})`;
};

window.addEventListener('scroll', () => {
  updateProgress();
  topBtn.classList.toggle('visible', window.scrollY > 500);
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      item.classList.add('is-visible');
    }
  });
});

window.addEventListener('load', () => {
  updateProgress();
  revealItems.forEach((item) => item.classList.add('is-visible'));
});

topBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
