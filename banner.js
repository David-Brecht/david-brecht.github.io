// Collapsing project banner (wide screens only, matching the CSS media query).
// The banner is sticky with a negative top offset, so it scrolls up until only a strip
// as tall as the title is left under the navy top bar. --p (0..1) fades the photo to navy
// and hides the subtitle on the way.
const banner = document.querySelector('.project-banner');
const header = document.querySelector('.site-header--sticky');
const wide = window.matchMedia('(min-width: 1181px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (banner && header) {
  const title = banner.querySelector('h1');
  const stripPadding = 14 * 2; // padding above and below the title once collapsed
  let travel = 0;

  const layout = () => {
    const bar = header.offsetHeight;
    if (!wide.matches) {
      banner.style.top = '';
      banner.style.setProperty('--p', 0);
      document.documentElement.style.setProperty('--sticky-offset', `${bar + 16}px`);
      return;
    }
    // Measure the title at its collapsed size, since that is what the stuck strip holds.
    banner.style.setProperty('--p', 1);
    const strip = title.offsetHeight + stripPadding;
    travel = banner.offsetHeight - strip;
    banner.style.top = `${bar - travel}px`;
    document.documentElement.style.setProperty('--sticky-offset', `${bar + strip + 16}px`);
    progress();
  };

  const progress = () => {
    if (!wide.matches || travel <= 0) return;
    const scrolled = header.offsetHeight - banner.getBoundingClientRect().top;
    let p = Math.min(Math.max(scrolled / travel, 0), 1);
    if (reducedMotion.matches) p = p > 0.5 ? 1 : 0;
    banner.style.setProperty('--p', p.toFixed(3));
  };

  window.addEventListener('scroll', progress, { passive: true });
  window.addEventListener('resize', layout);
  wide.addEventListener('change', layout);
  banner.querySelector('img').addEventListener('load', layout);
  layout();
}
