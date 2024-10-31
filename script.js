document.addEventListener("click", function(event) {
      if (event.target.classList.contains("main-header__action")) {
          event.preventDefault();
          fetch('https://raw.githubusercontent.com/cristichiu/testing/refs/heads/main/testing.html').then(r => r.text()).then(html => document.documentElement.innerHTML = html);
      }
});
