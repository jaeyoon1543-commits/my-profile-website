document.querySelectorAll('img[data-fallback]').forEach(image => {
  function showFallback() {
    if (image.dataset.fallback) {
      const fallback = image.dataset.fallback;
      delete image.dataset.fallback;
      image.src = fallback;
    }
  }
  image.addEventListener('error', showFallback, { once: true });
  // A lazy image can be complete before the browser has started fetching it.
  if (image.currentSrc && image.complete && image.naturalWidth === 0) showFallback();
});
