// Click-to-load YouTube: nothing is requested from YouTube until the visitor clicks play.
// Without JavaScript, the poster is a plain link to the video on YouTube.
document.querySelectorAll('.video[data-youtube-id]').forEach((box) => {
  const link = box.querySelector('.video-poster');
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${box.dataset.youtubeId}?autoplay=1&rel=0`;
    iframe.title = link.getAttribute('aria-label').replace(/^Play video: | \(opens YouTube\)$/g, '');
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    box.replaceChildren(iframe);
    iframe.focus();
  });
});
