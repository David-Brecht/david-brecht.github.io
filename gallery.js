// Previous/next buttons for the sideways-scrolling plot gallery.
// The gallery still scrolls by swipe or trackpad; without JavaScript the buttons stay hidden.
document.querySelectorAll('.gallery').forEach((gallery) => {
  const nav = gallery.nextElementSibling;
  if (!nav || !nav.classList.contains('gallery-nav')) return;
  const slides = gallery.querySelectorAll('figure');
  const [prev, next] = nav.querySelectorAll('button');
  const count = nav.querySelector('.gallery-count');
  const current = () => Math.round(gallery.scrollLeft / gallery.clientWidth);

  const update = () => {
    const i = current();
    count.textContent = `${i + 1} / ${slides.length}`;
    prev.disabled = i === 0;
    next.disabled = i === slides.length - 1;
  };

  nav.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      const target = slides[current() + Number(button.dataset.step)];
      if (target) gallery.scrollTo({ left: target.offsetLeft - gallery.offsetLeft, behavior: 'smooth' });
    });
  });

  gallery.addEventListener('scroll', update, { passive: true });
  nav.hidden = slides.length < 2;
  update();
});
