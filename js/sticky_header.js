document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('sticky-header');
  const sticky = header.offsetTop;

  window.addEventListener('scroll', function () {
    if (window.scrollY > sticky) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
});