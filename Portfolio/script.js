(function () {
  var links = document.querySelectorAll('.nav a[href^="#"]');
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

  var sections = document.querySelectorAll("main section[id]");
  if (!("IntersectionObserver" in window) || !sections.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove("active"); });
      var link = byId[entry.target.id];
      if (link) link.classList.add("active");
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(function (section) { observer.observe(section); });
})();
