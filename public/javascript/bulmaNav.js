document.addEventListener('DOMContentLoaded', function () {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach($el => {
      $el.addEventListener('click', () => {
        let target = $el.dataset.target;
        let $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});