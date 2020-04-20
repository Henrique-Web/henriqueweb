// Menu
var menu = document.querySelector("#menu");

document.addEventListener("click", function (event) {
  if (event.target.closest("#menu1")) {
    menu.classList.remove("fechado") & menu.classList.add("aberto");
  } else if (!event.target.closest("#menu")) {
    menu.classList.remove("aberto") & menu.classList.add("fechado");
  } else if (event.target.closest("#menux")) {
    menu.classList.remove("aberto") & menu.classList.add("fechado");
  }
});
// Menu-Fim

//  Menu-servicos
var nav = document.querySelector("#alvo2");

document.addEventListener("click", function (event) {
  if (event.target.closest("#alvo")) {
    nav.classList.remove("fechado") & nav.classList.add("aberto");
  } else if (!event.target.closest("#alvo2")) {
    nav.classList.remove("aberto") & nav.classList.add("fechado");
  } else if (event.target.closest("#test3")) {
    nav.classList.remove("aberto") & nav.classList.add("fechado");
  }
});
// Menu-servicos-fim
