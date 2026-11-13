// Highlights the section of the page currently being read in the sticky contents list.
const tocLinks = [...document.querySelectorAll('.toc a')];
const tocSections = tocLinks.map((link) => document.querySelector(link.getAttribute('href')));
// After a click in the list, keep that entry highlighted until the visitor scrolls themselves.
// Otherwise the last sections, which can share the screen at the page bottom, could never be selected.
let clicked = null;

function setActive(index) {
  tocLinks.forEach((link, i) => link.setAttribute('aria-current', String(i === index)));
}

function updateToc() {
  if (clicked !== null) return setActive(clicked);
  const line = window.innerHeight * 0.3;
  let active = 0;
  tocSections.forEach((section, i) => {
    if (section && section.getBoundingClientRect().top <= line) active = i;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) active = tocSections.length - 1;
  setActive(active);
}

if (tocLinks.length) {
  tocLinks.forEach((link, i) => link.addEventListener('click', () => { clicked = i; setActive(i); }));
  ['wheel', 'touchstart', 'keydown'].forEach((type) =>
    window.addEventListener(type, () => { clicked = null; }, { passive: true }));
  window.addEventListener('scroll', updateToc, { passive: true });
  window.addEventListener('resize', updateToc);
  updateToc();
}
