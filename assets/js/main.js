/* Progressive enhancement only — the site is fully functional without JS. */
(function () {
  "use strict";

  // Reveal-on-scroll: opt sections in, then let IntersectionObserver show them.
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(
    ".case, .case-card, .section-head, .lead__inner, .skills__head, .skills__list, .craft-teaser__inner"
  );

  if (reduce || !("IntersectionObserver" in window)) {
    return; // leave content in its default (visible) state
  }

  targets.forEach(function (el) { el.classList.add("reveal"); });

  function show(el) { el.classList.add("is-in"); }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        show(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

  targets.forEach(function (el) { io.observe(el); });

  // Failsafe: content must never stay hidden. Reveal anything still pending
  // shortly after load (covers observer quirks, bfcache, fast scroll, etc.).
  window.setTimeout(function () {
    targets.forEach(function (el) {
      if (!el.classList.contains("is-in")) { show(el); }
    });
  }, 1600);
})();
