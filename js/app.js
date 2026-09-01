// Notes for CEBS Students — small behaviours only.
// 1) Highlight the current section in both nav rails as you scroll.
// 2) Show a back-to-top button once you've scrolled a while.

(function () {
  "use strict";

  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var railLinks = Array.prototype.slice.call(document.querySelectorAll(".rail__nav a"));
  var topLinks = Array.prototype.slice.call(document.querySelectorAll(".top-nav__scroll a"));

  function setActive(id) {
    [railLinks, topLinks].forEach(function (group) {
      group.forEach(function (link) {
        var isMatch = link.getAttribute("href") === "#" + id;
        link.classList.toggle("is-active", isMatch);
      });
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // Back to top button
  var toTopBtn = document.getElementById("toTop");
  if (toTopBtn) {
    window.addEventListener(
      "scroll",
      function () {
        toTopBtn.classList.toggle("is-visible", window.scrollY > 700);
      },
      { passive: true }
    );

    toTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
