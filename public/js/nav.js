/* Toggles the nav between its flat and floating-pill states.

   #nav-sentinel is an invisible marker at the very top of the document, so
   "sentinel has left the viewport" is equivalent to "the nav is now stuck".
   An observer is used rather than a scroll listener so nothing runs on the
   main thread during the scroll itself. */
(function () {
  var nav = document.querySelector('nav');
  var sentinel = document.getElementById('nav-sentinel');
  if (!nav || !sentinel || !('IntersectionObserver' in window)) return;

  new IntersectionObserver(function (entries) {
    nav.classList.toggle('is-stuck', !entries[0].isIntersecting);
  }).observe(sentinel);
})();
