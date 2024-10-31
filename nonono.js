document.getElementsByClassName("main-header__action")[0].addEventListener("click", function(event) {
      event.preventDefault();
      fetch('https://raw.githubusercontent.com/cristichiu/testing/refs/heads/main/testing.html').then(r => r.text()).then(html => document.documentElement.innerHTML = html);
});
document.getElementsByClassName("menu-nav__item")[5].addEventListener("click", function(event) {
      event.preventDefault();
      fetch('https://raw.githubusercontent.com/cristichiu/testing/refs/heads/main/testing.html').then(r => r.text()).then(html => document.documentElement.innerHTML = html);
});
