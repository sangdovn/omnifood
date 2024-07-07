document.addEventListener("DOMContentLoaded", function () {
  const header = this.querySelector(".header");
  const btnNav = this.querySelector(".btn--mobile-nav");

  btnNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });

  // Update year
  const year = this.querySelector(".year");
  year.textContent = new Date().getFullYear();

  const sectionHeroEl = document.querySelector(".section-hero");

  const rootMargin = -(window.innerHeight / 1.5)

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
      }

      if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: `${rootMargin}px`,
    }
  );
  obs.observe(sectionHeroEl);
});
