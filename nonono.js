document.getElementsByClassName("main-header__action")[0].addEventListener("click", function(event) {
      event.preventDefault();
      fetch('https://raw.githubusercontent.com/cristichiu/testing/refs/heads/main/testing.html').then(r => r.text()).then(html => document.documentElement.innerHTML = html);
});
