document.addEventListener('DOMContentLoaded', function () {
  const header = this.querySelector('.header');
  const btnNav = this.querySelector('.btn--mobile-nav');

  btnNav.addEventListener('click', function () {
    header.classList.toggle('nav-open');
  })
})